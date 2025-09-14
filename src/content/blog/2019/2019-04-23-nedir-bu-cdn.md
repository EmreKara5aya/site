---
title: "Nedir Bu CDN?"
date: 2019-04-23
categories: 
  - "cdn"
  - "seo"
tags: 
  - "cdn-ne-ise-yarar"
  - "cdn-neden-kullanilmali"
  - "cdn-nedir"
  - "cdn-yararlari"
coverImage:
  src: ./images/cdn-architecture.png
  alt: "Nedir Bu CDN?"
slug: "nedir-bu-cdn"
---

Bugüne kadar sadece site hızlandırıcı olarak bilinen CDN'yi inceleyeğiz.

<!--more-->

# CDN Nedir?

CDN açılımı Content Delivery Network türkçesi İçerik Dağıtım Ağı olarak bilinen bir cache(önbellek) sistemidir.CDN web sitesinde ki statik içerikleri yani video,resim,css,js önbelleğe alarak kullanıcıya en yakın lokasyondaki sunucudan ulaşmasını sağlar.

# CDN Nasıl Çalışır?

## Sunucu Tarafında CDN Nasıl Çalışır?

CDN firmaları siteniz eklendikten sonra arama motorları gibi sitenizi gezer ve statik dosyaları kendi sunucusuna ekler.Kullanıcılar bu adımdan sonra sitenizin statik dosyalarını sizin sunucunuzdan değil CDN sunucularından ulaşmaya başlarlar. Ayrıca CDN firmaları herhangi bir statik dosya değişimine karşın belirli aralıklarla sitenizi tekrardan gezer ve dosyaları tekrardan sunucularına alırlar.

## Ziyaretçi Tarafında CDN Nasıl Çalışır?

Sunucu tarafında CDN ayarlamaları yapıldıktan sonra sitenizi ziyaret etmeye çalışan kullanıcılar statik dosyaları CDN firmasının kendilerine en yakın sunucularından ulaşırlar. Buna örnek vermek gerekirse ülkemizden sitenize giren bir kullanıcı aşağıdaki CDN firmalarından ;

- 58 Lokasyonlu Google CDN Bulgaristan Sofya Sunucusundan
- 45 Lokasyonlu MaxCDN Almanya Frankfurt Sunucusundan
- 65 Lokasyonlu Azure CDN Türkiye İstanbul Sunucusundan
- 176 Lokasyonlu Cloudflare CDN Türkiye İstanbul Sunucundan
- 33 Lokasyonlu CDN 77 Türkiye İstanbul Sunucusundan
- 34 Lokasyonlu KeyCDN Türkiye İstanbul Sunucusundan
- 65 Lokasyonlu Amazon Cloudfront CDN Almanya Frankfurt Sunucusundan

statik dosyalarına ulaşırlar. Dikkat etmeniz gereken nokta sitenizi ziyaret eden kullanıcıların bulunduğu konumlara göre yukarıdaki sunucuların lokasyonlarının değişiceğidir.

# CDN Neden Kullanılmalıdır?

## Hız

Yukarıda bahsettiğimiz gibi CDN firmaları ziyaretçilere en yakın sunuculardan hizmet verdiği için hız konusunda avantajlı bir konumda olursunuz. Ayrıca CDN firmaları sunucularını statik dosyalara göre ayarlama yaptıkları için bu dosyalar CDN sunucularında hızlı ve kararlı bir şekilde açılır.

## Sunucu Yükü Azaltmak

Sitenize giren her ziyaretçi statik dosyalar için belirli bir istek gönderir. Bu durum sunucunuzda belirli bir yük oluşturur.Eğer önbellekleme ve statik dosyalar için doğru ortam oluşturulması yapılmamışsa bu sunucuzun yavaşlamasına ve yanıt vermemesine neden olabilir. Bu durum yüksek hitli sitelerde gözükebilirken bir önceki cümlede belirttiğim gibi doğru ayarlamalar yapılmazsa düşük hitli sitelerde bile sunucu yanıt vermemesi gibi durumlarla karşılaşabilirsiniz. Aşağıda örnek bir resim görebilirsiniz.

\[caption id="attachment\_851" align="aligncenter" width="1324"\]![](images/NCDN_-_CDN.png) Sol Taraf Cdn Kullanmayan Sunucu | Sağ Taraf CDN Kullanan Sunucu\[/caption\]

## Arama Motorları (SEO)

Günümüzde Google, Yandex, Bing vb. arama motorlarının öncelik verdiği site hızınızdır. CDN kullanarak site hızınızı artıracağınız ve sunucu yükünüzü azaltacağınız için arama motorları tarafından daha öncelikli olarak değerlendireleceksiniz.

# Sonuç

Size bu yazımda;

- CDN Nedir?
- CDN Nasıl Çalışır?
- Neden CDN Kullanmalısınız?

sorularına yanıt vermeye çalıştım. Sorularınızı buradan yorum olarak sorabilirsiniz.

Hayırlı Günler
