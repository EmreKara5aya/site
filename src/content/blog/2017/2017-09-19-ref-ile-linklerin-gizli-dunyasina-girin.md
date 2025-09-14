---
title: "Ref İle Linklerin Gizli Dünyasına Girin"
date: 2017-09-19
categories: 
  - "nasil-yapilir"
  - "nedir"
  - "webmaster"
tags: 
  - "a-ref"
  - "link-ref"
  - "gizli-dunya"
  - "kaliteli-blog"
  - "link"
  - "ref"
  - "seo-link"
  - "webmaster-blogu"
coverImage:
  src: ./images/shutterstock_99568817-1024x768.jpg
  alt: "Ref İle Linklerin Gizli Dünyasına Girin"
slug: "ref-ile-linklerin-gizli-dunyasina-girin"
---

Biz webmasterler kaliteli [**webmaster blogu**](https://www.emrekarakaya.com.tr) oluşturmak için çok çabalıyoruz. Blogumuz için birçok [**Seo**](https://www.emrekarakaya.com.tr) çalışması yapıyor, blogumuzdan dışarıya link veriyor veya link alıyoruz. Ancak çoğu arkadaşımız linkleri sadece nofollow ve dofollow' dan ibaret sanıyorlar. Bugün sizinle linklerin gizli dünyasına gireceğiz.

<!--more-->

Linkler bizim sandığımız gibi sadece nofollow ve dofollow' dan oluşmuyor. Günümüzde toplam 21 tane a ve link rel etiketi bulunmakta. Tabi ki bunların arasında nofollow ve dofollow bulunmakta :) Şimdi gelin sizinle rel etiketlerini inceleyerek linklerin gizli dünyasına girelim.

## rel="alternate" Etiketi

rel="alternate" etiketi verilen linkin sayfanın alternatif versiyonu olduğunu belirtir.

### Örnek rel="alternate" Etiketi Kullanımları

rel="alternate" etiketi ile ;

- - Sayfanın farklı bir dil versiyonuna link verebilirsiniz. Yani alternate etiketini kullanarak sayfanızın ingilizce, italyanca, arapça vb. versiyonlarına link verebilirsiniz. Link tagı için örnek kod;`<link rel="alternate" hreflang="en" href="http://en.siteadresi.com/" />`
        
        A tagı için örnek kod;
        
        `<a href="http://en.siteadresim.com" hreflang="en" rel="alternate">İngilizce Link</a>`
    - Sayfanızın tablet, mobil, masaüstü versiyonlarına link verebilirsiniz. Bu kullanım özellikle mobil ve tablet için ayrı domain oluşturanlar için yararlı olacaktır. Aşağıda örnek kodları bulabilirsiniz.
        - Responsive (Duyarlı) tasarımlar için link tagı için örnek kod;`<link rel="alternate" media="handheld" href="http://m.siteadresim.com" />`
            
            A tagı için örnek kod;
            
            `<a href="http://m.siteadresim.com" rel="alternate" media="handheld">Mobil Link</a>`
        - Belirli bir çözünürlüğe göre hazırlanmış tasarımlar için;`<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.siteadresim.com" />`
            
            A tagı için örnek kod;
            
            `<a href="http://m.siteadresim.com" rel="alternate" media="only screen and (max-width: 640px)">Mobil Link</a>`
- Sitenizin Page Feed sayfalarını yani rss ve atom sürümlerine alternate etiketi ile link verebilirsiniz. Link tagı için örnek;`<link rel="alternate" type="application/rss+xml" href="http://siteadresim.com/site.rss" title="RSS feed for this page" />`

## rel="author" Etiketi

rel="author" etiketi ile sayfanın yapımcısını belirtmek amacıyla kullanılır. Ayrıca link tagı ile sayfanızın yapımcısını da belirtebilirsiniz.

### Örnek rel=”author” Etiketi Kullanımları

- Link tagı için örnek kullanım;`<link rel="author" href="http://siteadresim.com/author.html" />`
- A tagı için örnek kullanım;`<a href="http://siteadresim.com/author-page.html" rel="author">Yapımcı Sayfası</a>`

## rel="appendix" Etiketi

rel="appendix" etiketi ile verilen linkin sayfanın devamı ya da güncel versiyonu olduğunu belirtir. Örneğin Hosting siteniz var fiyatlar sayfasında hosting özellikleri sayfasına link veriyorsunuz. İşte bu link de rel="appendix" etiketini kullanacaksınız.

### Örnek rel="appendix" Etiketi Kullanımları

A tagı için örnek kullanım;

`<a href="http://siteadresim.com/host-ozellikleri" rel="appendix">Hosting Özellikleri</a>`

## rel="archives" Etiketi

rel="archives" etiketi ile verilen linkin sayfanın arşiv sayfasına ait olduğunu belirtir. Arşiv sayfaları fazla css ve js kullanmadan hazırlandıkları için düşük hız ve kotaya sahip kullanıcılar için idealdir.

### Örnek rel="archives" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/arsiv.html" rel="archives">Arşiv</a>`
- Link tagı için örnek kullanım`<link rel="archives" href="http://siteadresim.com/arsiv.html" />`

## rel="bookmark" Etiketi

rel="bookmark" etiketi ile verilen linkin sayfanın yer imi veya döküman olduğunu belirtir.

### Örnek rel="bookmark" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/dokuman.html" rel="bookmark">Hosting Yardım Dökümanı</a>`
- Link tagı için örnek kullanım`<link rel="bookmark" href="http://siteadresim.com/dokuman.html" />`

## rel="chapter" Etiketi

rel="chapter" etiketi ile verilen linkin sayfanın herhangi bir bölümü için verilmiş link olduğunu belirtir.Örnek olarak Yazıda Neler Var? bölümünü inceleyebilirsiniz.

### Örnek rel="chapter" Etiketi Kullanımları

A tagı için örnek kullanımı;

`<a href="http://siteadresim.com/dokuman.html" rel="chapter">Hosting Yardım Dökümanı</a>`

## rel="contents" Etiketi

rel="contents" etiketi ile verilen linkin sayfanın içindekiler bölümü olduğu belirtilir. Örneği inceleyerek daha iyi anlayabilirsiniz.

### Örnek rel="contents" Etiketi Kullanımları

- A tagı için örnek kullanımı;`<a href="http://siteadresim.com/icindekiler.html" rel="contents">İçindekiler</a>`
- Link tagı için örnek kullanım`<link rel="contents" href="http://siteadresim.com/icindekiler.html" />`

## rel="copyright" Etiketi

rel="copyright" etiketi ile verilen linkin sayfanın telif haklarını içerdiği belirtilir. DMCA ve Creative Commons linklerinizi rel="copyright" etiketini kullanarak verebilirsiniz.

### Örnek rel="copyright" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/telifhaklari.html" rel="copyright">Telif Hakları</a>`
- Link tagı için örnek kullanım`<link rel="copyright" href="http://siteadresim.com/telifhaklari.html" />`

## rel="dofollow" Etiketi

rel="dofollow" ile sitenizin verilen linke güvendiğini ve destek verdiğinizi belirtmiş olursunuz.

### Örnek rel="dofollow" Etiketi Kullanımları

A tagı için örnek kullanımı;

`<a href="http://siteadresim.com/link.html" rel="dofollow">Sayfa</a>`

## rel="first" Etiketi

rel="first" etiketi verilen linkin sayfa dizininde ki ilk sayfaya ait olduğunu belirtmek amacıyla kullanılır.

### Örnek rel="first" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/konu.html?sayfa=1" rel="first">Sayfa 1</a>`
- Link tagı için örnek kullanım`<link rel="first" href="http://siteadresim.com/konu.html?sayfa=1" />`

## rel="glossary" Etiketi

rel="glossary" etiketi ile sayfada kullanılan terimlerin açıklandığı sözlük sayfalarınıza link verebilirsiniz. Örneğin seo hakkında bir yazı yazdınız ve Seo kelimesine link verip Seo Nedir? sayfasına yönlendirmek istediğiniz zaman rel="glossary" etiketini kullanarak link vereceksiniz.

### Örnek rel="glossary" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/seonedir.html" rel="glossary">Seo Nedir?</a>`
- Link tagı için örnek kullanım`<link rel="glossary" href="http://siteadresim.com/seonedir.html" />`

## rel="help" Etiketi

rel="help" etiketi ile verilen linkin sayfanın yardım sayfasına verilen link olduğunu belirtir.

### Örnek rel="help" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/yardim.html" rel="help">Yardım</a>`
- Link tagı için örnek kullanım`<link rel="help" href="http://siteadresim.com/yardim.html" />`

## rel="index" Etiketi

rel="index" etiketi ile verilen linkin sayfanın dizin (ana sayfa, kategori sayfası vb.) sayfasına verildiğini belirtir.

### Örnek rel="index" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/index.html" rel="help">Anasayfa</a>`
- Link tagı için örnek kullanım`<link rel="index" href="http://siteadresim.com/index.html" />`

## rel="license" Etiketi

rel="license" etiketi ile verilen linkin sayfanın lisans sayfasına ait olduğunu belirtir. rel="copyright" etiketinin kullanıldığı yerlerde kullanılmayabilir.

### Örnek rel="license" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/lisans.html" rel="license">Lisans Koşulları</a>`
- Link tagı için örnek kullanım`<link rel="license" href="http://siteadresim.com/lisans.html" />`

## rel="next" Etiketi

rel="next" etiketi verilen linkin sayfa dizisinde sonradan gelen sayfayı belirtmek amacıyla kullanılır.

### Örnek rel="next" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/siradakisayfa.html" rel="next">Sıradaki sayfa</a>`
- Link tagı için örnek kullanım`<link rel="next" href="http://siteadresim.com/siradakisayfa.html" />`

## rel="nofollow" Etiketi

rel="nofollow" etiketi ile verilen linke güvenmediğinizi, destek olmadığınızı ve kendiniz vermediğinizi belirtirsiniz.

### Örnek rel="nofollow" Etiketi Kullanımları

A tagı için örnek kullanım

`<a href="http://siteadresim.com/link.html" rel="nofollow">Sayfa</a>` <

## rel="prev" Etiketi

rel="prev" etiketi ile verilen linkin sayfa dizisinde bir önceki sayfayı belirtmek amacıyla kullanılır.

### Örnek rel="prev" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/oncekisayfa.html" rel="prev">Önceki sayfa</a>`
- Link tagı için örnek kullanım`<link rel="prev" href="http://siteadresim.com/oncekisayfa.html" />`

## rel="search" Etiketi

rel="search" etiketi ile verilen linkin sayfanın arama bölümüne gideceğini belirtmek amacıyla kullanılır.

### Örnek rel="search" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/arama.html" rel="search">Arama Yap</a>`
- Link tagı için örnek kullanım`<link rel="search" href="http://siteadresim.com/arama.html" />`

## rel="section" Etiketi

rel="section" etiketi ile verilen linkin sayfanın ana bölümüne verilmiş olduğunu belirtir.

### Örnek rel="section" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/anabolum.html" rel="section">Ana Bölüm&amlt;/a>`
- Link tagı için örnek kullanım`<link rel="section" href="http://siteadresim.com/anabolum.html" />`

## rel="subsection" Etiketi

rel="subsection" etiketi ile verilen linkin sayfanın alt bölümlerine verilmiş olduğunu belirtir. Yani hosting hakkında bir yazıda rel="subsection" etiketi ile linux hosting bölümüne link verebilirsiniz.

### Örnek rel="subsection" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/altbolum.html" rel="subsection">Alt Bölüm&amlt;/a>`
- Link tagı için örnek kullanım`<link rel="subsection" href="http://siteadresim.com/altbolum.html" />`

## rel="tag" Etiketi

rel="tag" etiketi ile verilen linkin sayfanın etiket adresine ait olduğunu belirtir.

### Örnek rel="tag" Etiketi Kullanımları

- A tagı için örnek kullanım`<a href="http://siteadresim.com/etiket.html" rel="tag">Alt Bölüm&amlt;/a>`
- Link tagı için örnek kullanım`<link rel="tag" href="http://siteadresim.com/etiket.html" />`

Bu yazımda size linklerin sadece sadece nofollow ve dofollow' dan olmadığını anlatmaya çalıştım. Sorularınızı ve görüşlerinizi yorum olarak iletebilirsiniz.

Hayırlı Günler
