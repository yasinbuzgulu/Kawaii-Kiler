# Kawaii-Kiler — Ürün kapsamı ve faz taslağı

Durum: Görüşmeye açık taslak. Kullanıcı kararları ile öneriler ayrı belirtilmiştir. Uygulama geliştirmesine başlanmadı.

Kesinleşen tercihler:

- iPhone ve Android'e yüklenen mobil uygulama.
- Gıda, temizlik ve kişisel bakım dahil evin tüm tüketim ürünleri.
- Kullanıcının takip beklentisi: “Uğraştırmasın ama net olsun; girmesi, anlaması kolay olsun.”

Bu beklentiyi karşılamak için aşağıda önerilen karma takip yaklaşımı henüz nihai karar değildir.

## 1. Amaç

Esra ve Yasin'in ev için alınacakları, alınanları ve evde kalan ürünleri aynı yerden takip etmesi.

Uygulama üç soruya hızlı yanıt vermeli:

- Ne almamız gerekiyor, ne kadar almamız gerekiyor?
- Hangileri alındı, kim aldı ve ne kadar aldı?
- Evde ne var, ne kadar kaldı, ne azaldı veya bitti?

Japonya sevgisi ve Kawaii-Kiler adı görsel kimliğe yön verebilir. Türkçe, kolay anlaşılan işlem adları korunmalı.

## 2. Önerilen ürün çerçevesi

İlk kullanım senaryosu Esra ve Yasin'in paylaştığı özel bir ev alanı. Alışveriş listesi ve kiler bu alana bağlıdır; iki kişi de düzenleyebilir. Başka evlerin de uygulamayı kullanıp kullanmayacağı ayrıca netleştirilecek.

Ürün kapsamı gıda, içecek, temizlik ve kişisel bakım gibi tüketim ürünleridir.

### Alışveriş

- Ürün, alınacak miktar/birim ve isteğe bağlı not ekleme.
- Ürünleri kategoriye göre görme.
- Bir ürünü tamamen veya kısmen satın alındı olarak işaretleme.
- Satın alan kişiyi ve tarihi kaydetme.
- Alınanları geçmişte görme.
- Alışveriş anında ürünü doğrudan ekleyip satın alma olarak kaydetme.

### Evdeki stok

Ürün bazında iki takip biçimi öneriliyor:

- **Miktar:** Yumurta 8 adet, süt 2 paket gibi. Hızlı +/− düğmeleri veya mevcut miktarı doğrudan düzeltme. Gerektiğinde kg/litre de seçilebilir.
- **Durum:** Deterjan var, zeytinyağı azaldı, tuz bitti gibi. Kesin ölçüm zorunluluğu yok.

Miktarla izlenen üründe 0 “bitti” anlamına gelir; pozitif miktar doğrudan sayı olarak gösterilir. İlk sürümde “azaldı” durumu, durumla takip edilen ürünlerde elle seçilir. Sayısal ürünler için otomatik azalma eşiği Faz 2'de değerlendirilecek.

Başlangıçta evde bulunan ürünler alışveriş kaydı oluşturmadan eklenebilmeli. Evin tamamını baştan saymak zorunlu olmamalı; kullanıcı takip etmek istediği ürünlerle başlayabilmeli. Stok kaydının olmaması, ürünün bittiği anlamına gelmemeli.

Azalan veya biten ürün alışveriş listesine tek işlemle eklenebilmeli. İlk sürümde listeye ekleme kullanıcı tarafından yapılmalı.

### Kolay giriş ve net gösterim

- Sayılabilen ürün: “Yumurta · 8 adet”; +/− ile değiştirme veya kalan sayıyı doğrudan yazma.
- Ölçülmesi zahmetli ürün: “Deterjan · Azaldı”; var/azaldı/bitti seçenekleriyle değiştirme.
- Her tüketimi ayrı ayrı kaydetmek zorunlu değil; kullanıcı mevcut miktarı topluca düzeltebilmeli.
- “Alındı” işleminde listedeki miktar hazır gelmeli; yalnızca farklı miktarda alındıysa değiştirilmeli.
- Not, marka ve fiyat gibi ek bilgiler temel işlemi uzatmamalı; zorunlu alanlar olmamalı.
- Son güncelleme bilgisi ürün detayında görülebilmeli. Sayısal stok da en son girilen miktarı gösterir; kaydedilmeyen tüketim otomatik olarak tespit edilmez.

