---
title: "Node.js Neden Web Framework Kullanır?"
date: 2016-11-30
categories: 
  - "nodejs"
tags: 
  - "express-nedir"
  - "hapi-nedir"
  - "koa-nedir"
  - "node-js-rest-api"
  - "node-js-restful-api"
  - "node-js-webapp"
coverImage:
  src: ./images/nodejs-logo-webmaster-kitchen.jpg
  alt: "Node.js Neden Web Framework Kullanır?"
slug: "node-js-neden-web-framework-kullanir"
---

Yazının başlığı tam alakalı olmasa da (Bilgili arkadaşlardan gelen önerilere açığım) bugün sizinle beraber "**Node.js Neden Express, Koa, Hapi vb Web Framework Kullanıyor?"** sorusunun yanıtını arayacağız.

<!--more-->

Node.js hakkında ki türkçe dökümanları okuyanlar bilir belirli bir makaleden sonra sizi sorgusuz sualsiz express modülüne geçirmeye çalışırlar. Express nedir ve niçin express kullanmam lazım sorularınız yanıtsız kalır. Bende bu sorular hakkında makale yazmaya karar verdim. Ama öncelikle Express, Koa, Hapi nedir onları tanıyalım.

### Express, Koa, Hapi Nedir ve Ne işe yararlar?

Yukarıda yazılı olan kelimeler aslında biraz Node.js modülüdür. Bu modüller bize kolay yoldan Node.js için WebApps, Rest ve Restful api servislerini aktif hale getirmemizi sağlar. Türkçesi bizim için kolay yoldan http sayfası üretir.

Normalde bunları yukarıda ki modülleri kullanmadan yapmak mümkün ancak hem zaman harcayan, hem fazladan kod yazdıran hem de herhangi bir yoğunluk halinde çökmesi daha basit olması sebebiyle fazla tercih edilmez. Google de Node.js için Webapps, Rest ve Restful api örnek aradığınız zaman karşınıza üstte yazdığım modüller ile ilgili örnekler çıkar. Bu yüzden Node.js ile Webapps, Rest ve Restful api planlarınız varsa yukarıda ki modüllerden birini kullanmanız lazım.

### Peki hangisini kullanacağız?

Bu sorun aslında sizinle ilgili. Her modül birbirinden farklı avantajlara ve dezavantajlara sahip. Bunları incelersek ;

**Express :** Modüller arasında türkçe kaynak ve örnek bulunduran modül Express'tir. Ayrıca Express modüller arasında en fazla kullanıma ve geliştiriciye sahip modül. Bu yüzden gelişmesi kararlı bir şekilde ilerliyor. Yabancı kaynakları araştırma gibi bir huyunuz yoksa Express size göre...

Bu arada belirtmeden geçemeyeceğim Express'in yaratıcısı TJ Holowaychuk 2014 yılında Node.js yi bırakarak Google'in geliştirdiği Go.js'ye geçiş yapmış durumda.

**Koa :** Koa minimalist bir modül.Bu yüzden performans testlerinde öne geçmeyi başarıyor.Yani sade bir modül. Geliştiricileri Koa  ile Web uygulamaları ve Rest,Restful apilerini yazmanın keyifli olacağını belirtiyor.  Ancak hakkında fazla türkçe kaynak yok. Bir kaç yerde ismi geçmiş o kadar. Bu yüzden yabancı kaynaklarla aram yok diyorsanız Koa size göre değil.

**Hapi :** Başlangıçta Express üzerine inşa edilmiş olsa da sonra ki zamanlarda Eran Hammer tarafından tamamen kendi yapısına oturtuldu. Geliştiricisi Eran Hammer konfigürasyon'ın koddan daha önemli olduğunu düşünüyor. Hakkında yazılan kaynak sayısı diğer iki modülden daha az. Ancak Hapi bazı büyük şirketler tarafından kullanıyor, test ediliyor ve geliştiriliyor.

Üç modülü kendi açımdan işinize yaramayacak ve kafanızı karıştıracak teknik bilgiler olmadan yorumlamaya çalıştım. Yazımı okuyan arkadaşlar da fikirlerini yazarlarsa acemi arkadaşlarımız için faydalı bir kaynak oluşturabiliriz.

Hayırlı Günler
