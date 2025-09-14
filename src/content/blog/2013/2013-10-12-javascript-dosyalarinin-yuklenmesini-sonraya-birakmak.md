---
title: "Javascript Dosyalarının Yüklenmesini Sonraya Bırakmak Çözümü"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Javascript Dosyalarının Yüklenmesini Sonraya Bırakmak Çözümü"
date: 2013-10-12
categories: 
  - "nasil-yapilir"
tags: 
  - "google-pagespeed"
  - "javascript-defer"
slug: "javascript-dosyalarinin-yuklenmesini-sonraya-birakmak"
---

Merhaba Arkadaşlar

Bildiğiniz üzere Google Pagespeed kullanan arkadaşlarımız **Oluşturmayı önleyen JavaScript ekranın üst kısmındaki içerikten kaldırın** hatasını alıyorlardı.Google'in bu hataya çözüm olarak gösterdiği öneri ise hem html dosya boyutunu artırıyor hem de Google Pagespeed de Sayfa hızı ile ilgili uyarılara neden oluyordu.İşte bügün size burada bu uyarıyı nasıl çözeceğinizi göstermeye çalışacağım.

Aslında bu uyarının çözümü fazlasıyla basit.Şimdi size nasıl çözüleceğini kodlar üzerinde anlatıyım.Öncelikle aşağıdaki kod bizim örnek javascript kodumuz olsun

```
<script type="text/javascript" src="http://tr.analizcik.com/jscripts/prototype.js?ver=1603"></script>
```

Şimdi burada yapmamız gereken geciktirici defer kodunu eklemek.Yani şöyle ;

```
<script type="text/javascript" src="http://tr.analizcik.com/jscripts/prototype.js?ver=1603" defer></script>
```

Kodlamada gördüğünüz üzere kodun sonuna sadece defer kelimesi eklenmiş.Defer sizin eklediğiniz javascript kodunun veya dosyasının sayfanın açılmasından sonra yüklenmesine olanak sağlar.Yani javascript dosyanız sayfa yüklendikten sonra yüklenmeye başlıyacak.Ve artık hatanız çözülmüş oldu.Başka sorularınız varsa buradan sorabilirsiniz.

 

Hayırlı Günler
