---
title: "Youtube Responsive Player Oluşturmak"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Youtube Responsive Player Oluşturmak"
date: 2014-02-19
categories: 
  - "nasil-yapilir"
  - "webmaster"
tags: 
  - "google-responsive"
  - "responsive-player"
  - "youtube-html5"
  - "youtube-player"
  - "youtube-responsive-player"
slug: "youtube-responsive-player-olusturmak"
---

Merhaba Arkadaşlar

Bildiğiniz üzere Google sitelerimiz için ayrı mobil tasarımlar yerine responsive tasarımları öneriyor.Bu nedenle bir çok webmaster arkadaşımızda tasarımlarını responsive bir şekilde yayınlıyor.Ancak bu arkadaşlarımız tasarımlarını responsive şekilde yayınlarken karşılarına Youtube engeli çıkıyor.

Size bu engeli tanıtmam gerekirse responsive tasarımlar siteyi görüntüleyen ekranın boyutuna göre sıralanırlar.Ancak bu sıralanma sırasında youtube ve diğer video sitelerinin tarayıcıları aynı büyük boyutlarında kalarak tasarımı bozar ve kullanıcıya karşı kötü görünüm sunar.Şimdi bu sorunu nasıl çözeceğimize bakalım...

1. İlk olarak aşağıdaki css kodunu sitenize ekleyin.
    
    ```
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px; height: 0; overflow: hidden;
    }
    
    .video-container iframe,
    .video-container object,
    .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ```
    
2. Css kodlarını sitemize ekledikten sonra aşağıdaki Youtube embed kodunu örnek olarak düzenleyelim.Şimdi arkadaşlar Youtube embed kodunun hiç oynanmamış şekli aşağıdaki gibidir.
    
    ```
    <iframe width="560" height="315" src="//www.youtube.com/embed/UnzJWur_xo4?list=UUr3PSvbeEyhIkehWhyLJUQQ" frameborder="0" allowfullscreen></iframe>
    ```
    
3. Biz şimdi kodun başına
    
    ```
    <div class="video-container">
    ```
    
    sonuna da
    
    ```
    </div>
    ```
    
    ekleyeceğiz.Yani eklenmiş şekilde kodumuzu gösterirsek
    
    ```
    <div class="video-container">
    <iframe width="560" height="315" src="//www.youtube.com/embed/UnzJWur_xo4?list=UUr3PSvbeEyhIkehWhyLJUQQ" frameborder="0" allowfullscreen></iframe></div>
    ```
    
    şeklinde olacaktır.

Şimdi size örnek bir demo sunalım.

<iframe width="560" height="315" src="//www.youtube.com/embed/UnzJWur_xo4?list=UUr3PSvbeEyhIkehWhyLJUQQ" allowfullscreen frameborder="0"></iframe>

Eğer sayfayı büyütüp küçültürseniz playerinde kendi kendine küçülüp büyüdüğünü göreceksinizdir.Eğer anlamadığınız sorular olursa hiç çekinmeden yorum olarak sorabilirsiniz.

Hayırlı Günler Dilerim
