---
title: "Manjaro Saat Ayarı Yapmak"
date: 2019-04-19
categories: 
  - "linux"
tags: 
  - "linux-saat-ayari"
  - "linux-saat-dilimi"
  - "manjaro"
  - "manjaro-saat-dilimi"
  - "saat-ayari"
  - "saat-dilimi-degistirmek"
coverImage:
  src: ./images/f81d6e84a65e3da705b436a193a7363eee8a70da_2_690x487.png
  alt: "Manjaro Saat Ayarı Yapmak"
slug: "manjaro-saat-ayari-yapmak"
---

Merhaba Arkadaşlar

Manjaro kurulumu yaptığım zaman saat ayarlarımın doğru olmadığını fark ettim. Bu konu hakkında Google de araştırma yaptığım vakit herhangi bir türkçe kaynak olmadığını gördüm. Bu yüzden size bu türkçe kaynağı yazmayı karar verdim.İşte Manjaro Saat Ayarı Yapmanın yolları ;

<!--more-->

## Bios Saatini Güncelleyerek

Manjaro, Windows , Ubuntu vb. sistemler bilgisayara kurulurken herhangi bir ayar belirtmemişseniz bios saatine göre kurulumlarını yaparlar. Sorunun çözümü için Bios saatinizi direk güncelleyebilirsiniz. Eğer Bios saatini nasıl güncelleyeceğinizi bilmiyorsanız diğer adımı yaptıktan sonra

`sudo hwclock -w`

kodunu girerseniz bios saatini doğru bir şekilde Manjaro saatine günceller.

## Ağ Üzerinden Saat Senkronizasyonu Yapmak(Network Time Protocol İle Senkronizasyon)

1. Öncelikle Uç Birimi açın. Aşağıda ki kod ile Ağ üzerinden saati kontrol edin.
    
    `timedatectl status`
    
2. Karşınıza aşağıda ki gibi bir çıktı gelecek
    
    `timedatectl status   Local time: Sal 2019-04-16 06:25:55 +03   Universal time: Sal 2019-04-16 03:25:55 UTC   RTC time: Sal 2019-04-16 03:25:54   Time zone: Europe/Istanbul (+03, +0300)   System clock synchronized: no   NTP service: inactive   RTC in local TZ: no`
    
3. Çıktıda gördüğünüz üzere ağ üzerinden saat eşitlemeye yarayan NTP (Network Time Protocol) devre dışı kaldığı için saatimiz yanlış. Çıktıyı aldıktan sonra aşağıda ki komut ile NTP kurulumu yapalım
    
    `sudo pacman -S ntp`
    
4. Kurulumu yaptıktan sonra Ağ üzerinden saati güncellemek için aşağıda ki kodu giriniz.
    
    `sudo timedatectl set-ntp true`
    
5. Son olarak Saat servisini yeniden başlatalım `sudo systemctl restart systemd-timesyncd.service`
6. Bu adımdan sonra saat güncellemeniz yapılmış olacaktır.
    

### Manjaro Saat Dilimi Değiştirmek

1. İlk olarak aşağıdaki komutu girerek değiştirebileceğimiz saat dilimlerini listeleyin..
    
    `timedatectl list-timezones`
2. Değiştirmek istediğiniz saat dilimini seçin.Ben **Europe/Berlin** saat dilimini seçtim.
3. Aşağıdaki kodu kendi saat diliminize düzenleyip uçbirime giriniz. `timedatectl set-timezone “Europe/Berlin”`
4. Kodu girdikten sonra saat diliminiz değişmiş olacak.
5. Son olarak Saat servisini yeniden başlatalım `sudo systemctl restart systemd-timesyncd.service`

Sorularınızı yorum olarak sorabilirsiniz.

Hayırlı Günler
