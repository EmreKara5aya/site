---
title: "OpenAI Agent Builder Nedir? Node Yapısını Tanıyalım"
description: "OpenAI’nin yeni aracı Agent Builder ile node tabanlı yapay zekâ iş akışlarının nasıl oluşturulduğunu, temel node türlerini ve sistemin çalışma mantığını adım adım anlatıyorum."
date: 2025-10-19
pubDate: 2025-10-19
series: 'Agent Builder'
categories: 
  - "yapay-zeka"
  - "nasil-yapilir"
tags:
  - "openai"
  - "agent-builder"
  - "workflow"
  - "node"
  - "mcp"
  - "guardrails"
  - "no-code"
  - "automation"
  - "ai-tools"
coverImage:
  src: ./images/agent-builder-series-cover.png
  alt: "OpenAI Agent Builder Nedir? Node Yapısını Tanıyalım kapak görseli"
slug: "openai-agent-builder-nedir-node-yapisini-taniyalim"
---


OpenAI, geçtiğimiz haftalarda *Agent Builder* adlı yeni aracını duyurdu. Bu araç ile yapay zekâ tabanlı iş akışlarını görsel olarak tasarlamayı kolaylaştırıyor.  Yani artık sadece kod yazarak değil **node (düğüm)** tabanlı bir sistemle kendi **AI ajanlarımızı** oluşturabiliyoruz.

