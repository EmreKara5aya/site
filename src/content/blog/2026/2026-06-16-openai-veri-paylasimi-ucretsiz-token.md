---
title: "OpenAI Veri Paylaşımı ile Günlük Milyonlarca Ücretsiz Token"
description: "OpenAI Veri Paylaşımı Programı sayesinde uygun API kullanıcıları girdi ve çıktıları OpenAI ile paylaşmayı kabul ederek günlük milyonlarca ücretsiz token kazanabiliyor. Bu yazıda programın nasıl çalıştığını, nasıl aktif edildiğini ve nelere dikkat edilmesi gerektiğini anlatıyorum."
date: 2026-06-16
pubDate: 2026-06-16
tags:
  - "OpenAI"
  - "OpenAI API"
  - "veri-paylaşımı"
  - "data-sharing"
  - "ücretsiz-token"
  - "token"
  - "API"
  - "yapay-zeka"
  - "maliyet-optimizasyonu"
  - "geliştirici"
categories:
  - "yapay-zeka"
  - "rehber"
coverImage:
  src: ./images/kapak2.png
  alt: "OpenAI veri paylaşımı ve ücretsiz token programını anlatan kapak görseli"
slug: "openai-veri-paylasimi-ucretsiz-token"
author: "Emre Karakaya"
toc: true
---

OpenAI’nin pek bilinmeyen bir programı sayesinde bazı API kullanıcıları günlük milyonlarca ücretsiz token alabiliyor. Tek yapmanız gereken **API girdi ve çıktılarını (inputs ve outputs) OpenAI ile paylaşmayı kabul etmek.**  

Bu program kapsamında uygun organizasyonlar kullandıkları modele bağlı olarak günlük **1 milyon ile 10 milyon arasında complimentary token** elde edebiliyor. Özellikle side project’ler, AI agent’lar, test ortamları ve yüksek hacimli API kullanımları için ciddi bir maliyet avantajı sunuyor.

Ben de bu özelliği birkaç gün önce hesabımda fark edip aktif ettim. Domkap projesinde ve diğer denemelerimde gerçekten de ücretsiz token’ların uygulandığını görebildim. Token tüketimi yüksek olan geliştiriciler için oldukça faydalı bir fırsat.

Bu yazıda OpenAI Veri Paylaşımı Programı’nın nasıl çalıştığını, hesabınızın uygun olup olmadığını nasıl kontrol edeceğinizi, adım adım nasıl aktif edeceğinizi ve dikkat edilmesi gereken önemli noktaları kendi deneyimimle birlikte anlatacağım.

## OpenAI Veri Paylaşımı Programı Nedir?

OpenAI varsayılan olarak API üzerinden gönderilen veri (inputs) ve yanıtları (outputs) model eğitimi için kullanmıyor. Ancak **Veri Paylaşımı (Data Sharing)** programına katılmayı tercih eden organizasyonlar belirli API trafiğini OpenAI ile paylaşabiliyor.

Bu programın mantığı oldukça basit: OpenAI ile paylaştığınız API istekleri ve yanıtları, model kalitesini ölçmek, değerlendirme süreçlerini geliştirmek ve gelecekteki modelleri iyileştirmek amacıyla kullanılabiliyor. Karşılığında ise OpenAI uygun organizasyonlara günlük ücretsiz token (complimentary tokens) tanımlıyor.

Buradaki önemli nokta programın tamamen **isteğe bağlı (opt-in)** olması. Veri paylaşımı siz özelliği etkinleştirmediğiniz sürece devreye girmiyor. Aynı şekilde istediğiniz zaman kapatmanız da mümkün.

Elbette bu sistemin bir karşılığı var. Ücretsiz token kazanırken API trafiğinizin OpenAI tarafından incelenmesine ve model iyileştirmelerinde kullanılmasına izin vermiş oluyorsunuz. Bu nedenle **müşteri verileri, şirket içi hassas bilgiler veya gizli projeler** işleyen uygulamalarda programı kullanmadan önce veri paylaşımı şartlarını dikkatlice değerlendirmeniz gerekiyor.

