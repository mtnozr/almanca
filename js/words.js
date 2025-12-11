// German-Turkish Word Database
// A1-A2 level words for 11-year-old children

const WORD_DATABASE = {
    colors: [
        { german: "rot", article: "das", turkish: "kırmızı", icon: "🔴", category: "colors" },
        { german: "blau", article: "das", turkish: "mavi", icon: "🔵", category: "colors" },
        { german: "gelb", article: "das", turkish: "sarı", icon: "🟡", category: "colors" },
        { german: "grün", article: "das", turkish: "yeşil", icon: "🟢", category: "colors" },
        { german: "schwarz", article: "das", turkish: "siyah", icon: "⚫", category: "colors" },
        { german: "weiß", article: "das", turkish: "beyaz", icon: "⚪", category: "colors" },
        { german: "braun", article: "das", turkish: "kahverengi", icon: "🟤", category: "colors" },
        { german: "rosa", article: "das", turkish: "pembe", icon: "🌸", category: "colors" },
        { german: "lila", article: "das", turkish: "mor", icon: "🟣", category: "colors" },
        { german: "orange", article: "das", turkish: "turuncu", icon: "🟠", category: "colors" },
        { german: "grau", article: "das", turkish: "gri", icon: "🔘", category: "colors" },
        { german: "türkis", article: "das", turkish: "turkuaz", icon: "💎", category: "colors" }
    ],
    
    numbers: [
        { german: "null", article: "", turkish: "sıfır", icon: "0️⃣", category: "numbers" },
        { german: "eins", article: "", turkish: "bir", icon: "1️⃣", category: "numbers" },
        { german: "zwei", article: "", turkish: "iki", icon: "2️⃣", category: "numbers" },
        { german: "drei", article: "", turkish: "üç", icon: "3️⃣", category: "numbers" },
        { german: "vier", article: "", turkish: "dört", icon: "4️⃣", category: "numbers" },
        { german: "fünf", article: "", turkish: "beş", icon: "5️⃣", category: "numbers" },
        { german: "sechs", article: "", turkish: "altı", icon: "6️⃣", category: "numbers" },
        { german: "sieben", article: "", turkish: "yedi", icon: "7️⃣", category: "numbers" },
        { german: "acht", article: "", turkish: "sekiz", icon: "8️⃣", category: "numbers" },
        { german: "neun", article: "", turkish: "dokuz", icon: "9️⃣", category: "numbers" },
        { german: "zehn", article: "", turkish: "on", icon: "🔟", category: "numbers" },
        { german: "elf", article: "", turkish: "on bir", icon: "1️⃣1️⃣", category: "numbers" },
        { german: "zwölf", article: "", turkish: "on iki", icon: "1️⃣2️⃣", category: "numbers" },
        { german: "dreizehn", article: "", turkish: "on üç", icon: "1️⃣3️⃣", category: "numbers" },
        { german: "vierzehn", article: "", turkish: "on dört", icon: "1️⃣4️⃣", category: "numbers" },
        { german: "fünfzehn", article: "", turkish: "on beş", icon: "1️⃣5️⃣", category: "numbers" },
        { german: "zwanzig", article: "", turkish: "yirmi", icon: "2️⃣0️⃣", category: "numbers" },
        { german: "dreißig", article: "", turkish: "otuz", icon: "3️⃣0️⃣", category: "numbers" },
        { german: "hundert", article: "", turkish: "yüz", icon: "💯", category: "numbers" }
    ],
    
    animals: [
        { german: "Hund", article: "der", turkish: "köpek", icon: "🐕", category: "animals" },
        { german: "Katze", article: "die", turkish: "kedi", icon: "🐱", category: "animals" },
        { german: "Pferd", article: "das", turkish: "at", icon: "🐎", category: "animals" },
        { german: "Kuh", article: "die", turkish: "inek", icon: "🐄", category: "animals" },
        { german: "Schwein", article: "das", turkish: "domuz", icon: "🐷", category: "animals" },
        { german: "Huhn", article: "das", turkish: "tavuk", icon: "🐔", category: "animals" },
        { german: "Ente", article: "die", turkish: "ördek", icon: "🦆", category: "animals" },
        { german: "Gans", article: "die", turkish: "kaz", icon: "🦢", category: "animals" },
        { german: "Schaf", article: "das", turkish: "koyun", icon: "🐑", category: "animals" },
        { german: "Ziege", article: "die", turkish: "keçi", icon: "🐐", category: "animals" },
        { german: "Maus", article: "die", turkish: "fare", icon: "🐭", category: "animals" },
        { german: "Ratte", article: "die", turkish: "sıçan", icon: "🐀", category: "animals" },
        { german: "Kaninchen", article: "das", turkish: "tavşan", icon: "🐰", category: "animals" },
        { german: "Fuchs", article: "der", turkish: "tilki", icon: "🦊", category: "animals" },
        { german: "Wolf", article: "der", turkish: "kurt", icon: "🐺", category: "animals" },
        { german: "Bär", article: "der", turkish: "ayı", icon: "🐻", category: "animals" },
        { german: "Löwe", article: "der", turkish: "aslan", icon: "🦁", category: "animals" },
        { german: "Tiger", article: "der", turkish: "kaplan", icon: "🐯", category: "animals" },
        { german: "Elefant", article: "der", turkish: "fil", icon: "🐘", category: "animals" },
        { german: "Giraffe", article: "die", turkish: "zürafa", icon: "🦒", category: "animals" },
        { german: "Affe", article: "der", turkish: "maymun", icon: "🐒", category: "animals" },
        { german: "Gorilla", article: "der", turkish: "goril", icon: "🦍", category: "animals" },
        { german: "Panda", article: "der", turkish: "panda", icon: "🐼", category: "animals" },
        { german: "Koala", article: "der", turkish: "koala", icon: "🐨", category: "animals" },
        { german: "Känguru", article: "das", turkish: "kanguru", icon: "🦘", category: "animals" },
        { german: "Fisch", article: "der", turkish: "balık", icon: "🐟", category: "animals" },
        { german: "Hai", article: "der", turkish: "köpek balığı", icon: "🦈", category: "animals" },
        { german: "Wal", article: "der", turkish: "balina", icon: "🐋", category: "animals" },
        { german: "Delfin", article: "der", turkish: "yunus", icon: "🐬", category: "animals" },
        { german: "Schildkröte", article: "die", turkish: "kaplumbağa", icon: "🐢", category: "animals" },
        { german: "Krokodil", article: "das", turkish: "timsah", icon: "🐊", category: "animals" },
        { german: "Schlange", article: "die", turkish: "yılan", icon: "🐍", category: "animals" },
        { german: "Eidechse", article: "die", turkish: "kertenkele", icon: "🦎", category: "animals" },
        { german: "Frosch", article: "der", turkish: "kurbağa", icon: "🐸", category: "animals" },
        { german: "Spinne", article: "die", turkish: "örümcek", icon: "🕷️", category: "animals" },
        { german: "Biene", article: "die", turkish: "arı", icon: "🐝", category: "animals" },
        { german: "Schmetterling", article: "der", turkish: "kelebek", icon: "🦋", category: "animals" },
        { german: "Ameise", article: "die", turkish: "karınca", icon: "🐜", category: "animals" },
        { german: "Mücke", article: "die", turkish: "sivrisinek", icon: "🦟", category: "animals" },
        { german: "Fliege", article: "die", turkish: "sinek", icon: "🪰", category: "animals" },
        { german: "Käfer", article: "der", turkish: "böcek", icon: "🪲", category: "animals" },
        { german: "Libelle", article: "die", turkish: "yusufçuk", icon: "🦗", category: "animals" },
        { german: "Vogel", article: "der", turkish: "kuş", icon: "🐦", category: "animals" },
        { german: "Adler", article: "der", turkish: "kartal", icon: "🦅", category: "animals" },
        { german: "Eule", article: "die", turkish: "baykuş", icon: "🦉", category: "animals" },
        { german: "Papagei", article: "der", turkish: "papağan", icon: "🦜", category: "animals" },
        { german: "Pinguin", article: "der", turkish: "penguen", icon: "🐧", category: "animals" }
    ],
    
    school: [
        { german: "Schule", article: "die", turkish: "okul", icon: "🏫", category: "school" },
        { german: "Klasse", article: "die", turkish: "sınıf", icon: "👥", category: "school" },
        { german: "Lehrer", article: "der", turkish: "öğretmen", icon: "👨‍🏫", category: "school" },
        { german: "Lehrerin", article: "die", turkish: "öğretmen", icon: "👩‍🏫", category: "school" },
        { german: "Schüler", article: "der", turkish: "öğrenci", icon: "👨‍🎓", category: "school" },
        { german: "Schülerin", article: "die", turkish: "öğrenci", icon: "👩‍🎓", category: "school" },
        { german: "Buch", article: "das", turkish: "kitap", icon: "📚", category: "school" },
        { german: "Heft", article: "das", turkish: "defter", icon: "📓", category: "school" },
        { german: "Stift", article: "der", turkish: "kalem", icon: "✏️", category: "school" },
        { german: "Bleistift", article: "der", turkish: "kurşun kalem", icon: "✏️", category: "school" },
        { german: "Kugelschreiber", article: "der", turkish: "tükenmez kalem", icon: "🖊️", category: "school" },
        { german: "Radiergummi", article: "der", turkish: "silgi", icon: "🧽", category: "school" },
        { german: "Lineal", article: "das", turkish: "cetvel", icon: "📏", category: "school" },
        { german: "Schere", article: "die", turkish: "makas", icon: "✂️", category: "school" },
        { german: "Kleber", article: "der", turkish: "yapıştırıcı", icon: "🖇️", category: "school" },
        { german: "Tasche", article: "die", turkish: "çanta", icon: "🎒", category: "school" },
        { german: "Rucksack", article: "der", turkish: "sırt çantası", icon: "🎒", category: "school" },
        { german: "Tafel", article: "die", turkish: "kara tahta", icon: "📝", category: "school" },
        { german: "Kreide", article: "die", turkish: "tebeşir", icon: "🖍️", category: "school" },
        { german: "Computer", article: "der", turkish: "bilgisayar", icon: "💻", category: "school" },
        { german: "Tisch", article: "der", turkish: "masa", icon: "🪑", category: "school" },
        { german: "Stuhl", article: "der", turkish: "sandalye", icon: "🪑", category: "school" },
        { german: "Fenster", article: "das", turkish: "pencere", icon: "🪟", category: "school" },
        { german: "Tür", article: "die", turkish: "kapı", icon: "🚪", category: "school" },
        { german: "Pause", article: "die", turkish: "teneffüs", icon: "⏰", category: "school" },
        { german: "Unterricht", article: "der", turkish: "ders", icon: "📖", category: "school" },
        { german: "Hausaufgabe", article: "die", turkish: "ev ödevi", icon: "📝", category: "school" },
        { german: "Prüfung", article: "die", turkish: "sınav", icon: "📋", category: "school" },
        { german: "Zeugnis", article: "das", turkish: "karne", icon: "📄", category: "school" },
        { german: "Bibliothek", article: "die", turkish: "kütüphane", icon: "📚", category: "school" },
        { german: "Turnhalle", article: "die", turkish: "spor salonu", icon: "🏃‍♂️", category: "school" },
        { german: "Schulhof", article: "der", turkish: "okul bahçesi", icon: "🏫", category: "school" },
        { german: "Kantine", article: "die", turkish: "kantin", icon: "🍽️", category: "school" },
        { german: "Toilette", article: "die", turkish: "tuvalet", icon: "🚽", category: "school" }
    ],
    
    family: [
        { german: "Familie", article: "die", turkish: "aile", icon: "👨‍👩‍👧‍👦", category: "family" },
        { german: "Mutter", article: "die", turkish: "anne", icon: "👩", category: "family" },
        { german: "Vater", article: "der", turkish: "baba", icon: "👨", category: "family" },
        { german: "Sohn", article: "der", turkish: "oğul", icon: "👦", category: "family" },
        { german: "Tochter", article: "die", turkish: "kız", icon: "👧", category: "family" },
        { german: "Bruder", article: "der", turkish: "erkek kardeş", icon: "👨‍👦", category: "family" },
        { german: "Schwester", article: "die", turkish: "kız kardeş", icon: "👩‍👧", category: "family" },
        { german: "Großmutter", article: "die", turkish: "büyükanne", icon: "👵", category: "family" },
        { german: "Großvater", article: "der", turkish: "büyükbaba", icon: "👴", category: "family" },
        { german: "Onkel", article: "der", turkish: "amca", icon: "👨‍👦", category: "family" },
        { german: "Tante", article: "die", turkish: "teyze", icon: "👩‍👧", category: "family" },
        { german: "Cousin", article: "der", turkish: "kuzen", icon: "👨‍👦", category: "family" },
        { german: "Cousine", article: "die", turkish: "kuzen", icon: "👩‍👧", category: "family" },
        { german: "Baby", article: "das", turkish: "bebek", icon: "👶", category: "family" },
        { german: "Kind", article: "das", turkish: "çocuk", icon: "🧒", category: "family" },
        { german: "Junge", article: "der", turkish: "erkek çocuk", icon: "👦", category: "family" },
        { german: "Mädchen", article: "das", turkish: "kız çocuk", icon: "👧", category: "family" },
        { german: "Mann", article: "der", turkish: "adam", icon: "👨", category: "family" },
        { german: "Frau", article: "die", turkish: "kadın", icon: "👩", category: "family" },
        { german: "Oma", article: "die", turkish: "nine", icon: "👵", category: "family" },
        { german: "Opa", article: "der", turkish: "dede", icon: "👴", category: "family" },
        { german: "Zwilling", article: "der", turkish: "ikiz", icon: "👯‍♂️", category: "family" },
        { german: "Geschwister", article: "die", turkish: "kardeşler", icon: "👨‍👩‍👧‍👦", category: "family" },
        { german: "Eltern", article: "die", turkish: "ebeveynler", icon: "👨‍👩‍👧‍👦", category: "family" },
        { german: "Großeltern", article: "die", turkish: "büyükanne ve büyükbaba", icon: "👴👵", category: "family" },
        { german: "Enkel", article: "der", turkish: "torun", icon: "👶", category: "family" },
        { german: "Enkelin", article: "die", turkish: "torun", icon: "👶", category: "family" },
        { german: "Neffe", article: "der", turkish: "yeğen", icon: "👨‍👦", category: "family" },
        { german: "Nichte", article: "die", turkish: "yeğen", icon: "👩‍👧", category: "family" },
        { german: "Schwiegermutter", article: "die", turkish: "kayınvalide", icon: "👩", category: "family" },
        { german: "Schwiegervater", article: "der", turkish: "kayınpeder", icon: "👨", category: "family" },
        { german: "Schwager", article: "der", turkish: "enişte", icon: "👨", category: "family" },
        { german: "Schwägerin", article: "die", turkish: "gelin", icon: "👩", category: "family" }
    ],
    
    food: [
        { german: "Brot", article: "das", turkish: "ekmek", icon: "🍞", category: "food" },
        { german: "Butter", article: "die", turkish: "tereyağı", icon: "🧈", category: "food" },
        { german: "Käse", article: "der", turkish: "peynir", icon: "🧀", category: "food" },
        { german: "Wurst", article: "die", turkish: "sosis", icon: "🌭", category: "food" },
        { german: "Schinken", article: "der", turkish: "jambon", icon: "🥓", category: "food" },
        { german: "Ei", article: "das", turkish: "yumurta", icon: "🥚", category: "food" },
        { german: "Milch", article: "die", turkish: "süt", icon: "🥛", category: "food" },
        { german: "Joghurt", article: "der", turkish: "yoğurt", icon: "🍶", category: "food" },
        { german: "Quark", article: "der", turkish: "lor peyniri", icon: "🧀", category: "food" },
        { german: "Apfel", article: "der", turkish: "elma", icon: "🍎", category: "food" },
        { german: "Banane", article: "die", turkish: "muz", icon: "🍌", category: "food" },
        { german: "Orange", article: "die", turkish: "portakal", icon: "🍊", category: "food" },
        { german: "Birne", article: "die", turkish: "armut", icon: "🍐", category: "food" },
        { german: "Traube", article: "die", turkish: "üzüm", icon: "🍇", category: "food" },
        { german: "Erdbeere", article: "die", turkish: "çilek", icon: "🍓", category: "food" },
        { german: "Kirsche", article: "die", turkish: "kiraz", icon: "🍒", category: "food" },
        { german: "Pfirsich", article: "der", turkish: "şeftali", icon: "🍑", category: "food" },
        { german: "Tomate", article: "die", turkish: "domates", icon: "🍅", category: "food" },
        { german: "Gurke", article: "die", turkish: "salatalık", icon: "🥒", category: "food" },
        { german: "Karotte", article: "die", turkish: "havuç", icon: "🥕", category: "food" },
        { german: "Kartoffel", article: "die", turkish: "patates", icon: "🥔", category: "food" },
        { german: "Zwiebel", article: "die", turkish: "soğan", icon: "🧅", category: "food" },
        { german: "Knoblauch", article: "der", turkish: "sarımsak", icon: "🧄", category: "food" },
        { german: "Salat", article: "der", turkish: "salata", icon: "🥗", category: "food" },
        { german: "Suppe", article: "die", turkish: "çorba", icon: "🍲", category: "food" },
        { german: "Nudeln", article: "die", turkish: "makarna", icon: "🍝", category: "food" },
        { german: "Reis", article: "der", turkish: "pirinç", icon: "🍚", category: "food" },
        { german: "Fisch", article: "der", turkish: "balık", icon: "🐟", category: "food" },
        { german: "Fleisch", article: "das", turkish: "et", icon: "🥩", category: "food" },
        { german: "Huhn", article: "das", turkish: "tavuk", icon: "🍗", category: "food" },
        { german: "Pizza", article: "die", turkish: "pizza", icon: "🍕", category: "food" },
        { german: "Hamburger", article: "der", turkish: "hamburger", icon: "🍔", category: "food" },
        { german: "Pommes", article: "die", turkish: "patates kızartması", icon: "🍟", category: "food" },
        { german: "Eis", article: "das", turkish: "dondurma", icon: "🍦", category: "food" },
        { german: "Kuchen", article: "der", turkish: "pasta", icon: "🍰", category: "food" },
        { german: "Schokolade", article: "die", turkish: "çikolata", icon: "🍫", category: "food" },
        { german: "Bonbon", article: "das", turkish: "şeker", icon: "🍬", category: "food" },
        { german: "Keks", article: "der", turkish: "bisküvi", icon: "🍪", category: "food" },
        { german: "Wasser", article: "das", turkish: "su", icon: "💧", category: "food" },
        { german: "Saft", article: "der", turkish: "meyve suyu", icon: "🧃", category: "food" },
        { german: "Limonade", article: "die", turkish: "limonata", icon: "🍋", category: "food" },
        { german: "Kaffee", article: "der", turkish: "kahve", icon: "☕", category: "food" },
        { german: "Tee", article: "der", turkish: "çay", icon: "🫖", category: "food" },
        { german: "Zucker", article: "der", turkish: "şeker", icon: "🍯", category: "food" },
        { german: "Salz", article: "das", turkish: "tuz", icon: "🧂", category: "food" },
        { german: "Pfeffer", article: "der", turkish: "karabiber", icon: "🌶️", category: "food" },
        { german: "Öl", article: "das", turkish: "yağ", icon: "🫒", category: "food" },
        { german: "Essig", article: "der", turkish: "sirke", icon: "🍶", category: "food" },
        { german: "Senf", article: "der", turkish: "hardal", icon: "🌭", category: "food" },
        { german: "Ketchup", article: "der", turkish: "ketçap", icon: "🍅", category: "food" },
        { german: "Mayonnaise", article: "die", turkish: "mayonez", icon: "🥪", category: "food" }
    ],
    
    verbs: [
        { german: "sein", article: "", turkish: "olmak", icon: "✅", category: "verbs" },
        { german: "haben", article: "", turkish: "sahip olmak", icon: "💼", category: "verbs" },
        { german: "gehen", article: "", turkish: "gitmek", icon: "🚶‍♂️", category: "verbs" },
        { german: "kommen", article: "", turkish: "gelmek", icon: "🏃‍♂️", category: "verbs" },
        { german: "laufen", article: "", turkish: "koşmak", icon: "🏃‍♂️", category: "verbs" },
        { german: "springen", article: "", turkish: "zıplamak", icon: "🦘", category: "verbs" },
        { german: "schwimmen", article: "", turkish: "yüzmek", icon: "🏊‍♂️", category: "verbs" },
        { german: "fahren", article: "", turkish: "gitmek (araçla)", icon: "🚗", category: "verbs" },
        { german: "fliegen", article: "", turkish: "uçmak", icon: "✈️", category: "verbs" },
        { german: "essen", article: "", turkish: "yemek yemek", icon: "🍽️", category: "verbs" },
        { german: "trinken", article: "", turkish: "içmek", icon: "🥤", category: "verbs" },
        { german: "schlafen", article: "", turkish: "uyumak", icon: "😴", category: "verbs" },
        { german: "aufstehen", article: "", turkish: "kalkmak", icon: "🌅", category: "verbs" },
        { german: "waschen", article: "", turkish: "yıkamak", icon: "🚿", category: "verbs" },
        { german: "anziehen", article: "", turkish: "giyinmek", icon: "👕", category: "verbs" },
        { german: "ausziehen", article: "", turkish: "çıkarmak", icon: "👖", category: "verbs" },
        { german: "lesen", article: "", turkish: "okumak", icon: "📖", category: "verbs" },
        { german: "schreiben", article: "", turkish: "yazmak", icon: "✍️", category: "verbs" },
        { german: "malen", article: "", turkish: "resim yapmak", icon: "🎨", category: "verbs" },
        { german: "zeichnen", article: "", turkish: "çizmek", icon: "✏️", category: "verbs" },
        { german: "spielen", article: "", turkish: "oynamak", icon: "🎮", category: "verbs" },
        { german: "tanzen", article: "", turkish: "dans etmek", icon: "💃", category: "verbs" },
        { german: "singen", article: "", turkish: "şarkı söylemek", icon: "🎤", category: "verbs" },
        { german: "hören", article: "", turkish: "duymak", icon: "👂", category: "verbs" },
        { german: "sehen", article: "", turkish: "görmek", icon: "👁️", category: "verbs" },
        { german: "sprechen", article: "", turkish: "konuşmak", icon: "🗣️", category: "verbs" },
        { german: "lachen", article: "", turkish: "gülmek", icon: "😄", category: "verbs" },
        { german: "weinen", article: "", turkish: "ağlamak", icon: "😢", category: "verbs" },
        { german: "lernen", article: "", turkish: "öğrenmek", icon: "📚", category: "verbs" },
        { german: "lehren", article: "", turkish: "öğretmek", icon: "👨‍🏫", category: "verbs" },
        { german: "arbeiten", article: "", turkish: "çalışmak", icon: "💼", category: "verbs" },
        { german: "helfen", article: "", turkish: "yardım etmek", icon: "🤝", category: "verbs" },
        { german: "kaufen", article: "", turkish: "satın almak", icon: "🛒", category: "verbs" },
        { german: "verkaufen", article: "", turkish: "satmak", icon: "💰", category: "verbs" },
        { german: "geben", article: "", turkish: "vermek", icon: "🎁", category: "verbs" },
        { german: "nehmen", article: "", turkish: "almak", icon: "🤲", category: "verbs" },
        { german: "öffnen", article: "", turkish: "açmak", icon: "🔓", category: "verbs" },
        { german: "schließen", article: "", turkish: "kapatmak", icon: "🔒", category: "verbs" },
        { german: "machen", article: "", turkish: "yapmak", icon: "🔨", category: "verbs" },
        { german: "bauen", article: "", turkish: "inşa etmek", icon: "🏗️", category: "verbs" },
        { german: "reparieren", article: "", turkish: "tamir etmek", icon: "🔧", category: "verbs" },
        { german: "putzen", article: "", turkish: "temizlemek", icon: "🧹", category: "verbs" },
        { german: "kochen", article: "", turkish: "yemek yapmak", icon: "👨‍🍳", category: "verbs" },
        { german: "backen", article: "", turkish: "fırınlamak", icon: "🥖", category: "verbs" },
        { german: "telefonieren", article: "", turkish: "telefon etmek", icon: "📞", category: "verbs" },
        { german: "schicken", article: "", turkish: "göndermek", icon: "📮", category: "verbs" },
        { german: "bekommen", article: "", turkish: "almak", icon: "📨", category: "verbs" },
        { german: "finden", article: "", turkish: "bulmak", icon: "🔍", category: "verbs" },
        { german: "verlieren", article: "", turkish: "kaybetmek", icon: "❓", category: "verbs" },
        { german: "suchen", article: "", turkish: "aramak", icon: "🔎", category: "verbs" },
        { german: "treffen", article: "", turkish: "buluşmak", icon: "🤝", category: "verbs" },
        { german: "besuchen", article: "", turkish: "ziyaret etmek", icon: "🏠", category: "verbs" },
        { german: "einladen", article: "", turkish: "davet etmek", icon: "🎉", category: "verbs" },
        { german: "feiern", article: "", turkish: "kutlamak", icon: "🎊", category: "verbs" },
        { german: "reisen", article: "", turkish: "seyahat etmek", icon: "✈️", category: "verbs" },
        { german: "ankommen", article: "", turkish: "varmak", icon: "🏁", category: "verbs" },
        { german: "abfahren", article: "", turkish: "ayrılmak", icon: "🚂", category: "verbs" },
        { german: "parken", article: "", turkish: "park etmek", icon: "🅿️", category: "verbs" },
        { german: "warten", article: "", turkish: "beklemek", icon: "⏰", category: "verbs" },
        { german: "beginnen", article: "", turkish: "başlamak", icon: "🚀", category: "verbs" },
        { german: "enden", article: "", turkish: "bitmek", icon: "🏁", category: "verbs" },
        { german: "starten", article: "", turkish: "başlatmak", icon: "🎬", category: "verbs" },
        { german: "stoppen", article: "", turkish: "durdurmak", icon: "⏹️", category: "verbs" }
    ],

    body: [
        { german: "Kopf", article: "der", turkish: "baş", icon: "👤", category: "body" },
        { german: "Auge", article: "das", turkish: "göz", icon: "👁️", category: "body" },
        { german: "Ohr", article: "das", turkish: "kulak", icon: "👂", category: "body" },
        { german: "Nase", article: "die", turkish: "burun", icon: "👃", category: "body" },
        { german: "Mund", article: "der", turkish: "ağız", icon: "👄", category: "body" },
        { german: "Zahn", article: "der", turkish: "diş", icon: "🦷", category: "body" },
        { german: "Haar", article: "das", turkish: "saç", icon: "💇", category: "body" },
        { german: "Hals", article: "der", turkish: "boyun", icon: "🧣", category: "body" },
        { german: "Arm", article: "der", turkish: "kol", icon: "💪", category: "body" },
        { german: "Hand", article: "die", turkish: "el", icon: "✋", category: "body" },
        { german: "Finger", article: "der", turkish: "parmak", icon: "👆", category: "body" },
        { german: "Bauch", article: "der", turkish: "karın", icon: "🧘", category: "body" },
        { german: "Rücken", article: "der", turkish: "sırt", icon: "🔙", category: "body" },
        { german: "Bein", article: "das", turkish: "bacak", icon: "🦵", category: "body" },
        { german: "Fuß", article: "der", turkish: "ayak", icon: "🦶", category: "body" },
        { german: "Knie", article: "das", turkish: "diz", icon: "🦵", category: "body" },
        { german: "Herz", article: "das", turkish: "kalp", icon: "❤️", category: "body" },
        { german: "Blut", article: "das", turkish: "kan", icon: "🩸", category: "body" },
        { german: "Knochen", article: "der", turkish: "kemik", icon: "🦴", category: "body" },
        { german: "Haut", article: "die", turkish: "deri", icon: "🤲", category: "body" }
    ],

    clothes: [
        { german: "Kleidung", article: "die", turkish: "kıyafet", icon: "👗", category: "clothes" },
        { german: "Hemd", article: "das", turkish: "gömlek", icon: "👔", category: "clothes" },
        { german: "Hose", article: "die", turkish: "pantolon", icon: "👖", category: "clothes" },
        { german: "Kleid", article: "das", turkish: "elbise", icon: "👗", category: "clothes" },
        { german: "Rock", article: "der", turkish: "etek", icon: "👗", category: "clothes" },
        { german: "Pullover", article: "der", turkish: "kazak", icon: "🧥", category: "clothes" },
        { german: "Jacke", article: "die", turkish: "ceket", icon: "🧥", category: "clothes" },
        { german: "Mantel", article: "der", turkish: "palto", icon: "🧥", category: "clothes" },
        { german: "Schuh", article: "der", turkish: "ayakkabı", icon: "u00👟", category: "clothes" },
        { german: "Socke", article: "die", turkish: "çorap", icon: "🧦", category: "clothes" },
        { german: "Hut", article: "der", turkish: "şapka", icon: "👒", category: "clothes" },
        { german: "Mütze", article: "die", turkish: "bere", icon: "🧢", category: "clothes" },
        { german: "Schal", article: "der", turkish: "atkı", icon: "🧣", category: "clothes" },
        { german: "Handschuh", article: "der", turkish: "eldiven", icon: "🧤", category: "clothes" },
        { german: "Brille", article: "die", turkish: "gözlük", icon: "👓", category: "clothes" },
        { german: "Uhr", article: "die", turkish: "saat", icon: "⌚", category: "clothes" },
        { german: "Ring", article: "der", turkish: "yüzük", icon: "💍", category: "clothes" },
        { german: "Tasche", article: "die", turkish: "çanta", icon: "👜", category: "clothes" },
        { german: "Schirm", article: "der", turkish: "şemsiye", icon: "☂️", category: "clothes" },
        { german: "Stiefel", article: "der", turkish: "bot", icon: "👢", category: "clothes" }
    ],

    home: [
        { german: "Haus", article: "das", turkish: "ev", icon: "🏠", category: "home" },
        { german: "Wohnung", article: "die", turkish: "daire", icon: "🏢", category: "home" },
        { german: "Zimmer", article: "das", turkish: "oda", icon: "🚪", category: "home" },
        { german: "Wohnzimmer", article: "das", turkish: "oturma odası", icon: "🛋️", category: "home" },
        { german: "Schlafzimmer", article: "das", turkish: "yatak odası", icon: "🛏️", category: "home" },
        { german: "Küche", article: "die", turkish: "mutfak", icon: "🍳", category: "home" },
        { german: "Bad", article: "das", turkish: "banyo", icon: "🛁", category: "home" },
        { german: "Garten", article: "der", turkish: "bahçe", icon: "🏡", category: "home" },
        { german: "Wand", article: "die", turkish: "duvar", icon: "🧱", category: "home" },
        { german: "Boden", article: "der", turkish: "yer", icon: "⬇️", category: "home" },
        { german: "Decke", article: "die", turkish: "tavan", icon: "⬆️", category: "home" },
        { german: "Dach", article: "das", turkish: "çatı", icon: "🏠", category: "home" },
        { german: "Treppe", article: "die", turkish: "merdiven", icon: "🪜", category: "home" },
        { german: "Bett", article: "das", turkish: "yatak", icon: "🛏️", category: "home" },
        { german: "Schrank", article: "der", turkish: "dolap", icon: "🚪", category: "home" },
        { german: "Sofa", article: "das", turkish: "kanepe", icon: "🛋️", category: "home" },
        { german: "Lampe", article: "die", turkish: "lamba", icon: "💡", category: "home" },
        { german: "Teppich", article: "der", turkish: "halı", icon: "🧶", category: "home" },
        { german: "Spiegel", article: "der", turkish: "ayna", icon: "🪞", category: "home" },
        { german: "Bild", article: "das", turkish: "resim", icon: "🖼️", category: "home" }
    ],

    nature: [
        { german: "Natur", article: "die", turkish: "doğa", icon: "🌿", category: "nature" },
        { german: "Baum", article: "der", turkish: "ağaç", icon: "🌳", category: "nature" },
        { german: "Blume", article: "die", turkish: "çiçek", icon: "🌸", category: "nature" },
        { german: "Gras", article: "das", turkish: "çim", icon: "🌱", category: "nature" },
        { german: "Wald", article: "der", turkish: "orman", icon: "🌲", category: "nature" },
        { german: "Berg", article: "der", turkish: "dağ", icon: "🏔️", category: "nature" },
        { german: "Fluss", article: "der", turkish: "nehir", icon: "🌊", category: "nature" },
        { german: "See", article: "der", turkish: "göl", icon: "🌊", category: "nature" },
        { german: "Meer", article: "das", turkish: "deniz", icon: "🌊", category: "nature" },
        { german: "Sonne", article: "die", turkish: "güneş", icon: "☀️", category: "nature" },
        { german: "Mond", article: "der", turkish: "ay", icon: "🌙", category: "nature" },
        { german: "Stern", article: "der", turkish: "yıldız", icon: "⭐", category: "nature" },
        { german: "Wolke", article: "die", turkish: "bulut", icon: "☁️", category: "nature" },
        { german: "Regen", article: "der", turkish: "yağmur", icon: "🌧️", category: "nature" },
        { german: "Schnee", article: "der", turkish: "kar", icon: "❄️", category: "nature" },
        { german: "Wind", article: "der", turkish: "rüzgar", icon: "💨", category: "nature" },
        { german: "Feuer", article: "das", turkish: "ateş", icon: "🔥", category: "nature" },
        { german: "Luft", article: "die", turkish: "hava", icon: "🌬️", category: "nature" },
        { german: "Stein", article: "der", turkish: "taş", icon: "🪨", category: "nature" },
        { german: "Sand", article: "der", turkish: "kum", icon: "🏖️", category: "nature" }
    ],

    city: [
        { german: "Stadt", article: "die", turkish: "şehir", icon: "🏙️", category: "city" },
        { german: "Dorf", article: "das", turkish: "köy", icon: "🏡", category: "city" },
        { german: "Straße", article: "die", turkish: "cadde", icon: "🛣️", category: "city" },
        { german: "Weg", article: "der", turkish: "yol", icon: "🛣️", category: "city" },
        { german: "Platz", article: "der", turkish: "meydan", icon: "⛲", category: "city" },
        { german: "Park", article: "der", turkish: "park", icon: "🌳", category: "city" },
        { german: "Kino", article: "das", turkish: "sinema", icon: "🎬", category: "city" },
        { german: "Theater", article: "das", turkish: "tiyatro", icon: "🎭", category: "city" },
        { german: "Museum", article: "das", turkish: "müze", icon: "🏛️", category: "city" },
        { german: "Hotel", article: "das", turkish: "otel", icon: "🏨", category: "city" },
        { german: "Restaurant", article: "das", turkish: "restoran", icon: "🍽️", category: "city" },
        { german: "Café", article: "das", turkish: "kafe", icon: "☕", category: "city" },
        { german: "Bank", article: "die", turkish: "banka", icon: "🏦", category: "city" },
        { german: "Post", article: "die", turkish: "postane", icon: "📮", category: "city" },
        { german: "Apotheke", article: "die", turkish: "eczane", icon: "💊", category: "city" },
        { german: "Krankenhaus", article: "das", turkish: "hastane", icon: "🏥", category: "city" },
        { german: "Polizei", article: "die", turkish: "polis", icon: "👮", category: "city" },
        { german: "Bahnhof", article: "der", turkish: "istasyon", icon: "🚉", category: "city" },
        { german: "Flughafen", article: "der", turkish: "havaalanı", icon: "✈️", category: "city" },
        { german: "Markt", article: "der", turkish: "pazar", icon: "🏪", category: "city" }
    ],

    jobs: [
        { german: "Beruf", article: "der", turkish: "meslek", icon: "💼", category: "jobs" },
        { german: "Arzt", article: "der", turkish: "doktor", icon: "👨‍⚕️", category: "jobs" },
        { german: "Ärztin", article: "die", turkish: "doktor", icon: "👩‍⚕️", category: "jobs" },
        { german: "Lehrer", article: "der", turkish: "öğretmen", icon: "👨‍🏫", category: "jobs" },
        { german: "Schüler", article: "der", turkish: "öğrenci", icon: "👨‍🎓", category: "jobs" },
        { german: "Polizist", article: "der", turkish: "polis", icon: "👮‍♂️", category: "jobs" },
        { german: "Feuerwehrmann", article: "der", turkish: "itfaiyeci", icon: "👨‍🚒", category: "jobs" },
        { german: "Koch", article: "der", turkish: "aşçı", icon: "👨‍🍳", category: "jobs" },
        { german: "Bäcker", article: "der", turkish: "fırıncı", icon: "🥖", category: "jobs" },
        { german: "Fahrer", article: "der", turkish: "şoför", icon: "🚌", category: "jobs" },
        { german: "Pilot", article: "der", turkish: "pilot", icon: "✈️", category: "jobs" },
        { german: "Bauer", article: "der", turkish: "çiftçi", icon: "👨‍🌾", category: "jobs" },
        { german: "Friseur", article: "der", turkish: "kuaför", icon: "💇", category: "jobs" },
        { german: "Verkäufer", article: "der", turkish: "satıcı", icon: "🏪", category: "jobs" },
        { german: "Kellner", article: "der", turkish: "garson", icon: "🍽️", category: "jobs" },
        { german: "Sänger", article: "der", turkish: "şarkıcı", icon: "🎤", category: "jobs" },
        { german: "Maler", article: "der", turkish: "ressam/boyacı", icon: "🎨", category: "jobs" },
        { german: "Soldat", article: "der", turkish: "asker", icon: "💂", category: "jobs" },
        { german: "Tierarzt", article: "der", turkish: "veteriner", icon: "🐕‍🦺", category: "jobs" },
        { german: "Ingenieur", article: "der", turkish: "mühendis", icon: "👷", category: "jobs" }
    ]
};

