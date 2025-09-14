---
title: "Corona(Covid-19) İstatistik Ve Vaka Api"
date: 2020-03-31
categories: 
  - "kodlama"
  - "nasil-yapilir"
  - "webmaster"
tags: 
  - "api"
  - "corona"
  - "covid-19"
  - "cumhurbaskanligi"
  - "istatistik"
  - "vaka"
coverImage:
  src: ./images/corona-virusu-dha_16_9_1585554356.jpg
  alt: "Corona(Covid-19) İstatistik Ve Vaka Api"
slug: "coronacovid-19-istatistik-ve-vaka-api"
---

Merhaba

Bulaşıcı hastalık Korona virüs yani Covid-19 hakkında size Cumhurbaşkanlığı **Covid-19 apilerini** paylaşmak istedim.

<!--more-->

## Covid-19 Toplam Vaka Api

Covid-19 toplam vaka, iyileşen ve ölüm sayılarına ulaşmak için `https://corona.cbddo.gov.tr/Home/GetTotalData` adresini kullanabilirsiniz. Gelen json dosyasında;

- confirmedCount Covid-19 doğrulanmış toplam vaka sayısını
- deathCount Covid-19 doğrulanmış toplam ölüm sayısını
- recovryCount Covid-19 doğrulanmış toplam iyileşme sayısını gösterir.

## Covid-19 Ülkelere Göre Vaka Api

Covid-19 hastalığınının ülkelere göre vaka sayılarına ulaşmak için `https://corona.cbddo.gov.tr/Home/GetTotalData2` adresini kullanabilirsiniz. Gelen json dosyasında data elemanı altında her ülkeye ait istatistikler bulunmaktadır. Bunlar;

- name bölümünde Ülke ismi
- confirmedCount Covid-19 doğrulanmış toplam vaka sayısını
- deathCount Covid-19 doğrulanmış toplam ölüm sayısını
- recovryCount Covid-19 doğrulanmış toplam iyileşme sayısını gösterir.

## Covid-19 Ülkelere Göre Geçmiş Vaka Analiz Api

Covid-19 hastalığının seçtiğiniz ülkede seçtiğiniz tarih aralıklarında vaka sayılarına ulaşmak için `https://corona.cbddo.gov.tr/Home/HistoryData?name=Turkey&startDate=10/01/2020&endDate=30/03/2020` adresini kullanabilirsiniz. Burada dikkat etmeniz gereken;

- Ülke adını ingilizce girmeniz
- startDate ve endDate bölümlerine istediğiniz tarihleri girmeniz lazım.

Gelen json dosyasında;

- Dizin adınız verinin verildiği tarihi
- confirmed Covid-19 doğrulanmış toplam vaka sayısını
- Death Covid-19 doğrulanmış toplam ölüm sayısını
- Recovered Covid-19 doğrulanmış toplam iyileşme sayısını gösterir.

Sorularınızı yorum olarak sorabilirsiniz.