### Ortak kullanım

- Ortak alana yalnızca yetkili kişiler erişebilmeli.
- Esra'nın değişiklikleri Yasin'e, Yasin'inkiler Esra'ya yansımalı.
- İlk sürüm için işlemlerin internet bağlantısıyla kaydedilmesi öneriliyor. Çevrimdışı düzenleme sonraki fazlarda ayrıca değerlendirilecek.
- Kaydedilemeyen veya henüz güncellenmemiş işlemler kullanıcıya açıkça gösterilmeli.
- Yanlış satın alma veya stok işlemi düzeltilebilmeli.

## 3. Alışveriş ile stok arasındaki kurallar

1. **Alışveriş miktarı ile evdeki miktar ayrıdır.** Evde 2 litre süt varken 3 litre daha alınacak olabilir.
2. **Satın alınan miktar esas alınır.** Listede 3 litre yazarken 2 litre alınırsa stok 2 litre artar; kalan ihtiyaç 1 litre olur. Kullanıcı kalan ihtiyacı iptal edebilir.
3. **Her gerçek satın alma bir kez işlenir.** Aynı işlemin tekrar gönderilmesi stoku iki kez artırmamalı. Esra ve Yasin gerçekten ayrı ayrı alışveriş yapmışsa iki alım da stoka eklenmeli; kalan alışveriş ihtiyacı sıfırın altına düşmemeli.
4. **Ürünün bir ana birimi olmalıdır.** İlk sürümde adet, paket, kg ve litre gibi seçili birimler kullanılabilir; alışverişte ürünün mevcut birimi hazır gelmeli. Paket ile adet arasında otomatik dönüşüm yapılmaz. Örneğin yumurta adetle takip ediliyorsa 10'lu paket alımı 10 adet olarak girilir. Paket büyüklüğü açıklama olarak yazılabilir.
5. **Durum takibi sahte miktar üretmez.** “Azaldı” belirli bir yüzde anlamına gelmez. Satın alınan, durumla takip edilen ürün için önerilen yeni durum “var”dır.
6. **Azalan ürün tekrar tekrar listeye eklenmez.** Aynı ürün zaten alınacaklardaysa mevcut ihtiyaç gösterilmeli ve miktarı düzenlenebilmeli.
7. **Takip kapsamı tüketim ürünleridir.** Mobilya ve elektronik için ayrı bir eşya/envanter akışı bu kapsamda bulunmaz.
8. **Gerçek kullanım kendiliğinden bilinemez.** İlk sürümde tüketim ve durum değişikliği elle girilir; işlemlerin kısa olması temel tasarım ölçütüdür.

Örnek: Evde 2 litre süt var → listeye 3 litre eklenir → Esra 2 litre alır → evdeki stok 4 litre, kalan alışveriş ihtiyacı 1 litre olur → Yasin bu durumu kendi ekranında görür.

## 4. Önerilen ekranlar

| Ekran | Kullanıcının amacı |
| --- | --- |
| Alınacaklar | İhtiyaçları eklemek ve alışverişi tamamlamak |
| Kiler | Evdekileri görmek, miktar veya durumu güncellemek |
| Geçmiş | Ne alındığını, kimin aldığını ve tarihi görmek |
| Ev ve ayarlar | Ortak erişimi ve uygulama tercihlerini yönetmek |

Azalan ve biten ürünler kilerde filtrelenebilir. Ayrı bir özet ekranının gerekip gerekmediği ekran taslaklarında değerlendirilecek.

## 5. Harcama takibi için açık karar

Kullanıcının “şu kadar” ifadesinin miktarın yanında para takibini de kapsayıp kapsamadığı kesinleşmedi.

Öneri: Önce alışveriş ve stok akışını kurmak. Harcama takibi istenirse satın alma sırasında isteğe bağlı ödenen toplam tutar girişi ve aylık toplam eklemek. Fiyat bilinmiyorsa bunu sıfır lira saymamak; raporda eksik tutarları belirtmek.

