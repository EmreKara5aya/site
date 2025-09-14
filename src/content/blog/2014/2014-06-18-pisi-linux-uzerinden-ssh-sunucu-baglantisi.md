---
title: "Pisi Linux Üzerinden Ssh Sunucu Bağlantısı"
coverImage:
  src: ./images/Pr7RGQ.png
  alt: "Pisi Linux Üzerinden Ssh Sunucu Bağlantısı"
date: 2014-06-18
categories: 
  - "nasil-yapilir"
  - "pisi-linux"
tags: 
  - "linux-ssh"
  - "openssh-pisilinux"
  - "pisi-linux-2"
  - "ssh-baglanti"
slug: "pisi-linux-uzerinden-ssh-sunucu-baglantisi"
---

Merhaba Arkadaşlar

Bügün size yeni geçtiğim Pisi Linux işletim sisteminde nasıl **Ssh sunucu** bağlantısı yapılacağını göstermeye çalışacağım.Bu bağlantıyı yaparken kullanacağımız komutlar root izni gerektireceği için lütfen root şifrenizi yanınızda bulundurun.

 

İlk olarak Konsolu açınız.Burada aşağıdaki komutu giriniz.

```
sudo pisi it openssh
```

Bu komut ile ssh bağlantı için gerekli olan openssh ' yi kurmuş olacağız.Burada sizden root şifresi isteyebilir.Örnek bir konsol görüntüsünü aşağıya ekledim

![konsol](images/Pr7RGQ.png)

Openssh kurulumu yaptıktan sonra aynı konsol üzerinden

```
ssh root@ipadresi
```

şeklinde komutu girerek ssh sunucunuza bağlanabilirsiniz.Burada root kullanıcı adı ip adresi ise sunucunuzun ip adresinizi belirtmektedir.

Komutu kendinize uyarlıyıp giriş yapmak istediğinizde sizden rsa keyi kabul etmenizi isteyecektir.Bu bölümü yes yazarak kabul edip geçiyoruz ve sunucu şifremizi giriyoruz.Eğer herşeyi  doğru yaptıysanız Ssh bağlantınız gerçekleşmiş olacaktır.

Hayırlı Günler Dilerim...
