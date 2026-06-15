---
title: "Bilge AI Karışıklığı"
description: "TÜBİTAK’ın geliştirdiği yerli büyük dil modeli Bilge’nin tanıtılmasının ardından birçok kullanıcı Bilge AI isimli ticari ürün ile resmi Bilge modelini karıştırdı. Bu yazıda karışıklığın nedenlerini, tasarım benzerliklerini ve Bilge AI’nin teknik altyapısını inceliyorum."
date: 2026-06-14
pubDate: 2026-06-14
tags:
  - "Bilge"
  - "Bilge AI"
  - "TÜBİTAK"
  - "yerli yapay zeka"
  - "büyük dil modeli"
  - "LLM"
  - "yapay-zeka"
  - "OpenAI"
  - "GPT-4o-mini"
  - "wrapper"
categories:
  - "yapay-zeka"
  - "inceleme"
coverImage:
  src: ./images/kapakresim.png
  alt: "Bilge AI ve TÜBİTAK Bilge karışıklığını anlatan kapak görseli"
slug: "bilge-ai-karisikligi"
author: "Emre Karakaya"
toc: true
---

Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır’ın TÜBİTAK’ın geliştirdiği **yerli büyük dil modeli (LLM)** “Bilge” ile yaptığı canlı demo, sosyal medyada geniş yankı uyandırdı. Ancak tanıtımın hemen ardından arama trafiğinin büyük kısmı **Bilge AI**’ya yöneldi.

Videoyu izleyenlerin çoğu girişteki “Bilge” yazısına ve stiline baktığında tanıdık bir hisse kapıldı. Aynı koyu tema, yazı rengi, font stili ve genel tasarım dili, bakanın videosundaki intro kısmıyla şaşırtıcı derecede örtüşüyordu. Uygulamanın diğer bölümleri farklı olsa da özellikle bu ilk giriş bölümü ve yazı tasarımı karışıklığa en büyük sebep oldu. TÜBİTAK ise konuya net bir açıklama getirdi: Bu platform, TÜBİTAK’ın geliştirdiği resmi “Bilge” modeli ile hiçbir bağlantısı olmayan ticari bir üründür.

Peki 2025’te domaini alınan, Ocak 2026’dan beri giriş tasarımı neredeyse hiç değişmeden duran bir proje ile resmi yerli LLM nasıl bu kadar benzer bir ilk izlenim yaratabiliyor? Bu yazıda neden herkesin iki projeyi karıştırdığını, tasarım benzerliğinin rolünü ve arkasındaki gerçek modelleri inceleyeceğim.

## TÜBİTAK Bilge Nedir?

TÜBİTAK tarafından geliştirilen **Bilge**, Türkiye’nin **yerli ve milli Türkçe Büyük Dil Modeli (LLM)** projesidir. 

13 Haziran 2026’da Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır’ın canlı demosuyla tanıtıldı. Türkçeyi ve Türk kültürünü daha iyi anlayan, Türkiye’nin ihtiyaçlarına göre eğitilmiş stratejik bir yapay zeka modeli olarak konumlandırılıyor.

**Önemli Uyarı:** Henüz genel kullanıma açık değil. İnternetteki “Bilge” isimli siteler ve uygulamalar TÜBİTAK’ın resmi hizmeti değildir.

## Bilge AI Nedir?

**Bilge AI**, İzmir de yaşayan **Barış Deniz Coşkun** tarafından geliştirilen ticari bir yapay zeka ürünüdür. 

“Türk bilgeliği ile güçlendirilmiş yapay zeka” mottosuyla pazarlanan ürün, 2025 Mayıs’ta domaini alınmış ve Ocak 2026’dan beri mevcut giriş tasarımıyla aktif durumda. Türk kültürü ve bilgelik geleneğinden ilham aldığını vurguluyor ve ücretli paket seçenekleri sunuyor.


## Neden Herkes İki Bilge’yi Karıştırdı?

Aslında karışıklığın birkaç çok net sebebi var:

Videoyu izleyenlerin büyük kısmı “Merhaba Bilge” anında girişteki **“Bilge” yazısına** ve tasarımına bakınca tanıdık bir hisse kapıldı. Aynı koyu tema, yazı rengi, font stili ve genel tasarım dili bakanın videosundaki intro ile şaşırtıcı derecede örtüşüyordu. Uygulamanın diğer kısımları farklı olsa da özellikle bu ilk ekran, insanları “işte bu” diye düşündürdü.

Ayrıca Bilge AI, aylardır “Türk girişimciler tarafından geliştirilen yerli ve milli yapay zeka” şeklinde yoğun reklam yaptığı için, “yerli yapay zeka Bilge” aramalarında Google’da ön sıralara çıkmıştı. Tanıtım videosu yayılır yayılmaz arama trafiğinin büyük kısmı doğrudan bu siteye yöneldi.

Hatta bazı ulusal haber platformları da haberlerinde Bilge AI sitesinin ekran görüntülerini kullandı. Örneğin Donanımhaber ve TRT Haber bu siteden görüntüler paylaştı. TRT Haber bir süre sonra haberini revize ederek ekran görüntülerini kaldırırken, Donanımhaber haberi hâlâ aynı şekilde yayınlıyor.

