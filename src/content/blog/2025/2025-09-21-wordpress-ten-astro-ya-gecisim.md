---
title: "WordPress’ten Astro’ya Geçişim: Neden Bıraktım, Nasıl Taşıdım?"
description: "Yıllarca WordPress üzerinde barındırdığım blogumu Astro’ya taşıdım. Bu süreçteki sorunları, geçiş adımlarını ve elde ettiğim kazanımları paylaştım."
date: 2025-09-21
pubDate: 2025-09-21
categories: 
  - "nasil-yapilir"
tags:
  - "astro"
  - "wordpress"
  - "static-site"
  - "ssg"
  - "ssr"
  - "cloudflare-pages"
  - "seo"
  - "remark42"
  - "migrasyon"
  - "geçiş"
coverImage:
  src: ./images/astrogecis.png
  alt: "WordPress’ten Astro’ya Geçişim kapak görseli"
slug: "wordpress-ten-astro-ya-gecisim"
---

2013 yılında heyecanla açtığım kişisel blogum, yıllar boyunca benim için hem bir not defteri hem de deneyimlerimi paylaştığım küçük bir köşe oldu. Bu yolculuğa WordPress ile başladım; kolay kurulumu, tema ve eklenti çeşitliliği sayesinde ilk yıllarda bana büyük bir özgürlük sağladı. Her ne kadar düzenli bir şekilde içerik üretemesem bile açıldığı günden beri öğrendiğim veya tecrübe ettiğim konuları ve yazılımları blog sayfamda paylaşmaya özen gösteriyordum.

Zamanla hayatın temposu arttı, ilgilerim değişti ve yazı paylaşma aralıkları uzadı. Bazen haftalarca yeni içerikler ekledim, bazen de aylarca — hatta yıllarca — sessizlik oldu. Yine de blog hep varlığını sürdürdü; eski yazılarım hâlâ arama motorlarında karşıma çıkıyor, hatta arada bir “şu yazın işime yaradı” diyen mesajlar ve yorumlar alıyorum. Bu da bana, her ne kadar aktif olmasam da blogun bir şekilde değer üretmeye devam ettiğini gösterdi.

Yıllar geçtikçe fark ettim ki asıl problem yazma isteğim değil, arka plandaki sistemin hantallığıydı. WordPress bana çok şey kattı, ama eklenti uyumsuzlukları, güncellemeler sonrası çıkan sorunlar ve zaman zaman yaşanan yavaşlıklar beni yazıdan uzaklaştırıyordu. Benim ihtiyacım olan şey daha basit, daha hızlı ve daha hafif bir yapıydı. İşte bu noktada yeni bir karar aldım ve blogumu WordPress’ten Astro’ya taşıyarak daha keyifli ve sorunsuz bir yazma sürecine adım attım.

## WordPress'ten Uzaklaşmamın Sebepleri

Başlangıçta Wordpress işimi fazlasıyla görüyordu.Kolay kurulum, bolca tema ve eklenti, neredeyse sınırsız özelleştirme imkânı vardı. Yıllarca bu özgürlükten faydalanıp farklı temalar deneyip tasarımlarla oynadım. Aynı şekilde ihtiyaç duyduğum her işlevi bir eklentiyle çözebildim. Hatta blogumu zaman zaman küçük bir laboratuvar gibi kullanarak yeni teknolojileri deneme fırsatı buldum.

Fakat zamanla bu özgürlük başka bir yüke dönüştü. Kurduğum her yeni eklenti bir diğerini bozabiliyor, temalar güncellendikçe uyumsuzluklar çıkarabiliyordu.Hatta kimi zaman basit bir güncelleme blogun saatlerce kapalı kalmasına sebep oluyordu. İlk başlarda hevesle uğraştığım bu sorunlar, ilerleyen yıllarda can sıkıcı bir hâl almaya başladı.

Üstelik tema ve eklentiler zamanla siteyi giderek yavaşlatmaya başladı. Başlangıçta hızlı açılan sayfalar, yeni eklentilerle doldukça hantallaşıyor; gereksiz kod yükü performansı düşürüyor, kullanıcı deneyimini olumsuz etkiliyordu. Güncellemeler sonrası yaşanan belirsizlikler, hız kaybı ve bakım gerekliliği, yazmaktan çok sorun çözmeye zaman ayırmama neden oldu. Bu noktada anladım ki asıl ihtiyacım olan şey, daha basit, daha hafif ve odaklanabileceğim bir yapıydı.