Buna karşılık; side project’ler, test ortamları, AI agent’lar, kişisel otomasyonlar ve hassas veri içermeyen uygulamalar için oldukça cazip bir fırsat sunuyor. Özellikle yüksek hacimli API kullanımlarında aylık maliyetleri hissedilir seviyede azaltabiliyor.

## Desteklenen Modeller ve Token Limitleri

OpenAI Veri Paylaşımı programı kapsamında verilen ücretsiz token'lar tüm modeller için geçerli değil. Desteklenen modeller iki ayrı gruba ayrılıyor ve her grup kendi günlük token havuzunu kullanıyor. Bu limitler model başına değil grup bazında uygulanıyor.

### Flagship Modeller Grubu (Büyük Modeller)

Bu grup OpenAI’nin en güçlü ve en yetenekli modellerini içeriyor. Günlük ücretsiz token limiti bu grup için uygulanıyor.

Başlıca modeller:

-   GPT-5.5
-   GPT-5 serisi
-   GPT-4.1
-   GPT-4o
-   o1 serisi
-   o3 serisi
-   Codex modellerinin bazı sürümleri

Bu modeller için herkes aynı ücretsiz limite sahip olmuyor. **Tier 3-5**  seviye organizasyonlar günlük **1 milyon token** hakka sahip olurken **Tier 1-2** seviye organizasyonlar ise günlük **250.000 token** hakkına sahip oluyorlar.

### Mini Modeller Grubu (Küçük Modeller)

Bu grup daha düşük maliyetli, daha hızlı ve yüksek hacimli işlemler için tasarlanmış modellerden oluşuyor.

Başlıca modeller:

-   GPT-5 Mini
-   GPT-5 Nano
-   GPT-4.1 Mini
-   GPT-4.1 Nano
-   GPT-4o Mini
-   o1-mini
-   o4-mini
-   Codex Mini modelleri

Bu modeller için herkes aynı ücretsiz limite sahip olmuyor. **Tier 3-5**  seviye organizasyonlar günlük **10 milyon token** hakka sahip olurken **Tier 1-2** seviye organizasyonlar ise günlük **2.5 milyon token** hakkına sahip oluyorlar.
:::note[Not]
Tier OpenAI'nin hesabınıza verdiği kullanım seviyesini ifade eder.
:::
:::important[Önemli]
Kota yalnızca Data Sharing kapsamındaki çağrılar için geçerlidir ve her gün 00:00 UTC'de sıfırlanır. Fine-tuned modeller, fine-tuning işlemleri, eval çalışmaları ve tool use bu programa dahil değildir.
Örneğin GPT-4o Mini ile normal bir API çağrısı yaptığınızda ücretsiz token kotasından yararlanabilirsiniz. Ancak kendi verilerinizle eğittiğiniz bir fine-tuned model kullanıyorsanız, yeni bir fine-tuning işlemi başlatıyorsanız veya modelin web arama gibi araçlarını (tool use) kullanıyorsanız bu kullanım ücretsiz token kotasından düşmez ve normal şekilde ücretlendirilir.
:::

## **OpenAI Veri Paylaşımı Nasıl Aktif Edilir?**

OpenAI Veri Paylaşımı programını etkinleştirmek yalnızca birkaç dakikanızı alıyor.

İlk olarak OpenAI Platform hesabınıza giriş yapın. Ardından **Settings → Organization Settings → Data Controls → Sharing** bölümüne gidin.