// Level definitions - 10 levels with 30 words each
const LEVELS = {
    1: { title: "Başlangıç 1", categories: ["numbers", "colors"], count: 30 },
    2: { title: "Başlangıç 2", categories: ["family", "body"], count: 30 },
    3: { title: "Hayvanlar Alemi", categories: ["animals"], count: 30 },
    4: { title: "Okul ve Ev", categories: ["school", "home"], count: 30 },
    5: { title: "Yiyecek ve İçecek", categories: ["food"], count: 30 },
    6: { title: "Günlük Eylemler 1", categories: ["verbs"], count: 30 },
    7: { title: "Günlük Eylemler 2", categories: ["verbs"], count: 30 },
    8: { title: "Kıyafet ve Şehir", categories: ["clothes", "city"], count: 30 },
    9: { title: "Doğa ve Meslekler", categories: ["nature", "jobs"], count: 30 },
    10: { title: "Karışık Zor", categories: ["all"], count: 30 }
};

// Get all words as a flat array
const getAllWords = () => {
    return Object.values(WORD_DATABASE).flat();
};

// Get words by category
const getWordsByCategory = (category) => {
    if (category === 'all') {
        return getAllWords();
    }
    return WORD_DATABASE[category] || [];
};

// Get words for a specific level
const getWordsForLevel = (level) => {
    const levelConfig = LEVELS[level];
    if (!levelConfig) return getRandomWords(30);

    let words = [];
    
    // If specific categories are defined
    if (levelConfig.categories.includes("all")) {
        words = getAllWords();
    } else {
        levelConfig.categories.forEach(cat => {
            words = [...words, ...getWordsByCategory(cat)];
        });
    }

    // Shuffle and pick 30 words deterministically for the level if possible, or random
    // For consistency, we'll shuffle with a seeded-like approach or just random for now
    // Since levels should be consistent, we might want to pick specific ranges, but for this app random from categories is fine
    // However, to ensure 30 distinct words per level, we shuffle and slice.
    
    // Özel mantık: Bazı kategoriler çok geniş (verbs gibi), bunları bölmek lazım.
    // Level 6: Verbs ilk yarısı
    // Level 7: Verbs ikinci yarısı
    if (level === 6) {
        const verbs = getWordsByCategory('verbs');
        return verbs.slice(0, 30);
    }
    if (level === 7) {
        const verbs = getWordsByCategory('verbs');
        return verbs.slice(30, 60);
    }

    // Shuffle
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 30);
};

// Get random words
const getRandomWords = (count, category = 'all') => {
    const words = getWordsByCategory(category);
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Get word by German text
const getWordByGerman = (german) => {
    return getAllWords().find(word => word.german.toLowerCase() === german.toLowerCase());
};

// Get word by Turkish text
const getWordByTurkish = (turkish) => {
    return getAllWords().find(word => word.turkish.toLowerCase() === turkish.toLowerCase());
};

// Get categories
const getCategories = () => {
    return Object.keys(WORD_DATABASE);
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WORD_DATABASE,
        LEVELS,
        getAllWords,
        getWordsByCategory,
        getWordsForLevel,
        getRandomWords,
        getWordByGerman,
        getWordByTurkish,
        getCategories
    };
}
