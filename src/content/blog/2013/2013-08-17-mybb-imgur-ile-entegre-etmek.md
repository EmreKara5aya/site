---
title: "Mybb Imgur İle Entegre Etmek"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Mybb Imgur İle Entegre Etmek"
date: 2013-08-17
categories: 
  - "mybb"
tags: 
  - "emre-karakaya"
  - "entegre-etmek"
  - "mybb-imgur"
slug: "mybb-imgur-ile-entegre-etmek"
---

Merhaba Arkadaşlar

Bügün Size Nasıl Imgur Resim Yükleme Servisini [Mybb](http://www.emrekarakaya.com.tr/category/mybb/ "Mybb") İle Entegre Edeceğimizi Anlatmaya Çalışacağım.Ancak Öncelikle Imgur Nedir Ona Bakalım….

Imgur Bir Resim Yükleme Servisidir.Diğer Sitelere Göre Hızı, Kalitesi Ve Resimlerin Kalıcılığı Onu Öne Çıkarıyor.Peki Biz Imguru Nasıl Mybb İle Entegre Edeceğiz.

Şimdi Adım Adım Anlatırsak

 

1. Öncelikle [Buraya Tıklayarak](https://imgur.com/register/api_anon) Imgur dan Api Key Alınız
2. [Buraya Tıklayarak](https://www.box.com/s/2jfxke67hsompw94xrkl) Rar Dosyasını İndirin.Rar Dosyası İçindekileri Arşivden Çıkarın
3. imgur.php Dosyasını Açın Ve İçindeki Keyi Gir Bölümüne Api Keyinizi Girip Kaydedin.Daha Sonra Dosyaları Ftp De Mybb’nin Kurulu Olduğu Dizine Gönderin
4. jscripts/editor.js Dosyasını Açın.Aşağıdaki Kodu Bulun
    
    |   ``` {type: 'button', name: 'img', sprite: 'image', insert: 'image', extra: 1, title: this.options.lang.title_image}, ```   |
    | --- |
    
    Altına Aşağıdaki Kodu Ekleyin
    
    |   ``` {type: 'button', name: 'imgur', insert: 'imgur', image: 'imgurbut.png', title: 'Upload to Imgur'}, ```   |
    | --- |
    
5. Aşağıdaki Kodu Bulun
    
    |   ``` insertIMG: function() 	{ 		image = prompt(this.options.lang.enter_image, "http://");  		if(image) 		{ 			this.performInsert("[img]"+image+"[/img]", "", true); 		} 	}, ```   |
    | --- |
    
    Altına Aşağıdaki Kodu Ekleyin.
    
    |   ``` insertImgur: function()     {         MyBB.popupWindow('imgur.php', 'imgur', 240, 200);     }, ```   |
    | --- |
    
6. Aşağıdaki Kodu Bulup
    
    |   ``` case "image": 				this.insertIMG(); 				break; ```   |
    | --- |
    
    Altına
    
    |   ``` case "imgur":                 this.insertImgur();                 break; ```   |
    | --- |
    
    Ekleyip Kaydedin.

Artık Arkadaşlar Hiçbir Hata Olmadıysa Imgur Sitenize Entegre Olmuştur.Demo Olarak : [http://demolar.emrekarakaya.com.tr/ Adresine Bakabilirsiniz.](http://demolar.emrekarakaya.com.tr/)

Hayırlı Günler
