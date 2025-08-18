# Almanca-Türkçe Kelime Oyunu

11 yaşındaki çocuklar için tasarlanmış eğlenceli ve öğretici Almanca-Türkçe kelime kart oyunu. Uygulama tek sayfalık (SPA), mobil uyumlu ve çevrimdışı çalışabilir bir Progressive Web App (PWA) olarak geliştirilmiştir.

## 🌟 Özellikler

### 🎮 Oyun Modları
- **Eşleştirme**: Almanca ve Türkçe kelimeleri eşleştir
- **Hafıza**: Kartları hatırlayarak eşleştir
- **Hız Turu**: 60 saniyede ne kadar kelime öğrenebilirsin?
- **Boşluk Doldur**: Eksik harfleri tamamla
- **Dinle ve Seç**: Sesi dinle, doğru kelimeyi bul

### 📚 Kelime Kategorileri
- **Renkler**: 12 temel renk
- **Sayılar**: 0-100 arası sayılar
- **Hayvanlar**: 50+ hayvan ismi
- **Okul**: Okul ve eğitim kelimeleri
- **Aile**: Aile üyeleri ve ilişkiler
- **Yiyecek**: Yiyecek ve içecekler
- **Fiiller**: Temel fiiller

### 🎯 Eğitim Özellikleri
- **200+ Kelime**: A1-A2 seviye Almanca-Türkçe kelime çifti
- **Sesli Telaffuz**: Web Speech API ile Almanca telaffuz
- **İpucu Sistemi**: Zorlandığında ipucu al
- **İlerleme Takibi**: Doğru/yanlış istatistikleri
- **Rozet Sistemi**: Başarılar için rozetler
- **Zor Kelimeler**: Zorlandığın kelimeleri gör

### ♿ Erişilebilirlik
- **WCAG Uyumlu**: Erişilebilirlik standartlarına uygun
- **Yüksek Kontrast**: Görme engelliler için
- **Büyük Yazı**: Okuma kolaylığı için
- **Animasyon Kontrolü**: Hareket kısıtlaması olanlar için
- **Klavye Navigasyonu**: Tam klavye desteği
- **Ekran Okuyucu**: Screen reader uyumlu

### 🌐 Çok Dilli Arayüz
- **Türkçe**: Ana dil
- **Almanca**: İkinci dil
- **Kolay Geçiş**: Tek tıkla dil değiştirme

### 📱 PWA Özellikleri
- **Çevrimdışı Çalışma**: İnternet olmadan da oynayabilir
- **Ana Ekrana Ekleme**: Mobil cihazlara kurulabilir
- **Push Bildirimleri**: Hatırlatmalar
- **Hızlı Başlatma**: App-like deneyim

## 🚀 Kurulum

### Gereksinimler
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- HTTPS bağlantısı (PWA özellikleri için)

### Basit Kurulum
1. Dosyaları web sunucusuna yükleyin
2. `index.html` dosyasını açın
3. Oyunu kullanmaya başlayın!

### Yerel Geliştirme
```bash
# Projeyi klonlayın
git clone [repository-url]
cd almanca-turkce-kelime-oyunu

# Basit HTTP sunucusu başlatın
python -m http.server 8000
# veya
npx serve .

# Tarayıcıda açın
http://localhost:8000
```

### PWA Kurulumu
1. Uygulamayı web tarayıcısında açın
2. Adres çubuğundaki "Kur" butonuna tıklayın
3. Veya menüden "Ana ekrana ekle" seçeneğini kullanın

## 📖 Kullanım

### Ana Menü
- **Oyna**: Oyun modlarını seç
- **Kelime Çalış**: Kelimeleri kategorilere göre çalış
- **İlerlemem**: İstatistiklerini ve rozetlerini gör
- **Ayarlar**: Uygulama ayarlarını değiştir

### Oyun Modları

#### Eşleştirme
- Almanca ve Türkçe kelimeleri eşleştir
- Doğru eşleştirmeler yeşil olur
- Tüm eşleştirmeleri tamamla

#### Hafıza
- Kartları çevirerek eşleştir
- Aynı kelimenin Almanca ve Türkçe versiyonunu bul
- Hafızanı test et

#### Hız Turu
- 60 saniyede ne kadar kelime öğrenebilirsin?
- Hızlı cevap ver, bonus puan kazan
- Süre dolunca oyun biter

#### Boşluk Doldur
- Eksik harfi bul
- Türkçe anlamından yola çıkar
- Doğru harfi seç

#### Dinle ve Seç
- Kelimeyi dinle
- Doğru Almanca kelimeyi seç
- Telaffuzu öğren

### Kelime Çalışma
- Kategorilere göre kelimeleri çalış
- Kartlara tıklayarak çevir
- Sesli telaffuzu dinle
- Kelimeleri tekrarla

