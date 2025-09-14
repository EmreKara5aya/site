---
title: "Mybb Admin Paneli 5 defa Başarısız Giriş Çözümü"
coverImage:
  src: ../../../assets/blog-placeholder-1.jpg
  alt: "Mybb Admin Paneli 5 defa Başarısız Giriş Çözümü"
date: 2014-01-02
categories: 
  - "mybb"
slug: "mybb-admin-paneli"
---

Merhaba Arkadaşlar

Bildiğiniz üzere Mybb admin panelinde güvenlik önlemi olarak 5 defa başarısız giriş yapan kullanıcıya admin panelini kapatıyor<!--more--> ve

> Yönetici hesabınızla, 5 defa başarısız giriş yaptığınız için kilitlenmiştir. Hesabınızı tekrar açmak için gerekli bilgiler e-posta adresinize gönderildi.

hatası verdiriyor.Arkadaşlar bu hatanın çözümü çok basittir.Aşağıda verdiğim kodu mybb kurulu olan veritabanında sql olarak sorgulatırsanız hata çözülecektir.

<script src="https://gist.github.com/EmreKarakaya/8229630.js"></script>

Kodda belirtmek isterim ki en sonda bulunan uid\` = '1' bölümünü kendi üye uidinize göre düzenlemeniz gerekecektir.

Hayırlı Günler
