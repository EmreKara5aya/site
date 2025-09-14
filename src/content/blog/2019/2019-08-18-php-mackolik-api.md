---
title: "Php Mackolik Api"
date: 2019-08-18
categories: 
  - "kodlama"
  - "php"
tags: 
  - "iddia-api"
  - "mackolik-api"
  - "mackolik-json"
  - "mackolik-mac"
  - "mackolik-php-json"
  - "php"
coverImage:
  src: ./images/mackolik-logo_8mlnjr7sh2qo1txrvyog5bbtj.png
  alt: "Php Mackolik Api"
slug: "php-mackolik-api"
---

Php ile Mackolik 'den maç bilgilerini json olarak çeken bir uygulama yazdım.

<!--more-->

## Açıklama

Php ile verilen tarih ve iddia kodu ile istediğiniz maçı Mackolik 'den çekebilirsiniz.

## Kullanım

Aramak istediğiniz maçları tarih (dd/mm/yyyy) ve kod adlı get değişkenlerle arayabilirsiniz.

## Örnek

Örnek olarak 17/09/2019 tarihli ve 139 iddia kodlu Sivasspor - Beşiktaş maçını arayalım.

**Örnek Link:**

```
siteadresi.com/maclar.php?kod=139&tarih=17/08/2019
```

**Örnek Çıktı:**

```
[

    3272578,
    446,
    "Sivasspor",
    3,
    "Beşiktaş",
    4,
    "MS",
    "1-0",
    0,
    0,
    0,
    0,
    3,
    0,
    139,
    {
        "aeleme": 0,
        "e": 0,
        "goal": "https://www.goal.com/tr/galeriler/guenuen-banko-iddaa-kuponlari-bahis-kuponlari-banko-maclar/1/559o1i5wyikc1jj1av5ee4yvq",
        "h1": 0,
        "h2": 0,
        "k1": 0,
        "k2": 0,
        "ogd": 1,
        "tId": 102605
    },
    "21:45",
    1,
    "2.45",
    "3.10",
    "2.15",
    "1.85",
    "1.50",
    1,
    "0.0",
    "0.0",
    "1.0",
    "0.0",
    "0.0",
    "3",
    "0",
    "1",
    "0",
    null,
    "3",
    "17/08/2019",
    [
        1,
        "Türkiye",
        1,
        "Süper Lig",
        54794,
        "2019/2020",
        "",
        0,
        1,
        "SSL",
        0,
        1
    ]

]

```

## Bağış

Bitcoin : 1FBLrjGWye1CjDCgz4486KvkZ2uKNzzqta

## İndir

**[Github](https://github.com/EmreKara5aya/Php-Mackolik-Api)**

Hayırlı Günler.
