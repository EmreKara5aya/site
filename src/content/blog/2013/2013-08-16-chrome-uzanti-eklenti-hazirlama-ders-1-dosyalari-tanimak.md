---
title: "Chrome Uzantı (Eklenti) Hazırlama : Ders 1 Dosyaları Tanımak"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Chrome Uzantı (Eklenti) Hazırlama : Ders 1 Dosyaları Tanımak"
date: 2013-08-16
categories: 
  - "chrome"
slug: "chrome-uzanti-eklenti-hazirlama-ders-1-dosyalari-tanimak"
---

Merhaba Arkadaşlar

Artık İnternet Sitemde Chrome Uzantı (Eklenti) Nasıl Hazırlanır Onu Anlatmaya Çalışacağım… Merak Ettiklerinizi [Buraya Tıklayarak](http://www.emrekarakaya.com.tr/chrome-uzanti-eklenti-hazirlama-ders-1) Blog Adresimden Sorabilirsiniz.

Öncelikle ilk derste chrome eklenti dosyalarını tanıyalım dedim.Arkadaşlar chrome eklenti dosyaları 3 adet temel dosyadan oluşur.Bunları sıralarsak

1. manifest.json
2. icon.png
3. popup.html olarak sıralanır.

Peki bu dosyalar neyin nesidir.Hemen açıklayayım.Öncelikle manifest.json dosyasından başlıyalım.

manifest.json dosyası chrome uzantımızın temelidir.Yani uzantı bilgilerinin saklandığı yerdir.Şimdi dosyanın içindeki kodları inceleyelim.**Bu Kodları incelerken icon.png ve popup.html dosyalarınında ne işe yaradığını öğreneceğiz.**

|   ``` {   "manifest_version": 2,     "name": "Emre Karakaya",   "description": "Bu Ders Emre Karakaya Tarafından Hazırlandı.",   "version": "1.0",     "browser_action": {     "default_icon": "icon.png",     "default_popup": "popup.html" } ```   |
| --- |

Şimdi kodları incelersek

|   ``` "name": "Emre Karakaya", ```   |
| --- |

kodu uzantımızın adını belirtir.

|   ``` "description": "Bu Ders Emre Karakaya Tarafından Hazırlandı.", ```   |
| --- |

kodu uzantımızın açıklamasını temsil eder.Yanlız burada dikkat edilmesi gereken **asla ve asla bu bölümde html kullanılmamasıdır.**

|   ``` "version": "1.0", ```   |
| --- |

kodu uzantımızın sürümünü (Versiyonunu) Belirtir.

|   ``` "default_icon": "icon.png", ```   |
| --- |

Uzantımızın tarayıcıda görünürken hangi resim ile gözükeceğini belirler.Siz icon.png yerine başka bir resim atabilirsiniz.

|   ``` "default_popup": "popup.html" ```   |
| --- |

kodu uzantımızda kullanacağımız html kodlarının kayıtlı olduğu html dosyasını belirtir.

Evet Arkadaşlar Bu Dersimizide Size Chrome Uzantı Dosyalarını Tanıttık.Diğer Dersimizide Merhaba Dünya Eklentisini Yapacağız.Eğer Sizde Dosyaları İncelemek İstiyorsanız

[https://www.dropbox.com/s/rtca3d3jds8l8lm/chrome%20eklenti%20ders%201.rar](https://www.dropbox.com/s/rtca3d3jds8l8lm/chrome%20eklenti%20ders%201.rar) linkini kullanabilirsiniz.

Hayırlı Günler
