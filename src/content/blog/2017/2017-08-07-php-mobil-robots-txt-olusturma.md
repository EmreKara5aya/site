---
title: "Php Mobil Robots.txt Oluşturma"
date: 2017-08-07
categories: 
  - "nasil-yapilir"
  - "webmaster"
tags: 
  - "mobil-robots-txt"
  - "mobil-seo"
  - "php-robots"
  - "php-robots-txt"
  - "php-txt"
coverImage:
  src: ./images/google-robots-txt.gif
  alt: "Php Mobil Robots.txt Oluşturma"
slug: "php-mobil-robots-txt-olusturma"
---

Bugün sizinle Php ile **Mobil** ziyaretçilere ve kullanıcılara özel robots.txt oluşturacağız.

<!--more-->

## Giriş

Geçtiğimiz aylar da **[Wordpress için Mobil Domain Ayarlamak](https://www.emrekarakaya.com.tr/wordpress-mobile-domain-ayarlamak/)** başlıklı yazımda Wordpress siteler de mobil domain oluşturmayı anlatmıştım. Bugün bir arkadaşım isteği doğrultusunda hazırladığım proje yardımıyla Mobil ve Masaüstü platformlara uygun robots.txt oluşturacağız.

## Neden Ayrı Robots.txt Dosyaları Oluşturulur?

Bildiğiniz üzere Worpdress de Mobil Subdomain ve Ana domain aynı dizini kullanır. Yani m.emrekarakaya.com.tr de www.emrekarakaya.com.tr de public\_html dizinini kullanır. Bu nedenle iki domain de aynı robots.txt dosyasını kullanır. Ancak bazı nedenlerden ana domain veya subdomain için belirli botlar engellemek istendiği zaman robots.txt dosyaları aynı olduğu için sorun çıkar. Bu nedenle ayrı robots.txt kullanmak daha yararlı olacaktır.

## Kurulum

1. **[Buradan](https://github.com/EmreKara5aya/Php-Mobil-Robots.txt/archive/master.zip)** arşiv dosyasını indirip arşivden çıkarınız.
2. .htaccess dışında ki dosyaları FTP hesabınıza atın. Dizin de eğer daha önceden oluşturulmuş robots.txt dosyası varsa lütfen yedeğini alarak siliniz.
3. .htaccess dosyasını açıp içindeki kodları alıp kendi .htaccess dosyanızın uygun bölümüne ekleyin.
4. Robots.txt ' leri kendinize uygun düzenledikten sonra kurulum tamamlanmıştır.

## Final

Proje hakkında karşılaştığınız hataları Github sayfasından yani **[Buradan](https://github.com/EmreKara5aya/Php-Mobil-Robots.txt)** veya bu yazı altından bildirebilirsiniz.

Hayırlı Günler
