---
title: "Linux İçin Nodejs Ve Npm Kurulumu"
date: 2016-11-25
categories: 
  - "nasil-yapilir"
  - "nodejs"
tags: 
  - "elementary-os-icin-nodejs-kurulumu"
  - "elementary-os-icin-npm-kurulumu"
  - "kali-linux-icin-nodejs-kurulumu"
  - "kali-linux-icin-npm-kurulumu"
  - "linux-icin-nodejs-kurulum"
  - "linux-icin-npm-kurulum"
  - "mint-icin-nodejs-kurulumu"
  - "mint-icin-npm-kurulumu"
  - "ubuntu-icin-nodejs-kurulum"
  - "ubuntu-icin-npm-kurulum"
coverImage:
  src: ./images/nodejs-logo-webmaster-kitchen.jpg
  alt: "Linux İçin Nodejs Ve Npm Kurulumu"
slug: "linux-icin-nodejs-ve-npm-kurulumu"
---

Daha önce ki yazılarımda Linux'a geçtiğimi belirtmiştim.Bugün size Linux kurulu bilgisayarınıza nasıl Nodejs ve Npm kuracağınızı göstereceğim.

<!--more-->

Öncelikle benim kullandığım sürüm Elementary os ve ben yazıyı bu sürüme ve ubuntu türevlerine uygun olarak anlatacağım. Yani siz bu yazıyı okuduktan sonra ;

- **Ubuntu İçin Nodejs Ve Npm Kurulumu**
- **Debian İçin Nodejs Ve Npm Kurulumu**
- **Elementary Os İçin Nodejs Ve Npm Kurulumu**
- **Linux Mint İçin Nodejs Ve Npm Kurulumu**
- **Kali Linux İçin Nodejs Ve Npm Kurulumu**

ve benzeri Ubuntu ve Debian türevleri için Nodejs ve Npm kurulumu hakkında bilgi sahibi olacaksınız. Şimdi yazımıza geçelim.

1. Terminal penceresini açın.(Bu bazı sürümlerde uçbirim,konsol olarak geçmektedir. Windows'dan yeni geçen arkadaşlarımız için Linux komut penceresi diyebiliriz.)
2. **[LTS, STS Ve Current Nedir?](http://www.emrekarakaya.com.tr/lts-sts-ve-current-nedir/)** yazımızı inceledikten sonra [**buraya tıklayarak**](https://nodejs.org/en/) Node.js sitesine gidin. Bu sayfada kendinize uygun Lts veya Current sürümü seçin. Seçtiğiniz sürümün numarası örneğin v6.9.1 ise kodlarda 6.x olacak. Yani baştaki sürüm numarasını dikkate alacaksınız.
3. Terminale aşağıdaki kodları giriniz.
    
    ```
    sudo apt-get install -y build-essential
    ```
    
    ```
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
    
4. Yukarıda ki kodların çalışması bittiği zaman aşağıdaki kod ile Nodejs doğru sürümün kurulup kurulmadığını denetleyin.
    
    ```
    node -v
    ```
    
5. Nodejs kurulumu bittikten sonra sıra geldi Npm kurulumuna... Aşağıda ki kodu girerek Npm kurulumu yapın.
    
    ```
    sudo apt-get install npm
    ```
    
6. Yukarıda ki kodların çalışması bittiği zaman aşağıdaki kod ile Npm kurulup kurulmadığını denetleyin.
    
    ```
    npm -v
    
    ```
    

Şimdilik bu yazımda Nodejs ve Npm kurulumunu Ubuntu ve türevlerinde göstererek bitiriyorum. Diğer yazımda örnek bir dosya yazıp temel kodları öğreneceğiz. Sorularınızı yorum olarak sorabilirsiniz.

Hayırlı Günler