Bu yazıda Agent Builder’ın ne olduğunu, temel node yapısını anlatacağım. Eğer süreci görsel olarak da takip etmek istersen, YouTube’daki videoda adım adım nasıl yaptığımı [buradan izleyebilirsin](https://youtu.be/76F8u3mK-Aw).  

---

## Agent Builder’a Giriş

Agent Builder, OpenAI’nin yeni geliştirdiği **görsel arayüzlü bir araçtır**.  Kullanıcıların kendi ajanlarını (AI agents) oluşturmasına, veri akışlarını tanımlamasına ve bu akışları test etmesine olanak tanır.  Bir nevi “yapay zekâ için görsel bir programlama ortamı” diyebiliriz.

Karmaşık kod blokları yerine, birbirine bağlanan **node’lar (düğümler)** üzerinden adım adım işlem kurulur. Her bir node, sürecin belirli bir aşamasını temsil eder; bu sayede bir workflow (iş akışı) mantığı içinde ajan davranışlarını görsel olarak tasarlayabilirsin.

Agent Builder, aynı zamanda **sürükle-bırak (drag & drop)** yöntemiyle node eklemeyi destekler.
Her adımda veri girişlerini (input) ve çıkışlarını (output) tanımlayabilir, hatta **canlı verilerle (live data)** test çalıştırmaları yapabilirsin. Hazırladığın workflow’u ister kendi sitene **ChatKit** ile gömebilir, ister **SDK kodunu indirip** doğrudan kendi sisteminde çalıştırabilirsin.

Şu anda beta aşamasında olmasına rağmen Agent Builder, OpenAI’nin mevcut altyapısı üzerinde sorunsuz biçimde çalışıyor.  Bu sayede geliştiriciler, tanıdık araçları kullanarak dakikalar içinde kendi workflow’larını oluşturabiliyor; teknik bilgisi az kullanıcılar ise karmaşık kod yapılarıyla uğraşmadan denemeler yapabiliyor.

---
## Agent Builder vs n8n: Temel Farklar

İki araç da benzer bir “sürükle-bırak” akış mantığıyla çalışıyor ancak **odak noktaları farklı**. **Agent Builder**, yapay zekâ ajanlarını (LLM akışlarını) görsel olarak tasarlamaya imkan tanırken; **n8n** ise farklı servisleri birbirine bağlayarak **genel amaçlı otomasyon ve entegrasyon** çözümleri üretmeye odaklanıyor.

İki araç arasındaki farkları daha net görmek için aşağıdaki tabloyu hazırladım.


| Kriter | **Agent Builder (OpenAI)** | **n8n** |
|---|---|---|
| Açık kaynak | ❌ Kapalı | ✅ Açık kaynak (fair-code) |
| Barındırma | Sadece **OpenAI Cloud** | **Cloud** ve **Self-host** (Docker) |
| Odak | LLM/ajan akışları | Genel otomasyon ve entegrasyon |
| Model Desteği | Yalnızca **OpenAI modelleri** | **Birden fazla sağlayıcı** (OpenAI, Anthropic, Gemini, vs.) |
| Esneklik/Eklenti | SDK & ChatKit (OpenAI ekosistemiyle sınırlı) | Geniş node/entegrasyon ekosistemi |
| Tetikleyiciler | Manuel veya ChatKit çağrısı | **Webhook, cron, queue, trigger** seçenekleri |
| Ücret | OpenAI kullanım bazlı | Self-host ücretsiz, Cloud abonelik |
| Topluluk ve Dokümantasyon | Henüz sınırlı (beta) | Geniş topluluk ve dokümantasyon desteği |



## Agent Builder Nasıl Çalışır?

Agent Builder, temelde **görsel bir workflow (iş akışı)** yaklaşımıyla çalışır. Yani bir görevi gerçekleştirmek için satır satır kod yazmak yerine, birbirine bağlanan **node’lar (düğümler)** üzerinden işlem adımlarını oluşturulur. Her node belirli bir işlevi üstlenir. Bu node’lar bir zincir gibi birbirine bağlandığında ortaya çalışan bir sistem çıkar. Bu yapı, hem teknik kullanıcılar hem de kod yazmayı tercih etmeyenler için **süreci görselleştirerek** yapay zekâ akışlarını daha anlaşılır ve yönetilebilir hale getirir.

----------

###  Arayüzün Temel Yapısı

Agent Builder’ın arayüzü oldukça sade ve kullanışlıdır:

-   Sol tarafta **node listesi** (ekleyebileceğin işlem adımları)
-   Ortada **çalışma alanı (canvas)**
-   Sağda ise seçilen node’un **özellik paneli** bulunur.

Node’ları sürükleyip bırakarak workflow oluşturulur. Her node’un bir **giriş (input)** ve **çıkış (output)** noktası vardır. Bu noktalar arasında bağlantı kurarak verinin akış yönünü belirlenir.

----------

### Node’lar Arasındaki Akış

Node’lar arasında kurulan bağlantılar verinin **akış yolunu** temsil eder. Bir node’un çıktısı diğer node’un girdisine bağlandığında **veri aktarımı** gerçekleşir. Bu bağlantı sistemi Agent Builder’ın kalbidir:  Veri bu hatlar üzerinden geçer, dönüştürülür ve işlenir.
Örneğin:  `Start → Agent`
Bu temel zincir Agent Builder’daki en basit akış yapısını gösterir. Start node süreci başlatır, My Agent ise girdiyi işleyip sonucu üretir. Daha karmaşık projelerde bu akışa ek adımlar veya araçlar (tools) eklenebilir.

---
### Workflow Mantığı

Workflow, birbirine bağlı node’lardan oluşan **tam bir işlem hattıdır**. Akış, **Start Node** ile başlar; veri Agent tarafından işlenir ve tanımlanan araçlar (tools) üzerinden yönlendirilir.
Her workflow, belirli bir görevi yerine getirecek şekilde tasarlanır — örneğin:
- Belirli girdilere göre yanıt oluşturmak
- Veriyi dönüştürmek veya özetlemek
- Farklı araçlarla işlem adımlarını otomatikleştirmek

Bu yapı sayesinde karmaşık görevleri küçük, yönetilebilir adımlara bölebilirsin.

---

## Node Yapısını Tanıyalım

Agent Builder’daki **node sistemi** tüm workflow’un temelini oluşturur. Her node belirli bir işlevi yerine getirir ve bir araya geldiklerinde işlem akışının (workflow) tamamını oluştururlar. Bu yapı, karmaşık görevleri basit ve yönetilebilir adımlara bölmeyi sağlar.

Aşağıda Agent Builder’da bulunan farklı node türlerini ve her birinin workflow içindeki görevini tek tek inceleyebilirsin.  

---


### Start Node Nedir?


**Start Node**, bir workflow’un başlangıç noktasıdır. Bu node, kullanıcının verdiği girdiyi işleme akışına ekleyerek süreci başlatır.

Start Node, özellikle sohbet tabanlı (chat) workflow’larda iki temel iş yapar:
1.  **Kullanıcı girdisini konuşma geçmişine (conversation history)** ekler.
2.  Bu girdinin metin içeriğini temsil eden bir değişken olan **`input_as_text`** değerini sağlar.
    
Tüm chat tipi Start Node’larda `input_as_text` adlı bu değişken varsayılan olarak bulunur.  
İstersen workflow içinde **ek durum değişkenleri (state variables)** de tanımlayarak akış boyunca bu verileri kullanabilirsin.

Kısaca **Start Node** kullanıcının sistemle kurduğu ilk etkileşimi yakalar.

----------

### Agent Node Nedir?

**Agent Node**, workflow’un temel işlem merkezidir. Burada ajan davranışını tanımlar, kullanılacak modeli seçer, araçları (tools) eklersin ve gerekirse değerlendirmeler (evaluations) bağlarsın.

Agent Node’da şunları yapabilirsin:

1.  **Talimatları (instructions)** ve **model yapılandırmasını (model configuration)** belirlemek
2.  Gerekirse **araçlar (tools)** veya **eylemler (actions)** eklemek
3.  Önceki adımlardan gelen veriyi **bağlam (context)** olarak kullanmak
4.  Çıktıları yönlendirmek veya bir sonraki node’a aktarmak.
    
Birden fazla Agent Node tanımlayabilirsin; her biri farklı görevlerde uzmanlaşabilir. Örneğin:

-   Bir ajan, kullanıcının sorgusunu daha spesifik hâle getirmek için yeniden yazar
-   Başka bir ajan sorguyu **Q&A** veya **bilgi arama (fact-finding)** olarak sınıflandırır
-   Diğer bir ajan ise her tür soruya uygun yanıtı üretir.
    
   Her Agent Node kendi **kapsamı (scope)** içinde tanımlanmalıdır; yani her birinin görevi net olmalı.  Bu sayede karmaşık akışlarda çok sayıda ajanı birlikte kullanmak mümkündür.
  
Kısaca  **Agent Node**, workflow’un **işlem merkezidir** — model talimatlarını, araçları ve bağlamı bir araya getirerek girdiyi işler ve yanıtı üretir.

---
### Note Node Nedir?

**Note Node** bir workflow üzerine **yorum veya açıklama eklemek** için kullanılır. Diğer node’lardan farklı olarak, akış içinde herhangi bir işlem yapmaz veya veri iletmez.  Yalnızca senin ya da ekibinin workflow’u daha kolay anlaması için **notlar, hatırlatmalar veya açıklamalar** eklemeni sağlar.

Kısaca **Note Node**, işlem yapmaz; sadece açıklama eklemeni sağlayan bir “yorum kutusu” gibidir. Geniş veya karmaşık workflow’larda yapının amacını veya belirli adımların nedenini belirtmek için oldukça kullanışlıdır.

---

### File Search Node Nedir?

**File Search Node** OpenAI platformunda oluşturduğun **vektör depolarından (vector store)** veri almak için kullanılır. Bu node, belirtilen **vektör deposu kimliğini (vector store ID)** kullanarak arama yapar ve modele “hangi bilgiyi araması gerektiğini” belirten bir sorgu (query) eklemeni sağlar. Workflow içinde önceki adımlardan gelen verileri de **değişkenler (variables)** aracılığıyla sorguya dahil edebilirsin.  Böylece, önceki node’ların çıktısını kullanarak dinamik bir dosya arama süreci oluşturmak mümkündür.

**Not:**  File Search Node yalnızca OpenAI platformu üzerinde barındırılan **vektör depolarında** çalışır. Kendi sunucunda veya harici bir depolama alanında arama yapmak istiyorsan, bunun yerine **MCP (Model Context Protocol)** kullanman gerekir.  Ayrıca, vektör depolarının nasıl oluşturulacağı ve hangi dosya türlerinin desteklendiği hakkında daha fazla bilgi için [File Search dokümantasyonuna](https://platform.openai.com/docs/guides/file-search) göz atabilirsin.

---
### Guardrails Node Nedir?

**Guardrails Node** workflow içinde **istenmeyen veya riskli girdileri ve çıktıları denetlemek** için kullanılır. Kişisel veriler (PII), jailbreak girişimleri, halüsinasyonlar veya yanlış kullanım gibi durumları tespit etmeye yarayan bir **kontrol mekanizması (input/output monitor)** olarak çalışır.

Varsayılan olarak **geçti/kal (pass/fail)** mantığıyla çalışırlar.  Yani Guardrails, önceki bir node’un çıktısını test eder ve belirlediğin koşula göre akışın nasıl devam edeceğini sen belirlersin.

Bir Guardrails kontrolü başarısız olduğunda, genellikle iki tercih vardır:

-   Workflow’u tamamen sonlandırmak,
-   Ya da bir önceki adıma dönüp güvenli kullanım hatırlatması yapmak.
    
Kısaca **Guardrails**, workflow’un güvenlik katmanıdır. Ajanın veya modelin, tanımladığın sınırların dışına çıkmasını engelleyerek güvenli ve tutarlı sonuçlar üretmesini sağlar.

---
### MCP Node Nedir?

**MCP (Model Context Protocol) Node**,workflow içinde **üçüncü taraf araçlar ve servislerle etkileşim kurmak** için kullanılır.  OpenAI’nin kendi **bağlayıcıları (connectors)** ya da dış sunucular üzerinden farklı servislerle bağlantı kurmanı sağlar.  İstersen kendi sunucunu da ekleyerek özel bir MCP bağlantısı tanımlayabilirsin.

MCP Node, özellikle başka bir uygulamadaki veriye erişmen veya arama yapman gerektiğinde kullanışlıdır.  
Örneğin **Gmail**, **Google Drive**, **Google Takvim**, **Dropbox**,  veya **Zapier** gibi servislerden veri okumak, arama yapmak ya da işlem başlatmak için kullanılabilir.

---
### If/Else Node Nedir?

**If/Else Node** workflow içinde **koşullu mantık (conditional logic)** eklemeni sağlar. Yani belirli bir koşul gerçekleştiğinde farklı bir yolu izleyebilir, gerçekleşmediğinde alternatif bir akış tanımlayabilirsin.

Bu node, **Common Expression Language (CEL)** kullanarak özel ifadeler (custom expressions) oluşturmanı sağlar. Bu sayede gelen veriye veya önceki node’ların çıktısına göre akışı dinamik olarak yönlendirebilirsin.

Örneğin:
-   Eğer bir Agent, girdiyi **Q&A (soru-cevap)** olarak sınıflandırdıysa, sorguyu doğrudan **Q&A Agent**’a yönlendir.
-   Eğer girdiyi **açık uçlu bir sorgu** olarak tanımladıysa, ilgili bilgileri bulabilecek **fact-finding Agent**’a yönlendir.
-   Bu koşullardan hiçbiri sağlanmıyorsa, workflow’u sonlandır.

Kısaca **If/Else Node**, akışa karar verme kabiliyeti kazandırır.  Böylece Agent Builder içinde veriye göre dallanan, daha akıllı ve esnek workflow’lar oluşturabilirsin.

---
### While Node Nedir?

**While Node** workflow’a **döngü mantığı (looping logic)** eklemeni sağlar. Belirli bir koşul doğru olduğu sürece aynı adımları tekrar etmene olanak tanır. Bu node, **Common Expression Language (CEL)** kullanarak özel ifadeler (custom expressions) tanımlamanı destekler.

Genellikle bir koşulun hâlâ geçerli olup olmadığını kontrol etmek için kullanılır.  Koşul doğruysa akış aynı adımı yeniden çalıştırır; yanlışsa döngüden çıkar ve workflow’un bir sonraki adımına geçer.

Örneğin:
-   Bir araçtan veri çekerken belirli bir **yanıt koşulu** sağlanana kadar sorguyu tekrar etmek
-   Bir işlemin **tamamlanma durumunu (status)** periyodik olarak kontrol etmek
-   Ya da belirli bir **değişkenin (ör. sayım veya hata değeri)** belirlenen eşiğe ulaşmasını beklemek için kullanılabilir.

Kısaca **While Node**, workflow’a tekrarlama (loop) yeteneği kazandırır.  Böylece koşullar üzerinden döngü kurabilir ve süreçleri otomatik şekilde devam ettirebilirsin.

---
### Human Approval Node Nedir? 

**Human Approval Node** workflow içinde **insan onayı (human review)** gerektiren adımlar eklemene olanak tanır.  Bu node, özellikle ajanların insan adına işlem yaptığı veya dış sistemlere veri gönderdiği durumlarda, sürecin **kullanıcı onayıyla devam etmesini** sağlar.

Genellikle ajanların oluşturduğu içeriklerin veya aksiyonların **gözden geçirilmesi (review)** için kullanılır. Örneğin bir ajan senin adına bir e-posta taslağı oluşturduğunda, bu node devreye girerek kullanıcıya “Bu e-postayı göndermemi ister misin?” şeklinde bir onay isteği gösterebilir. Onay verilirse workflow bir sonraki adıma — örneğin **Gmail’e bağlanan bir MCP Node** — geçer; onay verilmezse işlem durdurulur.

 Kısaca **Human Approval Node** workflow’a insan kontrolü ekler.  Böylece ajanların yaptığı işlemler yayına alınmadan önce kullanıcı tarafından doğrulanır ve hatalı ya da istenmeyen eylemlerin önüne geçilmiş olur.

---
### Transform Node Nedir?

**Transform Node** workflow içinde **veri dönüştürme (data transformation)** işlemlerini gerçekleştirmek için kullanılır.  Bir node’un çıktısını başka bir biçime dönüştürmene veya belirli bir şemaya (schema) uygun hale getirmeni sağlar.

Örneğin, bir node’dan **nesne (object)** tipi veri alıp onu **dizi (array)** formatına çevirebilirsin. Bu özellikle ajanın veya modelin çıktısının **diğer node’lar tarafından okunabilir ve anlaşılabilir** olması gerektiği durumlarda oldukça kullanışlıdır.

 Kısaca **Transform Node** veriyi yeniden şekillendirir. Böylece workflow’un farklı aşamalarında veri tipi ve yapı uyumu korunur.

---

### Set State Node Nedir?

**Set State Node** workflow genelinde kullanılacak **global değişkenleri (global variables)** tanımlamak için kullanılır.  Bir ajan bir girdiyi işleyip yeni bir çıktı ürettiğinde bu çıktıyı workflow’un geri kalanında tekrar kullanmak isteyebilirsin.  Set State Node sayesinde bu değeri **kalıcı bir değişken** olarak tanımlayabilir ve sonraki adımlarda bu değişkeni çağırabilirsin.

Örneğin:

-   Bir Agent Node kullanıcının şehir bilgisini çıkarttıysa,
-   Bu bilgiyi `city_name` adlı bir global değişken olarak kaydedebilirsin.
-   Workflow’un ilerleyen adımlarında bu değişkeni doğrudan kullanarak sorgular veya işlemler yapabilirsin.
 
 Kısaca **Set State Node**,workflow’un belleği gibidir. Değerleri global değişkenler olarak saklar ve tüm akış boyunca kullanılabilir hale getirir.

---

## Agent Builder Kullanmanın Avantajları

Agent Builder, yalnızca yapay zekâ modellerini çalıştırmak için değil, **bunları anlamlı iş akışlarına dönüştürmek** için geliştirilmiş bir araçtır.  Görsel, modüler ve etkileşimli yapısı sayesinde hem geliştiriciler hem de teknik bilgisi az kullanıcılar için büyük kolaylık sağlar.

Agent Builder 'in kullanmanın öne çıkan avantajları;

-   **Kod yazmadan akış oluşturma:** Karmaşık yapay zekâ süreçlerini node’lar aracılığıyla kolayca kurgulayabilirsin.
-   **Görsel arayüz:** Sürükle-bırak yöntemiyle işlem adımlarını takip etmek hem hızlı hem sezgisel.
-   **Hızlı prototipleme:** Fikirlerini dakikalar içinde çalışır bir akışa dönüştürebilirsin.
-   **Modüler yapı:** Node sistemi sayesinde akışlarını küçük parçalar hâlinde test edebilir, gerektiğinde yeniden düzenleyebilirsin.
-   **Gerçek zamanlı test imkânı:**  Her adımın çıktısını anında görüp düzenleyebilirsin.
-   **OpenAI ekosistemiyle uyum:** ChatGPT, MCP ve gelecekteki OpenAI araçlarıyla entegre çalışır.

Kısaca **Agent Builder** yapay zekâ tabanlı çözümler geliştirirken hem hız hem de esneklik kazandıran bir görsel çalışma alanıdır.

---

## Sonuç ve Bir Sonraki Adım

Bu yazıda OpenAI’nin yeni aracı **Agent Builder**’ı yakından tanıdık.  Node tabanlı yapısı, görsel arayüzü ve esnek workflow sistemi sayesinde karmaşık yapay zekâ görevlerinin nasıl adım adım inşa edilebileceğini gördük. Ayrıca her bir node’un görevini inceleyerek Agent Builder’ın temellerini anlamış olduk.

Bu ilk bölüm, serinin başlangıç noktasını oluşturuyor.  Bir sonraki yazıda bu bilgileri kullanarak **basit bir sohbet ajanı (chat agent)** oluşturacak, ardından bu ajanı **hava durumu sorgusu** gibi gerçek bir senaryoya dönüştüreceğiz.

📺 Videolu anlatımı izlemek istersen YouTube kanalımda bu bölümün tam halini bulabilirsin.
👉 [Agent Builder Nedir? (1. Bölüm)](https://youtu.be/76F8u3mK-Aw)