Tüm bunların yanında bir de sürekli sunucuları kontrol etme zorunluluğu vardı. Blogun yayında olup olmadığını takip etmek, log dosyalarını incelemek ve performans sorunlarını çözmeye çalışmak zamanla ayrı bir angarya haline geldi. Yazı yazmak yerine sanki küçük bir sistem yöneticisi gibi davranmak zorunda kalıyordum.

Örneğin Mayıs ayında kullandığım sunucu firmasının cihazlarının aniden çökmesiyle tüm servisler erişilemez hale geldi ve apar topar yedeklerimle başka bir firmaya geçmek zorunda kaldım. Bu deneyim bana altyapı tarafında yaşanan beklenmedik sorunların, tek başına bile yazma motivasyonunu baltalayabileceğini bir kez daha gösterdi. Bir noktadan sonra yazı yazmaktan çok arka plandaki sorunlarla uğraştığımı fark ettim. Her güncellemede “acaba bu sefer ne bozulacak?” endişesi yaşamak, hız testlerinde blogun yavaşladığını görmek ya da basit bir eklenti hatasıyla saatlerce uğraşmak motivasyonumu ciddi şekilde düşürüyordu. Oysa benim amacım yalnızca tecrübelerimi paylaşmak, öğrendiklerimi not düşmek ve bunları düzenli bir arşive dönüştürmekti. Teknolojiyle uğraşmak güzeldi ama yazının önüne geçmemesi gerekiyordu.

İşte bu farkındalık beni daha basit, daha hızlı ve daha sorunsuz bir yapıya geçmeye yönlendirdi. Artık blogun bakımını düşünmek yerine içerik üretmeye, performans testleriyle uğraşmak yerine yazının keyfine odaklanmak istiyordum. Bu yüzden uzun vadede beni yormayacak, daha hafif bir sistem arayışına girdim ve WordPress’in yerine Astro’nun doğru çözüm olacağına karar verdim.

## Neden Astro?

Geçiş sürecinde yalnızca tek bir seçeneğe odaklanmayıp farklı çözümleri de araştırdım. Blog altyapısını yenilerken elimdeki seçenekler arasında **Ghost, Hugo, Jekyll, Gatsby** ve **Next.js** gibi popüler yazılımlar da vardı. Her biri kendine göre güçlü yönlere sahipti, ancak benim ihtiyaçlarıma tam olarak uymadılar.

- **Ghost**, modern bir arayüz ve yayınlama deneyimi sunuyordu ama arka planda yine bir veritabanı gerektiriyor ve sürekli bakım ihtiyacı doğuruyordu.
- **Hugo**, inanılmaz derecede hızlı bir site üreticisi olarak öne çıkıyordu. Statik sayfaları neredeyse anında oluşturması etkileyiciydi. Ancak tema geliştirme tarafında bana fazla katı geldi; esneklik arayışımı karşılamadı. Ayrıca topluluğun önemli bir kısmının son dönemde Hugo’dan Astro’ya yönelmiş olması, uzun vadeli destek ve yenilikler açısından benim için bir soru işareti oluşturdu.
- **Jekyll**, GitHub Pages ile kolay entegrasyonu sayesinde cazip görünüyordu, ancak Ruby tabanlı olması ve güncel topluluk desteğinin azalması benim için dezavantajdı.
- **Gatsby** ise React tabanlı güçlü bir yapı sunsa da fazla karmaşık bir ekosisteme sahipti; sadece blog yazmak için gereğinden ağır bir tercih olacaktı.
- **Next.js**, React tabanlı güçlü bir framework olarak öne çıkıyordu. Hem SSG hem de SSR desteği ile HTML çıktısı üretebiliyor ve büyük projelerde yaygın şekilde kullanılıyor. Ancak Astro’nun aksine doğrudan Markdown desteği bulunmuyor; bunun için ek kütüphaneler kurmak gerekiyor. Ayrıca içerik yönetimi için genellikle bir headless CMS (örneğin WordPress API) bağlamak tercih ediliyor. Benim amacım WordPress’ten tamamen kurtulmak olduğu için, Next.js bu noktada bana fazladan karmaşıklık getirecekti.