Alınacakların tahmini maliyeti, bütçe sınırları ve fiyat karşılaştırması ayrıca değerlendirilmeli.

## 6. Fazlar

### Faz 0 — Kararlar ve ekran taslakları

- Platform: iPhone ve Android mobil uygulaması olarak kesinleşti.
- Hedef kullanıcı: yalnızca Esra ve Yasin / ileride başka evler de kullanabilir.
- Ürün kapsamı: gıda, temizlik ve kişisel bakım dahil evin tüm tüketim ürünleri olarak kesinleşti.
- Stok takibi: kolay giriş ve net gösterim beklentisine göre ürün bazında karma takip öneriliyor.
- Harcama takibi ihtiyacı ve önceliği.
- Ana ekran akışları ve sade, sıcak görsel kimlik.

Çıkış ölçütü: İlk sürümün kapsamı ve örnek kullanım akışı birlikte netleştirilmiş olacak. Teknik mimari bu kararların ardından seçilecek.

### Faz 1 — Birlikte kullanılabilir temel sürüm

- Ortak eve erişim.
- Alışveriş listesi, ürünler, kategoriler ve miktarlar.
- Seçilen stok takip biçimleri ve başlangıç stoğu girişi.
- Satın alma ile stok güncelleme; kısmi alım.
- Azalan/biten ürünü listeye ekleme.
- Basit satın alma geçmişi ve hatalı işlemleri düzeltme.
- İki cihaz arasında değişikliklerin paylaşılması ve kayıt durumunun görünmesi.

Çıkış ölçütü: İki kişi kendi cihazlarında bir haftalık gerçek alışveriş ve stok döngüsünü tamamlayabiliyor; aynı satın alma stoku iki kez artırmıyor ve yanlış kayıt düzeltilebiliyor.

### Faz 2 — Günlük kullanımı kolaylaştırma

Gerçek kullanımda çıkan ihtiyaçlara göre seçilecek:

- Sık alınanlar ve hızlı tekrar ekleme.
- Ürüne göre azalma eşiği ve ihtiyaç önerisi.
- İstenirse temel harcama kaydı ve aylık özet.
- İstenirse dolap, buzdolabı, banyo gibi saklama yerleri.
- Yedekleme/dışa aktarma ve daha ayrıntılı işlem geçmişi.

Çıkış ölçütü: İlk kullanımda zaman alan tekrarlar azaltılmış olacak; tutar içeren raporlar eksik veri durumunu açıkça gösterecek.

### Faz 3 — İhtiyaca göre gelişmiş özellikler

- Son kullanma tarihi ve hatırlatmalar; aynı ürünün farklı paket/tarihlerini ayrı izleme ihtiyacıyla birlikte ele alınır.
- Bildirimler ve düzenli alışveriş hatırlatmaları.
- Barkodla ürün ekleme, fişten alışveriş çıkarma.
- İnternet yokken işlem yapma ve bağlantı gelince değişiklikleri birleştirme.
- Tarif/eksik malzeme önerileri.
- Birden fazla ev veya diğer kullanıcıların kendi evlerini oluşturabilmesi.

Bu maddeler taahhüt edilmiş kapsam değil, ileride değerlendirilecek seçeneklerdir.

## 7. İlk sürümün dışında önerilenler

Faz 1'de barkod veya fiş tanıma, otomatik tüketim tahmini, market entegrasyonu, fiyat karşılaştırması, gelişmiş bütçe/borç paylaşımı ve tarif sistemi önerilmiyor. Bunların önceliği gerçek kullanım sonrasında yeniden değerlendirilebilir.

## 8. Açık kararlar

| Karar | Durum |
| --- | --- |
| Platform | Kesinleşti: iPhone / Android mobil uygulaması |
| Ürün kapsamı | Kesinleşti: evin tüm tüketim ürünleri |
| Miktar veya durum takibi | Kullanıcı kolay ve net takip istiyor; ürün bazında miktar/durum önerildi |
| Tutar ve bütçe takibi | Kullanıcıya soruldu; yanıt bekleniyor |
| Yalnızca iki kişi veya başka evler | Kullanıcıya soruldu; yanıt bekleniyor |
| Giriş/davet yöntemi ve teknoloji seçimi | Ürün kararlarından sonra değerlendirilecek |
