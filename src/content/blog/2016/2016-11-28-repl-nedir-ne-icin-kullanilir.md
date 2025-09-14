---
title: "REPL Nedir? Ne İçin Kullanılır?"
date: 2016-11-28
categories: 
  - "nedir"
  - "nodejs"
tags: 
  - "repl-chrome"
  - "repl-ne-icin-kullanilir"
  - "repl-nedir"
  - "repl-node-js"
coverImage:
  src: ./images/repl-loop.png
  alt: "REPL Nedir? Ne İçin Kullanılır?"
slug: "repl-nedir-ne-icin-kullanilir"
---

Node.js de kod yazmayı öğrenmeden önce Terminal komutlarını bilmemiz lazım. Terminal komutlarını anlamanız için REPL anlamanız gerekiyor. Bugün sizinle beraber REPL Nedir? ve REPL Ne İçin Kullanılır? sorularına yanıt arayacağız.

<!--more-->

### REPL Nedir?

REPL açılımı read–eval–print loop anlamı ise oku- değerlendir- yaz döngüsü olan etkileşimli bir bilgisayar programlama ortamıdır. Günümüzde yaygın olarak Node.js ve Chrome tarafından kullanılır.

REPL açılımından da anlaşılacağı gibi klasik programlama ortamları gibi önce veriyi alır sonra değerlendirir ve en son kullanıcıya sonucu verir. Yani sizin yazmış olduğu programı adım adım yürütür. Şimdi sizinle REPL adımlarına daha yakından bakalım.

REPL adımlarını zaten programın açılımın da anlatmıştık. REPL açılımı read- eval- print loop anlamı ise oku- değerlendir- yaz döngüsüdür. Aklınız karıştı değil mi? Şimdi bunu bir örnekle anlatalım...

Örneğin REPL ortamında çözmeye çalıştığınız 1+2+3 işlemi olsun. Bu işlem REPL tarafından aşağıda ki adımlarla çözülür.

1.  Sizden gelen 1+2+3 verisini okuyup anlayarak her birini bellekte uygun veri yapısına dönüştürülür. Yani üç sayı olduğunu, bu sayıların kaç olduğunu ve bu sayılarla ne iş yapacağını belleğe uygun veri yapısına dönüştürülüp hazıda tutulur. (Read - Okuma Adımı)
2. Bellekte uygun veri yapısına dönüştürülen veriler (kısaca girdiğiniz veriler) değerlendirmeye alınır ve işlem yapılır. Yani sizin 1+2+3 işleminde 3 sayı olduğunu ve bu sayıların birbiriyle toplanacağını değerlendirir ve işlem yaparak 3 sayıyı toplar. (Eval - Değerlendirme Adımı)
3. Bellekte ki veri yapısını değerlendirdikten sonra derleme olmadan sonucu kullanıcı yani size sunar.  Yani size cevabın 6 olduğu sunulur. ( Print - Yaz Adımı)
4. Bu adımda ise verilen işlem sonuçlanana kadar yukarıdaki üç adım uygulanır. Yani kısaca döngü oluşturulur. ( Loop - Döngü adımı)

Gördüğünüz gibi REPL aynı bizim beynimiz gibi adım adım çalışır. Bu sayede hızlı ve doğru sonuçlar alırız.

REPL üst bölümde yazdığım gibi Node.js veya Chrome ile gelmekte. ([Windows İçin Node.js Kurulumu](http://www.emrekarakaya.com.tr/windows-icin-node-js-ve-npm-kurulumu/) - [Linux İçin Node.js Kurulumu](http://www.emrekarakaya.com.tr/linux-icin-nodejs-ve-npm-kurulumu/) ) Ancak siz Node.js kurmadan REPL denemek istiyorsanız online olarak [buraya tıklayarak](https://www.tutorialspoint.com/nodejs_terminal_online.php) hem REPL hemde Node.js 'yi kurmadan deneyebilirsiniz. Denemek için açılan konsola node yazın ve  **>** işaretini gördüğünüz zaman basit 1+2+3 işlemini konsol ekranına girip REPL denemeleri yapabilirsiniz. Aynı şekilde Node.js kurulumu yapmış arkadaşlarımız konsol veya terminal ekranlarına node yazarak denemeleri yapabilirler.

Bir sonraki yazımda size REPL Terminal komutlarını anlatacağım. Sorularınızı yorum olarak sorabilirsiniz.

Hayırlı Günler