Tüm bu denemelerden sonra, hem sadelik hem de modern özellikleri bir arada sunan **Astro** benim için en uygun seçenek oldu. İçerikleri Markdown dosyalarıyla kolayca yönetebilmek, gerektiğinde React/Vue/Svelte gibi bileşenleri projeye dahil edebilmek bana istediğim esnekliği sağladı. Üstelik Astro, ihtiyaca göre hem **SSG (Static Site Generation)** hem de **SSR (Server Side Rendering)** desteği sunuyor. Bunun yanında, sayfa yüklenirken gereksiz JavaScript çalıştırmaması sayesinde performans ve hız açısından ciddi bir avantaj sağlıyor. Tüm bunlar, Cloudflare Pages ile kusursuz bir şekilde birleşerek dağıtım sürecini tamamen otomatik hale getirdi.

### WordPress ile Astro Arasındaki Temel Farklar

WordPress’in en büyük dezavantajlarından biri, sayfaların kullanıcıya doğrudan HTML olarak değil, her seferinde PHP ve MySQL sorguları üzerinden oluşturularak sunulmasıydı. Bu dinamik yapı, özellikle eklentiler ve temalar arttıkça sayfa açılış sürelerini uzatıyor, performansı düşürüyor ve bakım yükünü artırıyordu. Önbellekleme (cache) eklentileriyle bu sorun kısmen çözülebilse de, sürekli takip gerektiriyor ve her güncellemede yeniden ayar yapmak zorunda kalıyordum.

Astro ise tamamen farklı bir yaklaşım benimsiyor. Sayfalar **build aşamasında statik HTML** olarak üretiliyor ve kullanıcıya en hızlı şekilde ulaştırılıyor. Gerektiğinde SSG veya SSR desteği kullanılabiliyor, ancak varsayılan olarak gereksiz JavaScript çalıştırmaması sayesinde siteler çok daha hafif kalıyor. Bu yaklaşım performansı artırırken bakım yükünü de neredeyse sıfıra indiriyor.

Bununla birlikte, yorum sistemi konusunda WordPress’in bir avantajı vardı: dahili olarak gelen yorum modülü. Kurulumdan sonra her yazının altında otomatik yorum alanı açılabiliyor, eklentilerle kolayca yönetilebiliyordu. Tabii bunun da eksileri vardı: spam saldırıları, veritabanı yükü ve ek güvenlik ihtiyacı doğuruyordu. Örneğin son dönemde eklenti kaynaklı bir hata nedeniyle Cloudflare Turnstile korumasını 1 ay boyunca kullanamadım ve bu süreçte yaklaşık 200 adet spam yorum geldi. Elbette spam yorumlar diğer sistemlerde de karşımıza çıkabilir, ancak WordPress blog dünyasında “Windows” kadar yaygın olduğu için nasıl zararlı yazılımlar öncelikle Windows’u hedef alıyorsa, spam botlarının da ilk desteklediği ve saldırdığı platformlardan biri WordPress oluyor.

Astro’da dahili bir yorum sistemi yok; bunun yerine **Giscus**, **Remark42** veya **Disqus** gibi harici çözümlerden birini entegre etmek gerekiyor. **Giscus**, birkaç satır kod ekleyerek kolayca kurulabiliyor ve tüm yorumları GitHub Discussions üzerinde saklıyor. Ancak Giscus’un sitesinde de belirtildiği gibi, _“giscus hâlâ aktif olarak geliştiriliyor… özellikler zamanla değişebilir veya bozulabilir”_ ifadesi, uzun vadeli sürdürülebilirlik açısından benim için risk oluşturdu. **Disqus** ise ücretsiz hesaplarda reklam gösteriyor, hatta bazı reklamların yetişkin içerikli olabilmesi ve eklediği JavaScript kodlarının siteyi yavaşlatması ciddi bir dezavantaj. Ayrıca kullanıcı gizliliği konusunda da güven vermiyor.

**Remark42** ise kendi sunucunuzda barındırılıyor. Kurulumu biraz daha uğraştırıcı olsa da, verilerin tamamen sizin kontrolünüzde olması, hafif yapısı ve reklamsız olması benim için en uygun çözüm haline geldi. Sonuç olarak ben, **tam kontrol sağlayan ve gizlilik açısından güvenilir** olduğu için Remark42'yi tercih ettim.

Kısacası WordPress bana esneklik sunmuştu ama zamanla hantallık yarattı; Astro ise sadeliği, hız avantajı ve modern mimarisiyle yeniden yazmaya odaklanmamı sağladı.

## Geçiş Süreci

WordPress’ten Astro’ya geçerken adım adım ilerledim. Bu süreci özetlemek gerekirse:

