---
title: "$mybb Değişken Listesi"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "$mybb Değişken Listesi"
date: 2014-03-22
categories: 
  - "mybb"
tags: 
  - "mybb-ceviri"
  - "mybb-degisken"
  - "mybb-liste"
  - "mybb-turk"
slug: "mybb-degisken-listesi"
---

Merhaba Arkadaşlar

Mybb ingilizce forumlarında dolaşırken [bu](http://community.mybb.com/thread-152105.html) konuya denk geldim.Bu konuyu çevirerek Mybb'yi geliştirmek isteyen Türk kullanıcılarımıza katkıda bulunmak istedim.

Kullanıcı Değişkenleri $mybb->user\['xxx'\]

- uid - Siteye giriş yapan kullanıcının uid değerini ekrana çeker. (Örnek: 1)
    
    * * *
    
- username - Siteye giriş yapan kullanıcının Kullanıcı adını çeker (Örnek: EmreKarakaya)
    
    * * *
    
- password - Siteye giriş yapan kullanıcının şifresini şifrelenmiş şekilde çeker(Örnek: 1575c0734578538326)
    
    * * *
    
- salt - Siteye giriş yapan kullanıcının salt halini çeker. (Örnek: 5kVI8A7U)
    
    * * *
    
- email - Siteye giriş yapan kullanıcının mail adresini çeker. (Örnek: example@gmail.com)
    
    * * *
    
- postnum - Siteye giriş yapan kullanıcının konu numarasını çeker.(Örnek: 100)
    
    * * *
    
- avatar - Siteye giriş yapan kullanıcının avatarını çeker.(Örnek: ./directory/avatar.jpg?dateline=#)
    
    * * *
    
- avatardimensions - Siteye giriş yapan kullanıcının avatar boyutunu çeker. '|' (Örnek: 200|200)
    
    * * *
    
- avatartype - Siteye giriş yapan kullanıcının avatar tipini çeker.(Örnek: upload)
    
    * * *
    
- usergroup - Siteye giriş yapan kullanıcının kullanıcı grubunu çeker. (Örnek: 4)
    
    * * *
    
- additionalgroups - Siteye giriş yapan kullanıcının ek kullanıcı gruplarını çeker. (Örnek: 3,2)
    
    * * *
    
- displaygroup - Siteye giriş yapan kullanıcının görülen kullanıcı grubunu çeker. (Örnek: 4)
    
    * * *
    
- usertitle - Siteye giriş yapan kullanıcının kullanıcı başlığını çeker (Örnek: MyBB Staff)
    
    * * *
    
- regdate - Siteye giriş yapan kullanıcının kayıt olduğu günü php [time()](http://us2.php.net/manual/en/function.time.php) formatında çeker. (Örnek: 1394565678)
    
    * * *
    
- lastactive - Siteye giriş yapan kullanıcının aktif olduğu zamanı php [time()](http://us2.php.net/manual/en/function.time.php) formatında çeker. (Örnek: 1387347924)
    
    * * *
    
- lastvisit - Siteye giriş yapan kullanıcının en son giriş tarihini php [time()](http://us2.php.net/manual/en/function.time.php) formatında çeker. (Örnek: 1383729820)
    
    * * *
    
- lastpost - Siteye giriş yapan kullanıcının son mesaj attığı zamanı php [time()](http://us2.php.net/manual/en/function.time.php) formatında çeker. (Örnek: 1383792830)
    
    * * *
    
- website - Siteye giriş yapan kullanıcının websitesini çeker. (Örnek: http://www.mybb.com)
    
    * * *
    
- icq, msn, aim, yahoo - Siteye giriş yapan kullanıcının icq,msn,aim,yahoo kullanıcı adını çeker. (Örnek: miah)
    
    * * *
    
- birthday - Siteye giriş yapan kullanıcının doğum gününü çeker (Örnek: 1-12-1990 \[gün-ay-yıl\])
    
    * * *
    
- birthdayprivacy - Siteye giriş yapan kullanıcının doğum gününü iznini çeker. (Örnek: all)
    
    * * *
    
- signature - Siteye giriş yapan kullanıcının imzasını çeker. (Örnek: Miah's Signature)
    
    * * *
    
- allownotices - Siteye giriş yapan kullanıcının bildirim ayarlarını çeker.
    
    * * *
    
- invisible - Siteye giriş yapan kullanıcının gizlilik ayarını çeker (1 = Açık, 0 = Kapalı - Örnek: 1)
    
    * * *
    
- receivepms - Siteye giriş yapan kullanıcının aldığı özel mesaj sayısını çeker.(Örnek: 1)
    
    * * *
    
- showsigs, showavatars, showquickreply, showredirect - Siteye giriş yapan kullanıcının kullanıcı ayarlarını çeker. (Örnek: 1)
    
    * * *
    
- referrals - Siteye giriş yapan kullanıcının referans sayısını çeker (Örnek: 2)
    
    * * *
    
- reputation - Siteye giriş yapan kullanıcının rep sayısını çeker(Örnek: 392)
    
    * * *
    
- regip - Siteye giriş yapan kullanıcının kayıt olduğu ip adresini çeker.(Örnek: 127.0.0.1)
    
    * * *
    
- lastip - Siteye giriş yapan kullanıcının en son giriş yaptığı ip adresini çeker.(Örnek: 127.0.0.1)
    
    * * *
    
- timeonline - Siteye giriş yapan kullanıcının toplam aktif olduğu zamanı php [time()](http://us2.php.net/manual/en/function.time.php) formatında çeker. (Örnek: 1383792830)
    
    * * *
    
- totalpms - Siteye giriş yapan kullanıcının toplam özel mesaj sayısını çeker.(Örnek: 42)
    
    * * *
    
- unreadpms - Siteye giriş yapan kullanıcının toplam okunmamış özel mesaj sayısını çeker.(Örnek: 10)
    
    * * *
    
- warningpoints - Siteye giriş yapan kullanıcının toplam uyarı puanını çeker (Örnek: 1)

Versiyon $mybb->version

- Kullanılan mybb versiyonunu çeker.

Kullanıcı Grup Değişkenleri $mybb->usergroup\['xxx'\]

- disporder - Kullanıcı Grubunun görüntülenme sırasını çeker. (Örnek: 0)
    
    * * *
    
- isbannedgroup - Kullanıcı grubunun yasaklı grup olup olmadığını çeker (Örnek: 1)
    
    * * *
    
- canview - Kullanıcı grubunun forumu görme iznini çeker. (Örnek: 1)
    
    * * *
    
- canviewthreads - Kullanıcı grubunun konuları görme iznini çeker. (Örnek: 1)
    
    * * *
    
- canviewprofiles - Kullanıcı grubunun profilleri görme iznini çeker. (Örnek: 1)
    
    * * *
    
- candlattachments - Kullanıcı grubunun eklentileri görme iznini çeker. (Örnek: 1)
    
    * * *
    
- canpostthreads - Kullanıcı grubunun konu açma iznini çeker. (Örnek: 1)
    
    * * *
    
- canpostreplys - Kullanıcı grubunun yorum yazma iznini çeker. (Örnek: 1)
    
    * * *
    
- canpostattachments -Kullanıcı grubunun eklenti ekleme iznini çeker. (Örnek: 1)
    
    * * *
    
- canratethreads - Kullanıcı grubunun konu oylama iznini çeker (Örnek: 1)

Devamı Gelecektir.Nasıl Kullanılacağını ileriki günlerde videolu ders olarak anlatacağım.