### İlerleme Takibi
- Toplam doğru/yanlış sayısı
- Doğruluk yüzdesi
- Zorlandığın kelimeler
- Kazandığın rozetler

## ⚙️ Ayarlar

### Erişilebilirlik
- **Yüksek Kontrast**: Daha belirgin renkler
- **Animasyonları Kapat**: Hareket kısıtlaması için
- **Büyük Yazı**: Daha büyük font boyutu

### Ses
- **Ses Efektleri**: Doğru/yanlış sesleri
- **Sesli Telaffuz**: Almanca kelime telaffuzu

### Oyun
- **İpucu Sayısı**: Oyun başına ipucu limiti

### Veri
- **İlerlemeyi Sıfırla**: Tüm verileri sil
- **Verileri Dışa Aktar**: JSON formatında indir

## 🛠️ Geliştirme

### Proje Yapısı
```
almanca-turkce-kelime-oyunu/
├── index.html              # Ana HTML dosyası
├── styles.css              # CSS stilleri
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker
├── js/
│   ├── app.js             # Ana uygulama mantığı
│   ├── words.js           # Kelime veritabanı
│   └── translations.js    # Çeviri dosyası
├── icons/                 # PWA ikonları
└── README.md              # Bu dosya
```

### Yeni Kelime Ekleme
`js/words.js` dosyasında kelime veritabanını güncelleyin:

```javascript
const WORD_DATABASE = {
    colors: [
        {
            german: "yeniRenk",
            article: "das",
            turkish: "yeni renk",
            icon: "🎨",
            category: "colors"
        }
    ]
};
```

### Yeni Çeviri Ekleme
`js/translations.js` dosyasında çevirileri ekleyin:

```javascript
const TRANSLATIONS = {
    tr: {
        yeniKelime: "Türkçe çeviri"
    },
    de: {
        yeniKelime: "Deutsche Übersetzung"
    }
};
```

### Yeni Oyun Modu Ekleme
1. `js/app.js` dosyasında yeni mod fonksiyonu ekleyin
2. HTML'de oyun modu butonu ekleyin
3. CSS'de stil tanımlayın

### PWA Güncelleme
1. `manifest.json` dosyasını güncelleyin
2. `sw.js` dosyasında cache versiyonunu artırın
3. Yeni ikonlar ekleyin

## 🧪 Test

### Tarayıcı Testi
- Chrome (önerilen)
- Firefox
- Safari
- Edge

### Mobil Test
- iOS Safari
- Android Chrome
- PWA kurulumu test edin

### Erişilebilirlik Testi
- Klavye navigasyonu
- Ekran okuyucu uyumluluğu
- Yüksek kontrast modu
- Animasyon kapatma

### Çevrimdışı Test
- İnternet bağlantısını kesin
- Uygulamanın çalıştığını doğrulayın
- Cache'in düzgün çalıştığını kontrol edin

## 📱 PWA Özellikleri

### Kurulum
- Ana ekrana ekleme
- App-like deneyim
- Splash screen
- Offline çalışma

### Cache Stratejisi
- **Static Cache**: CSS, JS, HTML dosyaları
- **Dynamic Cache**: Dinamik içerik
- **Network First**: Dokümanlar için
- **Cache First**: Statik dosyalar için

### Service Worker
- Offline desteği
- Background sync
- Push notifications
- Cache yönetimi

## 🔧 Teknik Detaylar

### Kullanılan Teknolojiler
- **HTML5**: Semantic markup
- **CSS3**: Modern styling, CSS Grid, Flexbox
- **JavaScript ES6+**: Modern JavaScript
- **Web Speech API**: Sesli telaffuz
- **Web Audio API**: Ses efektleri
- **Service Workers**: Offline desteği
- **LocalStorage**: Veri saklama

### Performans
- Lazy loading
- Image optimization
- Code splitting
- Cache optimization

### Güvenlik
- HTTPS zorunlu
- Content Security Policy
- XSS koruması
- CSRF koruması

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit yapın (`git commit -am 'Yeni özellik eklendi'`)
4. Push yapın (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

### Katkı Alanları
- Yeni kelime kategorileri
- Oyun modları
- Erişilebilirlik iyileştirmeleri
- Performans optimizasyonları
- Çeviri düzeltmeleri
- Bug fixes

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🙏 Teşekkürler

- Web Speech API için MDN Web Docs
- PWA rehberleri için Google Developers
- Erişilebilirlik standartları için W3C
- Emoji ikonları için Unicode Consortium

## 📞 İletişim

Sorularınız veya önerileriniz için:
- GitHub Issues
- Email: [your-email@example.com]

---

**Not**: Bu uygulama eğitim amaçlı geliştirilmiştir. Ticari kullanım için lütfen iletişime geçin.