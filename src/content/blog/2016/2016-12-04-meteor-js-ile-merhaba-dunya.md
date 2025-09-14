---
title: "Meteor.js İle Merhaba Dünya"
date: 2016-12-04
categories: 
  - "meteor-js"
tags: 
  - "merhaba-dunya"
  - "meteor-js"
  - "meteor-js-angular-2"
  - "meteor-js-kurulum"
  - "meteor-js-tanimak"
coverImage:
  src: ./images/og-image-logo.png
  alt: "Meteor.js İle Merhaba Dünya"
slug: "meteor-js-ile-merhaba-dunya"
---

Kurulumunu yaptığımız Meteor.js ’yi yakından tanıyarak bu yazıda Merhaba Dünya diyoruz.

<!--more-->

Meteor.js 'yi kullanarak Merhaba Dünya demek için ilk olarak projemizi oluşturmak lazım. Ben projeyi Angular 2 öğrenmek için Angular 2 ile çalışacak şekilde oluşturdum. Bu anlatım ve ilerde ki anlatımlar Angular 2'ye uygun şekilde gelecek. Şimdi Merhaba Dünya demek için aşağıdaki adımları takip edelim.

1. Projenizin oluşturmak istediğiniz klasöre giriş yapın. Klasörde **Yönetici** olarak Komut İstemini yada Terminali açın.
2. İlk olarak proje klasörünüze bir isim belirleyin. Benim belirlediğim isim projem olacak. Siz komutlar da **projem adı geçen** yerlerde kendi proje adınızı yazacaksınız.
3. İlk olarak
    
    ```
    git clone https://github.com/bsliran/angular2-meteor-base projem
    ```
    
    komutunu geçerek örnek proje dosyalarının projem adlı bir klasörün içine indirilmesini sağlıyoruz.Bilgisayarınızda git kurulu değilse **[buraya tıklayarak](https://github.com/Urigo/angular2-meteor-base/archive/master.zip)** dosyayı indirin. Daha sonra indirdiğiniz zip dosyasının içindeki angular2-meteor-base-master klasörünü projeyi oluşturmak istediğiniz klasöre çıkarın. Daha sonra ismini projem yapın.
4. Yukarıda ki komut sonlandığı zaman
    
    ```
    cd projem
    ```
    
    komutu ile projem klasörüne giriş yapıyoruz.
5. Projem klasörüne giriş yaptıktan sonra aşağıdaki komutu çalıştırarak meteor.js'yi npm olarak kuruyoruz.
    
    ```
    meteor npm install
    ```
    
6. Npm olarak kurulum bittikten sonra direk aşağıdaki komutu çalıştarak projemizi başlatalım.
    
    ```
    meteor
    ```
    
    Projeniz artık http://localhost:3000/ adresinde çalışmaya başladı. Projenizi inceledikten sonra sonlandırmak için klavyenizden CTRL ve C tuşlarına aynı anda basmanız yeterlidir.

Sorularınızı yorum olarak sorabilirsiniz.

Hayırlı Günler.