İsterseniz ilgili ayara ulaşmak için [buraya tıklayabilirsiniz](https://platform.openai.com/settings/organization/data-controls/sharing).

:::important[Önemli]
OpenAI bu programı tüm organizasyonlara otomatik olarak sunmuyor. Veri paylaşımı seçeneklerini görebilmeniz için hesabınızın programa uygun (eligible) olması ve organizasyonunuzda **pozitif bakiye bulunması** gerekmektedir.
:::

Bu sayfada hesabınız programa uygunsa veri paylaşımı ile ilgili seçenekleri göreceksiniz.

![Data Controls ekranı](https://images.ctfassets.net/j22is2dtoxu1/intercom-img-d8b2ed1a069563680026bcaa/a255ed3578444c867b791a8fed50da9d/AD_4nXclbRGW-AKTPUanHyfwj1VU9_CBJnUqYicusP4l-SNn5HnQCoIo6UCw9CYFq4MabqOXfvOowYwDY1u0X-8uwMPzMF2D8bWOCqJRIIcRKFH3as7Py8P4JPU3L-ma)


Ücretsiz token programından yararlanabilmek için **Share inputs and outputs with OpenAI** seçeneğinin etkinleştirilmesi gerekiyor. Burada isterseniz tüm projeler için aktif edebilir isterseniz sadece belirli bir projeler için aktif edebilirsiniz.

İlgili seçeneği aktif ettikten sonra kısa süre içerisinde organizasyonunuz programa dahil oluyor. Ardından Data Sharing kapsamındaki API çağrılarınız ücretsiz token kotasından yararlanmaya başlıyor. 

## Dikkat Edilmesi Gerekenler

OpenAI Veri Paylaşımı programı ilk bakışta çok cazip görünse de etkinleştirmeden önce bazı kritik noktaları göz önünde bulundurmanızı öneririm.

### Gizlilik ve Veri Güvenliği
En önemli konu **gizlilik**. Bu özelliği açtığınız anda Data Sharing kapsamındaki tüm API çağrılarınızın **girdileri (inputs)** ve **çıktıları (outputs)** OpenAI ile paylaşılıyor. Bu veriler model kalitesini artırmak, değerlendirme yapmak ve gelecekteki modelleri eğitmek için kullanılabiliyor. Bu nedenle müşteri verileri, şirket içi bilgiler veya hassas içerikler işleyen uygulamalarda programı etkinleştirmeden önce veri paylaşımı şartlarını dikkatlice değerlendirmenizi öneririm.

**Benim yaklaşımım:**  
Domkap ve diğer side project’lerimde bu özelliği sadece test ortamlarında ve kesinlikle hassas veri içermeyen akışlarda kullanıyorum. Üretimdeki kritik projelerde ise hâlâ kapalı tutuyorum.

### Her Kullanım Ücretsiz Değil
Ücretsiz token’lar her şeyi kapsamıyor:
- Fine-tuned modeller
- Fine-tuning işlemleri
- Evals (değerlendirme) çalışmaları
- Tool use ve bazı ek özellikler

Bu alanlarda normal ücretlendirme devam ediyor.

### Kota Sınırlamaları

- Limitler **günlük** olarak sıfırlanıyor (00:00 UTC).
- Özellikle **flagship modellerde** (1M kota) yoğun kullanımda kota çabuk bitebiliyor.
- Kota dolduğunda kalan çağrılar normal fiyattan ücretlendiriliyor.

### Özet Tavsiyem

Hassas veri içermeyen side project’ler, kişisel otomasyonlar, AI agent testleri ve öğrenme amaçlı kullanımlar için bu program **gerçekten çok değerli**. Ancak “sadece ücretsiz token alayım” mantığıyla açmadan önce veri paylaşımının ne anlama geldiğini iyi anlamakta fayda var.

Ben şu anki kullanımımda faydasını gördüğüm için memnunum. Fakat her projede ayrı ayrı değerlendirmek gerekiyor.

## Sonuç

OpenAI’nin Veri Paylaşımı Programı özellikle API’yi yoğun kullanan geliştiriciler için gerçekten değerli bir fırsat sunuyor. Uygun organizasyonlar sadece veri paylaşımını etkinleştirerek günlük **1 milyon + 10 milyon token**’lık ücretsiz kotaya erişebiliyor. Bu da test ortamları, AI agent’lar, otomasyonlar ve side project’lerde ciddi bir maliyet avantajı sağlıyor.

Benim kullanımımda da program beklentilerimi karşıladı. Özellikle **mini modeller** tarafındaki günlük 10 milyon token kotası sayesinde Domkap’taki agent testleri, scraper denemeleri ve çeşitli entegrasyon çalışmalarını neredeyse ücretsiz yapabiliyorum. Yeni fikirleri hızlıca test etmek ve projeleri ölçeklendirmek çok daha rahat hale geldi.

Tabii ki her şeyin bir bedeli var. Ücretsiz token karşılığında API girdi ve çıktılarınızı OpenAI ile paylaştığınızı unutmamak gerekiyor. Bu nedenle özelliği açmadan önce projelerinizin veri hassasiyetini mutlaka gözden geçirin.