- **İçerik aktarımı** → WordPress’ten tüm yazılarımı ve yorumlarımı **Araçlar → Dışarı Aktar** bölümünden **XML** dosyası olarak aldım. Ardından içerikleri **Markdown (MD)** formatına çevirmek için **WordPress Export to Markdown** aracını kullandım.
- **Astro projesinin kurulumu** → Yeni bir Astro projesi açtım, temel tema yapısını hazırladım ve Tailwind ile özelleştirdim. Tema olarak **stelcodes** tarafından yayınlanan **MultiTerm** temasını tercih ettim.
- **Layout ve bileşenler** → Blog yazıları için ortak bir layout hazırladım, listeleme sayfaları ve sayfalama ekledim.
- **Görseller ve yollar** → WordPress’teki `uploads/` klasöründeki görselleri `public/` klasörüne taşıdım ve içerikteki yolları güncelledim.
- **Yönlendirmeler** → Eski URL yapısını bozmamak için 301 yönlendirmeleri tanımladım.
- **SEO ayarları** → Sitemap, RSS feed ve `robots.txt` dosyalarını yeniden oluşturdum.
- **Etiket ayarları** → Temada ana sayfada etiket listesi bölümü vardı. Varsayılan olarak tüm etiketleri gösteriyordu; ancak bende etiket sayısı fazla olduğu için rastgele 9 etiketi göstermeye karar verdim. Diğer etiketler sitemap dosyamda yer alıyor.
- **OG görselleri** → Tema, her yazı için otomatik olarak Satori kullanarak sosyal kart görselleri üretiyordu. Ancak her build aşamasında bu görsellerin sıfırdan oluşturulması derleme süresini ciddi şekilde uzatıyordu. Bu nedenle yazının görseli daha önce oluşturulmuşsa yeniden üretmemesi için ayarlama yaptım.
- **Dağıtım** → Projeyi GitHub’a yükledim ve Cloudflare Pages üzerinden otomatik build & deploy ayarladım. DNS ve yönlendirme (redirect) ayarlarını da Cloudflare üzerinden yaptım.
- **Yorum sistemi** → Astro’da dahili yorum desteği olmadığı için, 4 GB RAM’li bir sunucuya Remark42 kurarak entegre ettim. Aylık maliyeti KDV dahil yaklaşık 90 TL oldu.

Bu adımların ardından blog yeni altyapısında sorunsuz şekilde yayına geçti.

## Geçişin Ardından

WordPress'ten Astro'ya geçiş süreci bana sadece yeni bir altyapı kazandırmadı, aynı zamanda blog yazma motivasyonumu da geri getirdi. Artık yazı yayınlamak için veritabanını, eklenti güncellemelerini veya sunucunun stabilitesini düşünmek zorunda değilim. Tek yapmam gereken yeni bir Markdown dosyası açıp yazmaya başlamak; gerisini Astro ve Cloudflare Pages otomatik olarak hallediyor.

Bu sadeleşme sayesinde odağımı tekrar yazıya verebildim. Sayfaların daha hızlı açılması, gereksiz JavaScript yükünün olmaması ve SEO ayarlarının kontrolümde olması bana büyük bir rahatlık sağladı. Özellikle build aşamasında statik HTML üretmek, yıllarca yaşadığım performans sorunlarının tamamen ortadan kalkmasına yardımcı oldu. Bunun yanı sıra, blog adresim SEO açısından da daha güçlü hale geldi. Sayfalar daha hızlı yüklendiği için arama motorlarında daha iyi puan almaya başladı ve içeriklerim eskisine kıyasla çok daha hızlı şekilde dizine (index) eklenir hale geldi.

Bu sürecin sonunda gördüm ki, bir blog yazarının en büyük ihtiyacı aslında odaklanabileceği basit bir ortam. Eğer siz de WordPress’te sürekli güncellemeler, eklenti sorunları ve hız problemleriyle boğuşuyorsanız, Astro kesinlikle değerlendirmeniz gereken bir seçenek. Benim için bu geçiş bir “yeniden doğuş” oldu; belki sizin için de yeni bir başlangıcın kapısını aralayabilir.

Bu geçiş süreciyle ilgili sizin deneyimlerinizi de merak ediyorum. Benim gibi WordPress’ten farklı çözümlere yönelmişseniz ya da kendi yolculuğunuzda farklı tecrübeleriniz varsa, yorumlarda paylaşabilirsiniz.

