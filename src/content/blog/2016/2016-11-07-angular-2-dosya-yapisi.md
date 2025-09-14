---
title: "Angular 2 Dosya Yapısı"
date: 2016-11-07
categories: 
  - "angular-2"
tags: 
  - "angular-2-dosya"
  - "angular-2-dosya-yapisi"
  - "angular-2-paket"
  - "angular-2-yapi"
coverImage:
  src: ./images/500628_a962.jpg
  alt: "Angular 2 Dosya Yapısı"
slug: "angular-2-dosya-yapisi"
---

Merhaba Arkadaşlar

Bugün sizinle Angular 2 'nin dosya yapısını inceleyeceğiz. Bu dosya yapısını incelerken [Webstorm IDE İle Angular 2 Kurulumu Ve Çalıştırılması](http://www.emrekarakaya.com.tr/webstorm-ide-ile-angular-2-kurulumu-ve-calistirilmasi/) adlı yazımda kurmuş olduğum Angular 2 projesini temel olarak alacağım. Şimdi sizinle beraber **Angular 2 Dosya Yapısını** inceleyelim.

<!--more-->

İlk olarak dikkat etmemiz gereken dosya tabi ki package.json dosyası. Bu dosya Angular 2 projemizin bilgi sayfasıdır.Burada projemizin adı , açıklaması , anahtar kelimeleri, yapımcıları , git sayfası , hata bildirme sayfası , kullandığı scriptler, kullandığı uygulamaların sürümleri , kullandığı kütüphaneler ( Angular 2 bir framework. Framework birçok kütüphaneden oluşur. Detaylı tanım için : [Framework Nedir? Ne İçin Kullanılır?](http://www.emrekarakaya.com.tr/framework-nedir-ne-icin-kullanilir/) ) belirtilir. Bu dosyanın benzerini [TypeScript](http://www.emrekarakaya.com.tr/typescript-nedir-ne-ise-yarar/) kullanan çoğu projede bulabilirsiniz. Aşağıda bu dosyanın örnek kodlarını bulabilirsiniz.

```
{
  "name": "angular2-seed", //Proje ismi
  "version": "1.0.0", //Proje Versiyonu
  "description": "A simple starter Angular2 project",  //Proje Açıklaması
  "scripts": { // Projenin kullandığı script komutları
    "build": "webpack --inline --colors --progress --display-error-details --display-cached",
    "watch": "npm run build -- --watch",
    "server": "webpack-dev-server --inline --colors --progress --display-error-details --display-cached --port 3000  --content-base src",
    "start": "npm run server"
  },
  "contributors": [ //Proje geliştiricileri
    "Rob Wormald <robwormald@gmail.com>",
    "PatrickJS <github@gdi2290.com>"
  ],
  "license": "MIT", //Proje Lisansı
  "devDependencies": { //Projenin kullandığı kütüphaneler
    "@types/core-js": "^0.9.32",
    "@types/node": "^6.0.38",
    "angular2-template-loader": "^0.4.0",
    "awesome-typescript-loader": "^1.1.1",
    "css-loader": "^0.23.1",
    "raw-loader": "^0.5.1",
    "to-string-loader": "^1.1.4",
    "typescript": "^2.0.2",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0",
    "webpack-merge": "^0.8.4"
  },
  "dependencies": { //Projenin kullandığı kütüphaneler
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/platform-server": "2.0.0",
    "@angular/router": "3.0.0",
    "@angular/upgrade": "2.0.0",
    "core-js": "^2.4.1",
    "ie-shim": "^0.1.0",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.12",
    "zone.js": "~0.6.23",
    "angular2-in-memory-web-api": "0.0.20",
    "bootstrap": "^3.3.7"
  },
  "keywords": [ //Projenin anahtar kelimeleri
    "Angular2",
    "angular2-seed",
    "official angular 2 seed",
    "official angular2 seed"
  ],
  "repository": { //Projenin github deposu
    "type": "git",
    "url": "git+https://github.com/angular/angular2-seed.git"
  },
  "bugs": { //Projenin hatalarını bildirebileceğiniz sayfa
    "url": "https://github.com/angular/angular2-seed/issues"
  },
  "homepage": "https://github.com/angular/angular2-seed#readme" //Proje web sitesinin sayfası
}
```

tsconfig.json dosyası TypeScriptimizin config dosyası. Buradan TypeScript ayarlamaları yapabiliyoruz. İlerleyen zamanlarda bu dosyayı size daha detaylı bir şekilde anlatıp örnek kodlamalar göstereceğim.

webpack.config.js Node.js webpack modülünün config dosyasıdır. Bu modül ile Angular 2 çalışmaktadır.

node\_modules klasörü Angular 2 projemizde kullanacağım Node.js modüllerinin dosyaların barındığı klasördür.

src klasörü projemizin ziyaretçilere görünen dosyaların bulunduğu bölümdür. Bu klasöre ilerleyen bölümlerde değineceğim.

 

Size basite indirgeyerek Angular 2 dosya yapısını anlatmaya çalıştım. Yazıda belirttiğim iki klasörü ilerleyen derslerde ayrıntılı olarak anlatacağım. Sorularınızı yorum olarak sorabilirsiniz.
