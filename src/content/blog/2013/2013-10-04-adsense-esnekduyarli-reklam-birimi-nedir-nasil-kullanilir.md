---
title: "Adsense Esnek(Duyarlı) Reklam Birimi Nedir? Nasıl Kullanılır?"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Adsense Esnek(Duyarlı) Reklam Birimi Nedir? Nasıl Kullanılır?"
date: 2013-10-04
categories: 
  - "google-adsense"
  - "nasil-yapilir"
tags: 
  - "adsense-esnek"
  - "adsense-nedir"
  - "duyarli-reklam"
  - "reklam-birimi"
slug: "adsense-esnekduyarli-reklam-birimi-nedir-nasil-kullanilir"
---

Merhaba Arkadaşlar  
  
Bügün size Adsense de Esnek(Duyarlı) Reklam Birimi'ni anlatmaya çalışacağım.Öncelikle Esnek(Duyarlı) Reklam Birimi nedir?  
  
Esnek(Duyarlı) Reklam Birimi adsense reklamlarınızı sitenizin görüntüleyen ekranın/cihazın özelliklerine göre dinamik olarak kontrol etmenizi sağlar.Ancak bu otomatik olarak yapılmaz.İşte size nasıl yapılacağını göstereceğim.Adım Adım ilerlersek;  
  

1. Öncelikle Adsense hesabınızda oturum açın.Reklam birimleri bölümünden yeni bir reklam birimi oluşturun
2. Reklam biriminizin adını istediğiniz bir ad girin.Reklam boyutu bölümünden Duyarlı Reklam Birimi (Beta) 'yı seçiniz.Geri kalan bölümü kendi isteğinize göre doldurunuz
3. Bölümleri doldurduktan sonra Kaydet Ve Kodu al diyin.Karşınıza aşağıdaki gibi bir kod gelmesi lazım  
      
    
        [HTML Dili](http://www.analizcik.com)
    
    `   ``` <style>.analizcik.com { width: 320px; height: 50px; }@media(min-width: 500px) { .analizcik.com { width: 468px; height: 60px; } }@media(min-width: 800px) { .analizcik.com { width: 728px; height: 90px; } }</style><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- deneme --><ins class="adsbygoogle analizcik.com"     style="display:inline-block"     data-ad-client="ca-pub-12345678901"     data-ad-slot="1234567890"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script> ```   `
    
      
    
      
    

  
  
Kodları Aldım Siteme Nasıl Ekleyebilirim?  
  
  
  
Şimdi kodu aldınız ama sitenize nasıl entegre edeceksiniz.Bu çok basit.Öncelikle sizin reklam boyutlarınız  
  

    [CSS Dili](http://www.analizcik.com)

`   ``` .analizcik.com { width: 320px; height: 50px; }@media(min-width: 500px) { .analizcik.com { width: 468px; height: 60px; } }@media(min-width: 800px) { .analizcik.com { width: 728px; height: 90px; } } ```   `

  

  
bölümünde saklı.Size kodları anlatırsak  
  

    [CSS Dili](http://www.analizcik.com)

`   ``` @media(min-width: 500px) { .analizcik.com { width: 468px; height: 60px; } } ```   `

  

kodunda

- min-width: 500px kodunda Minumum 500 px boyutuna kadar belirtiğiniz reklamı gösterir.Yani orada gösterilen genişlik 500 px altına düşerse diğer reklam boyutunu gösterecek.Siz bunu kendinize göre ayarlıyacaksınız.Siz burada min-height: 70px gibi bir kodda kullanabilirsiniz.Bu kodda ise minumum yüksekliği belirtmektedir.
- width: 468px; height: 60px; bölümü reklamınızın boyutlarını belirtir.Yani minumum genişlik 500 px üstünde ise adsense reklamınız 468 px genişliğinde 60 piksek boyutunda gösterilir.Reklam boyutlarını
    
    Kod:  
    
    `https://support.google.com/adsense/answer/2953032`
    
    buradaki verilen boyutlar dahilinde yapabilirsiniz.  
      
    

  
Şimdi unutmadan

    [CSS Dili](http://www.analizcik.com)

`   ``` .analizcik.com { width: 320px; height: 50px; } ```   `

  

kodunu da açıklıyım.Bu kod verilen şartlardaki pxlerin hiçbiri sağlanmıyorsa görünecek reklam boyutundaki kodudur.  
  
Eğer anlamadığınız yer olursa konu altından sorabilirsiniz.Ayrıca Esnek(Duyarlı) Reklam'ın Demosu olarak [Emre Karakaya Bir Garip Webmaster](http://www.emrekarakaya.com.tr/) adresine bakabilirsiniz.  
  
Hayırlı Günler
