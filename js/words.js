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
    ]
};

// Get all words as a flat array
const getAllWords = () => {
    return Object.values(WORD_DATABASE).flat();
};

// Matching game level configuration
const MATCHING_LEVEL_SIZE = 30;
const MATCHING_LEVEL_COUNT = 10;

const buildMatchingLevels = () => {
    const baseWords = getAllWords();
    let shuffled = [...baseWords].sort(() => 0.5 - Math.random());
    const levels = [];

    let index = 0;
    for (let i = 0; i < MATCHING_LEVEL_COUNT; i++) {
        const levelWords = [];
        while (levelWords.length < MATCHING_LEVEL_SIZE) {
            if (index >= shuffled.length) {
                shuffled = [...baseWords].sort(() => 0.5 - Math.random());
                index = 0;
            }

            const word = shuffled[index];
            index++;

            const alreadyUsed = levelWords.some(entry => entry.german === word.german && entry.turkish === word.turkish);
            if (!alreadyUsed) {
                levelWords.push(word);
            }
        }
        levels.push(levelWords);
    }

    return levels;
};

const MATCHING_LEVELS = buildMatchingLevels();

const getMatchingLevelWords = (levelIndex = 0) => {
    return MATCHING_LEVELS[levelIndex] || MATCHING_LEVELS[0];
};

const getMatchingLevelCount = () => MATCHING_LEVELS.length;

// Get words by category
const getWordsByCategory = (category) => {
    if (category === 'all') {
        return getAllWords();
    }
    return WORD_DATABASE[category] || [];
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
        getAllWords,
        getWordsByCategory,
        getRandomWords,
        getWordByGerman,
        getWordByTurkish,
        getCategories,
        getMatchingLevelWords,
        getMatchingLevelCount
    };
}