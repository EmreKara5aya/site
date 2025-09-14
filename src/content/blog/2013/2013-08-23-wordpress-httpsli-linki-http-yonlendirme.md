---
title: "Wordpress Https'li Linki Http Yönlendirme"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Wordpress Https'li Linki Http Yönlendirme"
date: 2013-08-23
categories: 
  - "nasil-yapilir"
  - "wordpress"
tags: 
  - "wordpress-htaccess"
  - "wordpress-http"
  - "wordpress-ssl"
  - "wordpress-yonlendirme"
slug: "wordpress-httpsli-linki-http-yonlendirme"
---

Merhaba Arkadaşlar

Bügün Wmaracında dolaşırken bir arkadaşın ssl bağlantısını devre dışı bıraktığında yaşadığı index sorunun gördüm.Arkadaşımız  kullandığı ssl yi devre dışı bırakınca bütün Httpsli linkleri devre dışı kalmış.Haliyle arama motorlarında indexli Httpsli linklere tıklayan ziyaretçileri hata Mesajı ile uğurluyordu.İşte ben bu yazıyı arkadaşımızla aynı sorunu yaşayan arkadaşlar için yazdım.

Evet arkadaşlar yukarıda belirttiğim gibi https li linkleri http li linklere nasıl yönlendireceğinizi anlatacağım.Bildiğiniz üzere htppli linkleri https li linklere yönlendirirken dosyasına belirli kodlar ekliyorduk.Bu kodlar sayesinde linkler yönleniyordu.İşte biz şimdi aynı yöntemle .htaccess  ile linkleri yönlendireceğiz.

 

Öncelikle .htaccess dosyasınızı açın ve aşağıdaki kodları ekleyin

```
RewriteEngine On 
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.siteadresim.com/$1 [R,L]
```

Burada sizin düzenlemeniz gereken yer siteadresim.com yazan yerdir.Ayrıca RewriteRule satırını kendi wordpress link sisteminize uyarlamanız lazımdır.

Sorunuz olursa Buradan Sorabilirsiniz.