## Bilge AI Gerçekten Türk Mühendisler Tarafından Mı Geliştirildi?

**Tabiki hayır.** Bilge AI, her ne kadar insanların “yerli ve milli” duygularını sömürmeye çalışsa da, aslında tamamen popüler yabancı yapay zeka platformlarının API hizmetlerini kullanan bir **ara katman (wrapper) uygulamadır**.

Bilge AI şu modelleri kullanıyor:

- Metin sohbetlerinde → **OpenAI** firmasının **GPT-4o-mini** modeli 
-  Resim oluşturmada → **OpenAI** firmasının **DALL·E 3** modeli 
-  Video oluşturmada → **xAI** firmasının **Grok Imagine Video** modeli 
- Sesli sohbetlerde → **Google** firmasının **Gemini 2.5 Flash** (native audio) modeli

Kısaca, kendi büyük dil modelini sıfırdan eğitmiyor. Mevcut güçlü yabancı modelleri ücretli API’lerle arkasına alıp, üzerine Türk kültürü temalı bir arayüz ve pazarlama katmanı ekliyor.
 
## Bilge AI’nin Sistem Promptları

Bilge AI, farklı paketlerde **farklı karakterlere** bürünen bir yapıya sahip: Ücretsiz pakette “Kültigin”, Plus pakette “Kağan”, Premium pakette ise “Umay” isimli kişiliklerle yanıt veriyor. Tabii ki bunların hepsi temelde **GPT-4o-mini** modeline dayanıyor.

### Ana Sistem Prompt Özellikleri:

- **Kimlik ve Pazarlama**: Kendisini “Türkiye’de geliştirilmiş, Türk mühendisler tarafından üretilmiş” bir yapay zeka olarak konumlandırıyor. Kullanıcı doğrudan sorarsa bu bilgiyi veriyor, sorulmadıkça altyapı detaylarını paylaşmıyor. 
-  **Kültürel ve Değerler Odaklı**: Türk kültürü ve bilgelik geleneğini (Yunus Emre, Mevlana gibi) güçlü şekilde ön plana çıkarıyor. Bazı hassas milli ve kültürel konularda belirli bir duruş sergiliyor. Bu konularda yaratıcı cevaplar oluşturulmuş. Zaten birkaçı yaptıkları reklam çalışmalarında gözüküyor.
- **Üslup**: Kuru bir asistan yerine, karakterli, samimi ve saygılı bir “Bilge” tonu hedefliyor. 
- **Gizlilik ve Sınırlamalar**: Sistem promptlarını kullanıcıya göstermemeye çalışıyor. Kullandığı yabancı API’leri gizleyerek “kendi altyapısını kullanıyorum” mesajı veriyor. 
- **Özel Modlar**: Nöbetçi eczane, otel/uçak rezervasyonu, psikolojik destek, araştırma, proje yönetimi gibi 30’dan fazla özel mod ve kişilik içeriyor.

**Özetle:** Promptlar oldukça detaylı ve Türk kullanıcıyı hedef alacak şekilde özenle hazırlanmış. Bu yapı, kullanıcıya güçlü bir “yerli ve milli” hissi verirken, modelin asıl gücünün yabancı API’lerden geldiğini gizleyen bir katman görevi görüyor.

Sistem promptlarını daha detaylı incelemek isterseniz, hazırladığım [GitHub Gist](https://gist.github.com/EmreKara5aya/9878caefc3083369fe6ece9b97bde5d8) linkini buraya bırakıyorum.

## Sonuç

Bilge AI ile TÜBİTAK tarafından geliştirilen Bilge modeli arasındaki karışıklık yalnızca isim benzerliğinden kaynaklanmıyor. Tasarım dili, tanıtım biçimi, arama motoru sonuçları ve kamuoyundaki “yerli yapay zeka” algısı bu karışıklığı daha da büyütmüş durumda.

Bu noktada kullanıcıların dikkat etmesi gereken temel konu bir yapay zeka uygulamasının arayüzü ile arkasındaki teknolojinin aynı şey olmadığıdır. Bir platformun Türkçe konuşması, Türk kültürüne atıfta bulunması veya kendisini yerli olarak tanıtması o platformun kendi büyük dil modelini geliştirdiği anlamına gelmez.

Bilge AI örneği, yapay zeka sektöründe pazarlama dili ile teknik gerçeklik arasındaki farkın ne kadar önemli olduğunu gösteriyor. Bir uygulamanın başarılı veya faydalı olması için kendi modelini geliştirmesi şart değildir. Ancak kullanıcıların hangi teknolojiyi kullandıklarını, hangi firmalara veri gönderdiklerini ve karşılarında gerçekten ne olduğunu açık şekilde bilmeye hakkı vardır.  

TÜBİTAK’ın geliştirdiği Bilge modeli ile Bilge AI isimli ticari ürün birbirinden tamamen farklı yapılardır. Bu nedenle kullanıcıların isim benzerliğinden kaynaklanan karışıklıklara karşı dikkatli olması ve kullandıkları yapay zeka hizmetlerinin teknik altyapısını mümkün olduğunca araştırması gerekir.
