---
title: "Php İle Meta Tag Çekmek"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Php İle Meta Tag Çekmek"
date: 2013-08-17
categories: 
  - "genel"
  - "nasil-yapilir"
  - "webmaster"
tags: 
  - "get_meta_tags-kullanimi"
  - "meta-tag-cekmek"
  - "php-ile-meta-tag"
slug: "php-ile-meta-tag-cekmek"
---

Merhaba Arkadaşlar

Bügün Size Nasıl Php İle Herhangi Bir Sitenin Meta Taglarını Sitemizde Gösterebileceğimizi Anlatmaya Çalışacağım.Öncelikle Bu Yazımda get\_meta\_tags işlevini kullanacağız.Mesela Örnek Olarak Şöyle bir php sayfası oluşturalım

 

|   ``` <?php // Bu Ders Emrekarakaya.com.tr Tarafından Hazırlanmıştır.Kodlar php.net'e aittir. $tags = get_meta_tags('http://www.emrekarakaya.com.tr/');  // Anahtarların küçük harfe dönüştürüleceğini unutmayın. // Ayrıca, anahtar içindeki noktalar _ ile değiştirilir. echo $tags['author'];       // isim echo "<br>"; echo $tags['keywords'];     // php belgeleri echo "<br>"; echo $tags['description'];  // php kılavuzu echo "<br>"; echo $tags['geo_position']; // 49.33;-86.59 ?> ```   |
| --- |

Gördüğünüz Üzere Kodların Yazılış çok basit.Meta Tagları get\_meta\_tags işlevi kullanarak çekiyoruz.Ayrıca Emrekarakaya.com.tr yazan yere kendi site adresinizi yazabilirsiniz.Ayrıca Arkadaşlar Kullanıcı sitesinde yukarıda gösteren herhangi bir meta tag kullanmıyorsa o bölüm boşluk olarak gösterilir…

Demo Olarak: http://emrekarakaya.p.ht/phpmetatagcek.php adresini kullanabilirsiniz.

Hayırlı Günler
