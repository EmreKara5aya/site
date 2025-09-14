---
title: "Node.js ile Merhaba Dünya"
date: 2016-11-26
categories: 
  - "nodejs"
tags: 
  - "merhaba-dunya"
  - "node-js"
  - "node-js-kod-aciklamasi"
  - "node-js-merhaba-dunya"
coverImage:
  src: ./images/nodejs-logo-webmaster-kitchen.jpg
  alt: "Node.js ile Merhaba Dünya"
slug: "node-js-ile-merhaba-dunya"
---

Kurulumunu yaptığımız Nodejs'yi yakından tanıyarak bu yazıda Merhaba Dünya diyoruz.

<!--more-->

Önceki yazımda kurulumunu yaptığımız Node.js yi kullanarak bu yazıda Merhaba Dünya diyeceğiz ve kodları inceleyeceğiz.

İlk olarak kodların çalışacağı klasörü yaratalım ve kodları kayıt edelim. Sonra da kodları incelemeye başlayalım. Visual Studio Code uygulamasını açın ve sağ taraftaki Open folder butonuna tıklayarak yeni bir klasör oluşturun. Daha sonra aşağıdaki kodları kopyalayıp merhaba.js dosyası olarak kayıt edin.

```
// Burada hangi modülü kullandığımızı belirtiyoruz.
var http = require('http');

// Dosyamız hakkında bilgileri bu bölümde göreceğiz.
var server = http.createServer(function (request, response) {
  //Dosya özelliklerini buradan belirliyoruz.Ayrıca karakter setini de belirliyoruz
  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  response.end("Merhaba Dünya\n"); //Sayfa açıldığı zaman hangi yazı ile çıkacak.
});

// Dosya hangi portu kullanarak çalışacak
server.listen(8000);

// Dosya başarıyla çalıştığı zaman Terminalde gösterilecek mesaj
console.log("Başarıyla çalıştı");
```

Şimdi kodları yavaş yavaş tanıyalım.

 

- var http = require('http'); bölümünde kullanacağımız node.js modüllerini belirtiyoruz. Bunu ileride daha ayrıntılı yazımda anlatacağım o zaman bu yazıya link olarak ekliyeceğim.
- ```
    // Dosyamız hakkında bilgileri bu bölümde göreceğiz.
    var server = http.createServer(function (request, response) {
      //Dosya özelliklerini buradan belirliyoruz.Ayrıca karakter setini de belirliyoruz
      response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
      response.end("Merhaba Dünya\n"); //Sayfa açıldığı zaman hangi yazı ile çıkacak.
    });
    ```
    
    Yukarıda ki kodlar da ise Dosya hakkında bilgileri görebileceğiniz bir alan var. Kod açıklamalarında da belirtiğim üzere dosyanın karakter setini, içinde yazan bilgileri vb bilgileri bu bölümde ayarlıyabiliyoruz.
- server.listen(8000); koduyla hangi portu dinleyeceğimize karar veriyoruz. Örneğin kodda 8000 numaralı port belirtilmiş biz bu yüzden dosyamızı yazının sonunda http://127.0.0.1:8000 linkinden açacağız.
- console.log("Başarıyla çalıştı"); Terminalde dosyayı çalıştırmak için kodumuzu girdiğimiz zaman bize dosyanın başarıyla çalıştığını gösterecek olan mesaj. Bu mesajı terminalden görebilirsiniz.

Şimdi dosyamızı çalıştıralım. Yazı başında açtığınız klasöre girin ve sağ tıklayarak klasör içinde bir terminal oluşturun. Daha sonra Terminale

```
node merhaba.js
```

komutunu girin. Tarayıcınızdan http://127.0.0.1:8000 adresine girdiğiniz zaman Merhaba Dünya yazısını görebilirsiniz.

Sorularınızı yorum olarak sorabilirsiniz.

Hayırlı Günler
