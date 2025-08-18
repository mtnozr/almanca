// Main Application JavaScript
// German-Turkish Word Game for 11-year-old children

class WordGame {
    constructor() {
        this.currentScreen = 'main-menu';
        this.currentGameMode = null;
        this.gameState = {
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            timeElapsed: 0,
            streak: 0
        };
        this.gameTimer = null;
        this.speechSynthesis = window.speechSynthesis;
        this.settings = this.loadSettings();
        this.progress = this.loadProgress();
        this.currentWords = [];
        this.selectedCards = [];
        this.gameStartTime = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.applySettings();
        this.hideLoadingScreen();
        this.updateProgressDisplay();
        this.updateAllTexts();
    }
    
    setupEventListeners() {
        // Main menu buttons
        document.getElementById('play-btn').addEventListener('click', () => this.showScreen('game-modes'));
        document.getElementById('study-btn').addEventListener('click', () => this.showScreen('study-screen'));
        document.getElementById('progress-btn').addEventListener('click', () => this.showScreen('progress-screen'));
        document.getElementById('settings-menu-btn').addEventListener('click', () => this.showScreen('settings-screen'));
        
        // Header controls
        document.getElementById('language-toggle').addEventListener('click', () => toggleLanguage());
        document.getElementById('settings-btn').addEventListener('click', () => this.showScreen('settings-screen'));
        
        // Back buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => this.goBack());
        });
        
        // Game mode buttons
        document.querySelectorAll('.game-mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.getAttribute('data-mode');
                this.startGame(mode);
            });
        });
        
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                this.filterWordsByCategory(category);
            });
        });
        
        // Game controls
        document.getElementById('hint-btn').addEventListener('click', () => this.showHint());
        document.getElementById('sound-btn').addEventListener('click', () => this.playCurrentWord());
        
        // Settings
        document.getElementById('high-contrast').addEventListener('change', (e) => this.updateSetting('highContrast', e.target.checked));
        document.getElementById('disable-animations').addEventListener('change', (e) => this.updateSetting('disableAnimations', e.target.checked));
        document.getElementById('large-text').addEventListener('change', (e) => this.updateSetting('largeText', e.target.checked));
        document.getElementById('enable-sound').addEventListener('change', (e) => this.updateSetting('enableSound', e.target.checked));
        document.getElementById('enable-speech').addEventListener('change', (e) => this.updateSetting('enableSpeech', e.target.checked));
        document.getElementById('hints-per-game').addEventListener('change', (e) => this.updateSetting('hintsPerGame', parseInt(e.target.value)));
        
        // Data management
        document.getElementById('reset-progress').addEventListener('click', () => this.resetProgress());
        document.getElementById('export-data').addEventListener('click', () => this.exportData());
        
        // Modal buttons
        document.getElementById('play-again').addEventListener('click', () => this.restartGame());
        document.getElementById('back-to-menu').addEventListener('click', () => this.showScreen('main-menu'));
        document.getElementById('close-hint').addEventListener('click', () => this.hideHint());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            app.style.display = 'block';
        }, 1500);
    }
    
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen, #main-menu').forEach(screen => {
            screen.style.display = 'none';
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.style.display = 'flex';
            this.currentScreen = screenId;
            
            // Initialize screen-specific content
            if (screenId === 'study-screen') {
                this.loadWordCards();
            } else if (screenId === 'progress-screen') {
                this.updateProgressDisplay();
            }
        }
    }
    
    goBack() {
        if (this.currentScreen === 'game-screen') {
            this.endGame();
        }
        
        const screenMap = {
            'game-modes': 'main-menu',
            'game-screen': 'game-modes',
            'study-screen': 'main-menu',
            'progress-screen': 'main-menu',
            'settings-screen': 'main-menu'
        };
        
        const previousScreen = screenMap[this.currentScreen];
        if (previousScreen) {
            this.showScreen(previousScreen);
        }
    }
    
    startGame(mode) {
        this.currentGameMode = mode;
        this.resetGameState();
        this.showScreen('game-screen');
        this.loadGameContent();
        this.startTimer();
    }
    
    resetGameState() {
        this.gameState = {
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            timeElapsed: 0,
            streak: 0
        };
        this.selectedCards = [];
        this.gameStartTime = Date.now();
    }
    
    loadGameContent() {
        const gameContent = document.getElementById('game-content');
        const gameModeTitle = document.getElementById('game-mode-title');
        
        // Set game mode title
        gameModeTitle.textContent = t(this.currentGameMode);
        
        // Load words based on game mode
        this.currentWords = getRandomWords(10);
        
        // Generate game content based on mode
        switch (this.currentGameMode) {
            case 'matching':
                this.createMatchingGame();
                break;
            case 'memory':
                this.createMemoryGame();
                break;
            case 'speed':
                this.createSpeedGame();
                break;
            case 'fill':
                this.createFillGame();
                break;
            case 'listen':
                this.createListenGame();
                break;
        }
    }
    
    createMatchingGame() {
        const gameContent = document.getElementById('game-content');
        const words = this.currentWords.slice(0, 6); // Use 6 words for matching
        const allWords = [...words, ...words.map(w => ({ ...w, isTurkish: true }))];
        const shuffledWords = allWords.sort(() => 0.5 - Math.random());
        
        gameContent.innerHTML = `
            <div class="matching-game">
                ${shuffledWords.map((word, index) => `
                    <div class="matching-card" data-index="${index}" data-word="${word.german}">
                        ${word.isTurkish ? word.turkish : `${word.article} ${word.german}`}
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add click handlers
        gameContent.querySelectorAll('.matching-card').forEach(card => {
            card.addEventListener('click', () => this.handleMatchingCardClick(card));
        });
    }
    
    createMemoryGame() {
        const gameContent = document.getElementById('game-content');
        const words = this.currentWords.slice(0, 8); // Use 8 words for memory
        const cards = [];
        
        // Create pairs of cards
        words.forEach(word => {
            cards.push({ ...word, type: 'german', pair: word.german });
            cards.push({ ...word, type: 'turkish', pair: word.german });
        });
        
        const shuffledCards = cards.sort(() => 0.5 - Math.random());
        
        gameContent.innerHTML = `
            <div class="memory-game">
                ${shuffledCards.map((card, index) => `
                    <div class="memory-card" data-index="${index}" data-pair="${card.pair}" data-type="${card.type}">
                        <span class="card-content" style="display: none;">
                            ${card.type === 'german' ? `${card.article} ${card.german}` : card.turkish}
                        </span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add click handlers
        gameContent.querySelectorAll('.memory-card').forEach(card => {
            card.addEventListener('click', () => this.handleMemoryCardClick(card));
        });
    }
    
    createSpeedGame() {
        const gameContent = document.getElementById('game-content');
        const currentWord = this.currentWords[0];
        
        gameContent.innerHTML = `
            <div class="speed-game">
                <div class="speed-question">
                    <h2>${currentWord.article} ${currentWord.german}</h2>
                    <p>Türkçe karşılığı nedir?</p>
                </div>
                <div class="speed-options">
                    ${this.generateSpeedOptions(currentWord)}
                </div>
            </div>
        `;
        
        // Add click handlers
        gameContent.querySelectorAll('.speed-option').forEach(option => {
            option.addEventListener('click', () => this.handleSpeedOptionClick(option));
        });
    }
    
    createFillGame() {
        const gameContent = document.getElementById('game-content');
        const currentWord = this.currentWords[0];
        const missingLetter = this.getRandomLetter(currentWord.german);
        const wordWithBlank = currentWord.german.replace(missingLetter, '_');
        
        gameContent.innerHTML = `
            <div class="fill-game">
                <div class="fill-question">
                    <h2>${currentWord.article} ${wordWithBlank}</h2>
                    <p>Eksik harfi bul: ${currentWord.turkish}</p>
                </div>
                <div class="fill-options">
                    ${this.generateFillOptions(missingLetter)}
                </div>
            </div>
        `;
        
        // Add click handlers
        gameContent.querySelectorAll('.fill-option').forEach(option => {
            option.addEventListener('click', () => this.handleFillOptionClick(option, missingLetter));
        });
    }
    
    createListenGame() {
        const gameContent = document.getElementById('game-content');
        const currentWord = this.currentWords[0];
        
        gameContent.innerHTML = `
            <div class="listen-game">
                <div class="listen-question">
                    <h2>Bu kelimeyi dinle ve seç:</h2>
                    <button class="listen-btn" onclick="app.playWord('${currentWord.german}')">
                        🔊 Dinle
                    </button>
                </div>
                <div class="listen-options">
                    ${this.generateListenOptions(currentWord)}
                </div>
            </div>
        `;
        
        // Add click handlers
        gameContent.querySelectorAll('.listen-option').forEach(option => {
            option.addEventListener('click', () => this.handleListenOptionClick(option, currentWord));
        });
    }
    
    generateSpeedOptions(correctWord) {
        const options = [correctWord.turkish];
        const allWords = getAllWords();
        
        // Add 3 random wrong options
        while (options.length < 4) {
            const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
            if (!options.includes(randomWord.turkish)) {
                options.push(randomWord.turkish);
            }
        }
        
        return options.sort(() => 0.5 - Math.random()).map(option => `
            <div class="speed-option" data-answer="${option}">
                ${option}
            </div>
        `).join('');
    }
    
    generateFillOptions(correctLetter) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const options = [correctLetter.toUpperCase()];
        
        // Add 3 random wrong options
        while (options.length < 4) {
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            if (!options.includes(randomLetter)) {
                options.push(randomLetter);
            }
        }
        
        return options.sort(() => 0.5 - Math.random()).map(option => `
            <div class="fill-option" data-letter="${option}">
                ${option}
            </div>
        `).join('');
    }
    
    generateListenOptions(correctWord) {
        const options = [correctWord.german];
        const allWords = getAllWords();
        
        // Add 3 random wrong options
        while (options.length < 4) {
            const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
            if (!options.includes(randomWord.german)) {
                options.push(randomWord.german);
            }
        }
        
        return options.sort(() => 0.5 - Math.random()).map(option => `
            <div class="listen-option" data-word="${option}">
                ${option}
            </div>
        `).join('');
    }
    
    getRandomLetter(word) {
        return word[Math.floor(Math.random() * word.length)];
    }
    
    handleMatchingCardClick(card) {
        if (card.classList.contains('matched')) return;
        
        card.classList.add('selected');
        this.selectedCards.push(card);
        
        if (this.selectedCards.length === 2) {
            const [card1, card2] = this.selectedCards;
            const word1 = card1.getAttribute('data-word');
            const word2 = card2.getAttribute('data-word');
            
            setTimeout(() => {
                if (word1 === word2) {
                    // Match found
                    card1.classList.remove('selected');
                    card2.classList.remove('selected');
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    this.correctAnswer();
                } else {
                    // No match
                    card1.classList.remove('selected');
                    card2.classList.remove('selected');
                    this.wrongAnswer();
                }
                this.selectedCards = [];
                
                // Check if game is complete
                if (document.querySelectorAll('.matched').length === this.currentWords.length * 2) {
                    this.endGame();
                }
            }, 1000);
        }
    }
    
    handleMemoryCardClick(card) {
        if (card.classList.contains('matched') || card.classList.contains('flipped')) return;
        
        card.classList.add('flipped');
        const cardContent = card.querySelector('.card-content');
        cardContent.style.display = 'block';
        
        this.selectedCards.push(card);
        
        if (this.selectedCards.length === 2) {
            const [card1, card2] = this.selectedCards;
            const pair1 = card1.getAttribute('data-pair');
            const pair2 = card2.getAttribute('data-pair');
            
            setTimeout(() => {
                if (pair1 === pair2) {
                    // Match found
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    this.correctAnswer();
                } else {
                    // No match
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    card1.querySelector('.card-content').style.display = 'none';
                    card2.querySelector('.card-content').style.display = 'none';
                    this.wrongAnswer();
                }
                this.selectedCards = [];
                
                // Check if game is complete
                if (document.querySelectorAll('.matched').length === this.currentWords.length * 2) {
                    this.endGame();
                }
            }, 1500);
        }
    }
    
    handleSpeedOptionClick(option) {
        const selectedAnswer = option.getAttribute('data-answer');
        const currentWord = this.currentWords[0];
        
        if (selectedAnswer === currentWord.turkish) {
            option.classList.add('correct');
            this.correctAnswer();
            setTimeout(() => {
                this.nextSpeedQuestion();
            }, 1000);
        } else {
            option.classList.add('incorrect');
            this.wrongAnswer();
            setTimeout(() => {
                this.nextSpeedQuestion();
            }, 1000);
        }
    }
    
    handleFillOptionClick(option, correctLetter) {
        const selectedLetter = option.getAttribute('data-letter');
        
        if (selectedLetter === correctLetter.toUpperCase()) {
            option.classList.add('correct');
            this.correctAnswer();
            setTimeout(() => {
                this.nextFillQuestion();
            }, 1000);
        } else {
            option.classList.add('incorrect');
            this.wrongAnswer();
            setTimeout(() => {
                this.nextFillQuestion();
            }, 1000);
        }
    }
    
    handleListenOptionClick(option, correctWord) {
        const selectedWord = option.getAttribute('data-word');
        
        if (selectedWord === correctWord.german) {
            option.classList.add('correct');
            this.correctAnswer();
            setTimeout(() => {
                this.nextListenQuestion();
            }, 1000);
        } else {
            option.classList.add('incorrect');
            this.wrongAnswer();
            setTimeout(() => {
                this.nextListenQuestion();
            }, 1000);
        }
    }
    
    nextSpeedQuestion() {
        this.currentWords.shift();
        if (this.currentWords.length > 0) {
            this.createSpeedGame();
        } else {
            this.endGame();
        }
    }
    
    nextFillQuestion() {
        this.currentWords.shift();
        if (this.currentWords.length > 0) {
            this.createFillGame();
        } else {
            this.endGame();
        }
    }
    
    nextListenQuestion() {
        this.currentWords.shift();
        if (this.currentWords.length > 0) {
            this.createListenGame();
        } else {
            this.endGame();
        }
    }
    
    correctAnswer() {
        this.gameState.correctAnswers++;
        this.gameState.streak++;
        this.gameState.score += 10 + (this.gameState.streak * 2);
        
        this.updateGameStats();
        this.playSound('correct');
        
        // Update progress
        this.updateWordProgress(this.currentWords[0], true);
    }
    
    wrongAnswer() {
        this.gameState.wrongAnswers++;
        this.gameState.streak = 0;
        this.gameState.score = Math.max(0, this.gameState.score - 5);
        
        this.updateGameStats();
        this.playSound('incorrect');
        
        // Update progress
        this.updateWordProgress(this.currentWords[0], false);
    }
    
    updateGameStats() {
        document.getElementById('score').textContent = this.gameState.score;
        document.getElementById('hint-count').textContent = `💡 ${this.settings.hintsPerGame - this.gameState.hintsUsed}`;
    }
    
    startTimer() {
        this.gameTimer = setInterval(() => {
            this.gameState.timeElapsed++;
            const minutes = Math.floor(this.gameState.timeElapsed / 60);
            const seconds = this.gameState.timeElapsed % 60;
            document.getElementById('timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Speed game ends after 60 seconds
            if (this.currentGameMode === 'speed' && this.gameState.timeElapsed >= 60) {
                this.endGame();
            }
        }, 1000);
    }
    
    endGame() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
        }
        
        this.gameState.timeElapsed = Math.floor((Date.now() - this.gameStartTime) / 1000);
        
        // Update progress
        this.saveProgress();
        
        // Show game over modal
        this.showGameOverModal();
    }
    
    showGameOverModal() {
        const modal = document.getElementById('game-over-modal');
        document.getElementById('final-score').textContent = this.gameState.score;
        document.getElementById('final-correct').textContent = this.gameState.correctAnswers;
        document.getElementById('final-time').textContent = `${this.gameState.timeElapsed}s`;
        
        modal.style.display = 'flex';
    }
    
    restartGame() {
        document.getElementById('game-over-modal').style.display = 'none';
        this.startGame(this.currentGameMode);
    }
    
    showHint() {
        if (this.gameState.hintsUsed >= this.settings.hintsPerGame) {
            return;
        }
        
        this.gameState.hintsUsed++;
        this.updateGameStats();
        
        const currentWord = this.currentWords[0];
        const hintText = this.generateHint(currentWord);
        
        document.getElementById('hint-text').textContent = hintText;
        document.getElementById('hint-modal').style.display = 'flex';
    }
    
    hideHint() {
        document.getElementById('hint-modal').style.display = 'none';
    }
    
    generateHint(word) {
        const hints = [
            t('hintArticle') + ' ' + word.article,
            t('hintCategory') + ' ' + t('category' + word.category.charAt(0).toUpperCase() + word.category.slice(1)),
            t('hintFirstLetter') + ' ' + word.german.charAt(0).toUpperCase(),
            t('hintLastLetter') + ' ' + word.german.charAt(word.german.length - 1).toUpperCase(),
            t('hintLength', { length: word.german.length }),
            t('hintSound')
        ];
        
        return hints[Math.floor(Math.random() * hints.length)];
    }
    
    playCurrentWord() {
        if (this.currentWords.length > 0) {
            this.playWord(this.currentWords[0].german);
        }
    }
    
    playWord(word) {
        if (!this.settings.enableSpeech || !this.speechSynthesis) {
            return;
        }
        
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;
        this.speechSynthesis.speak(utterance);
    }
    
    playSound(type) {
        if (!this.settings.enableSound) return;
        
        // Simple sound feedback using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'correct') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
        } else {
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
        }
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
    
    loadWordCards() {
        const wordCards = document.getElementById('word-cards');
        const words = getAllWords();
        
        wordCards.innerHTML = words.map(word => `
            <div class="word-card" onclick="app.flipCard(this)">
                <div class="word-card-front">
                    <div class="word-german">${word.article} ${word.german}</div>
                    <div class="word-icon">${word.icon}</div>
                </div>
                <div class="word-card-back">
                    <div class="word-turkish">${word.turkish}</div>
                    <div class="word-icon">${word.icon}</div>
                </div>
            </div>
        `).join('');
    }
    
    filterWordsByCategory(category) {
        // Update active category button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Filter words
        const words = getWordsByCategory(category);
        const wordCards = document.getElementById('word-cards');
        
        wordCards.innerHTML = words.map(word => `
            <div class="word-card" onclick="app.flipCard(this)">
                <div class="word-card-front">
                    <div class="word-german">${word.article} ${word.german}</div>
                    <div class="word-icon">${word.icon}</div>
                </div>
                <div class="word-card-back">
                    <div class="word-turkish">${word.turkish}</div>
                    <div class="word-icon">${word.icon}</div>
                </div>
            </div>
        `).join('');
    }
    
    flipCard(card) {
        card.classList.toggle('flipped');
        
        // Play word pronunciation
        if (this.settings.enableSpeech) {
            const germanText = card.querySelector('.word-german').textContent;
            const word = germanText.split(' ').slice(1).join(' '); // Remove article
            this.playWord(word);
        }
    }
    
    updateProgressDisplay() {
        const totalWords = getAllWords().length;
        const correctAnswers = this.progress.correctAnswers;
        const wrongAnswers = this.progress.wrongAnswers;
        const accuracy = totalWords > 0 ? Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100) : 0;
        
        document.getElementById('total-words-count').textContent = totalWords;
        document.getElementById('correct-answers-count').textContent = correctAnswers;
        document.getElementById('accuracy-percentage').textContent = accuracy + '%';
        
        // Show difficult words
        this.showDifficultWords();
        
        // Show achievements
        this.showAchievements();
    }
    
    showDifficultWords() {
        const difficultWordsList = document.getElementById('difficult-words-list');
        const difficultWords = Object.entries(this.progress.wordStats)
            .filter(([word, stats]) => stats.wrong > stats.correct)
            .sort((a, b) => b[1].wrong - a[1].wrong)
            .slice(0, 10);
        
        difficultWordsList.innerHTML = difficultWords.map(([word, stats]) => `
            <div class="difficult-word-item">
                <span>${word}</span>
                <span>❌ ${stats.wrong} ✅ ${stats.correct}</span>
            </div>
        `).join('');
    }
    
    showAchievements() {
        const achievementsGrid = document.getElementById('achievements-grid');
        const achievements = this.getAchievements();
        
        achievementsGrid.innerHTML = achievements.map(achievement => `
            <div class="achievement-badge ${achievement.earned ? 'earned' : ''}">
                <div class="icon">${achievement.icon}</div>
                <div class="title">${achievement.title}</div>
            </div>
        `).join('');
    }
    
    getAchievements() {
        const totalCorrect = this.progress.correctAnswers;
        const totalWrong = this.progress.wrongAnswers;
        const totalWords = getAllWords().length;
        
        return [
            {
                title: t('firstWord'),
                icon: '🎯',
                earned: totalCorrect > 0
            },
            {
                title: t('wordMaster'),
                icon: '👑',
                earned: totalCorrect >= 100
            },
            {
                title: t('perfectScore'),
                icon: '⭐',
                earned: totalCorrect > 0 && totalWrong === 0
            },
            {
                title: t('dailyLearner'),
                icon: '📅',
                earned: this.progress.daysPlayed >= 7
            }
        ];
    }
    
    updateWordProgress(word, isCorrect) {
        if (!this.progress.wordStats[word.german]) {
            this.progress.wordStats[word.german] = { correct: 0, wrong: 0 };
        }
        
        if (isCorrect) {
            this.progress.wordStats[word.german].correct++;
            this.progress.correctAnswers++;
        } else {
            this.progress.wordStats[word.german].wrong++;
            this.progress.wrongAnswers++;
        }
    }
    
    loadSettings() {
        const defaultSettings = {
            highContrast: false,
            disableAnimations: false,
            largeText: false,
            enableSound: true,
            enableSpeech: true,
            hintsPerGame: 3
        };
        
        const saved = localStorage.getItem('wordGameSettings');
        return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    }
    
    saveSettings() {
        localStorage.setItem('wordGameSettings', JSON.stringify(this.settings));
    }
    
    updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        this.applySettings();
    }
    
    applySettings() {
        const app = document.documentElement;
        
        app.setAttribute('data-high-contrast', this.settings.highContrast);
        app.setAttribute('data-disable-animations', this.settings.disableAnimations);
        app.setAttribute('data-large-text', this.settings.largeText);
    }
    
    loadProgress() {
        const defaultProgress = {
            correctAnswers: 0,
            wrongAnswers: 0,
            wordStats: {},
            daysPlayed: 0,
            lastPlayed: null
        };
        
        const saved = localStorage.getItem('wordGameProgress');
        return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    }
    
    saveProgress() {
        // Update days played
        const today = new Date().toDateString();
        if (this.progress.lastPlayed !== today) {
            this.progress.daysPlayed++;
            this.progress.lastPlayed = today;
        }
        
        localStorage.setItem('wordGameProgress', JSON.stringify(this.progress));
    }
    
    resetProgress() {
        if (confirm(t('confirmReset'))) {
            this.progress = {
                correctAnswers: 0,
                wrongAnswers: 0,
                wordStats: {},
                daysPlayed: 0,
                lastPlayed: null
            };
            this.saveProgress();
            this.updateProgressDisplay();
        }
    }
    
    exportData() {
        const data = {
            progress: this.progress,
            settings: this.settings,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'word-game-data.json';
        a.click();
        
        URL.revokeObjectURL(url);
    }
    
    handleKeyboard(e) {
        // Escape key to go back
        if (e.key === 'Escape') {
            this.goBack();
        }
        
        // Space key to flip cards in study mode
        if (e.key === ' ' && this.currentScreen === 'study-screen') {
            e.preventDefault();
            const focusedCard = document.querySelector('.word-card:focus');
            if (focusedCard) {
                this.flipCard(focusedCard);
            }
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new WordGame();
});

// PWA Install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}