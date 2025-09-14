---
title: "Angular 2 CLI Nedir? Nasıl Kurulur?"
date: 2016-11-03
categories: 
  - "angular-2"
  - "nasil-yapilir"
tags: 
  - "angular-2"
  - "angular-2-cli"
  - "angular-2-cli-nasil-kurulur"
  - "angular-2-cli-nedir"
coverImage:
  src: ./images/500628_a962.jpg
  alt: "Angular 2 CLI Nedir? Nasıl Kurulur?"
slug: "angular-2-cli-nedir-nasil-kurulur"
---

Merhaba Arkadaşlar

Angular 2 hakkındaki yazı dizimin 2. yazısı **Angular 2 CLI Nasıl Kurulur?** ile sizi başbaşa bırakıyorum.

<!--more-->

#### **Angular 2 CLI Nedir?**

Öncelikle Angular 2 CLI tanıtarak yazıya başlıyalım. Angular 2 CLI Angular 2 için gereken altyapının otomatik kurulumunu sağlayan bir araçtır. Angular ekibi tarafından yapılmıştır. Angular 2 CLI kurulduğu zaman otomatik olarak gereken altyapı, örnek proje, gereken test alanı oluşturur. Bunları sadece birkaç komutla hızlıca yapması biz geliştiriciler için önemli kolaylık sağlamaktır.

#### Angular 2 CLI Nasıl Kurulur?

Angular 2 CLI kurulumu için öncelikle bilgisayarınızda node.js ve npm kurulu olmalıdır. Bu araçlar kurulu olduktan sonra aşağıdaki adımları takip ederek kurulumu yapabilirsiniz.

1. Kurulumu yapmak istediğiniz klasöre gelin ve yönetici haklarıyla komut istemini(Penceresini) açın.
2. Komut satırına
    
    ```
    npm install -g angular-cli
    ```
    
    kodunu ekleyin.Kod yaklaşık 5 dakika çalışıp Angular 2 için gereken araçları kuracaktır.
3. Kurulumun doğru bir şekilde tamamlanıp tamamlanmadığını kontrol etmek için
    
    ```
    ng --help
    ```
    
    Eğer kod hata vermeden çalışıyorsa kurulum doğru yapılmıştır. Ancak Cannot find module 'modulismi' hatası alıyorsanız hata veren modül ismini aşağıdaki koda girip kodu çalıştırın ve 3.adımı tekrar edin.
    
    ```
    npm install -g modulismi
    ```
    
4. 3\. adım başarıyla gerçekleştiyse yeni proje oluşturmanın zamanı gelmiştir.Ben örnek olarak deneme projesini oluşturacağım. Siz istediğiniz adı kodlarda düzenleyerek koyabilirsiniz. Şimdi aşağıdaki kodu girerek deneme projesini oluşturacağız
    
    ```
    ng new deneme
    cd deneme
    ng serve
    ```
    
     
5. Yukarıda ki kodları girdikten sonra http://localhost:4200/ adresine girerek kurulumun başarıyla yapılıp yapılmadığını denetleyebilirsiniz.
6. Denetlemeniz bittiği zaman klavyenizden CTRL + C tuşlarına aynı anda basın. Daha sonra çıkan uyarıyı Y tuşuna basarak kabul edip projeyi sonlandırabilirsiniz.

Sorularınızı yorum olarak sorabilirsiniz. Hayırlı Günler dilerim.
