---
title: "13 Adımda Wordpress de Güvenliği Sağlayın"
date: 2017-09-05
categories: 
  - "nasil-yapilir"
  - "wordpress"
tags: 
  - "13-adimda-wordpress"
  - "webmaster-blog"
  - "wordpress-2stepauth-kurulumu"
  - "wordpress-essiz-dogrulama-anahtari"
  - "wordpress-guvenlik"
  - "wordpress-guvenlik-onlemleri"
  - "wordpress-hata"
  - "wordpress-surum-gizlemek"
  - "wordpress-warez"
  - "wordpress-wp-config-degistirme"
  - "wordpress-wp-login-degistirme"
  - "wordpress-yonetim-paneli"
coverImage:
  src: ./images/wordpress-bg-medblue.png
  alt: "13 Adımda Wordpress de Güvenliği Sağlayın"
slug: "13-adimda-wordpress-de-guvenligi-saglayin"
---

Wordpress dünya da en çok kullanılan blog yazılımı.Ben dahil bir çok **webmaster blog** oluşturmak için wordpress yazılımını kullanıyor. Esnek yapısı sayesinde her türlü yapıya bürünebilmesi kullanım alanını artırıyor. Bu yüzden Wordpress hackerlerin başlıca incelediği, sızdığı ve hacklediği yazılımların başında geliyor.İşte bu yüzden sizinle bugün **13 adımda Wordpress güvenlik önlemi** alacağız.

<!--more-->

## Güncel Wordpress Kullanın

Güncellik en önemli güvenlik önlemidir. Geliştiricler her güncelleme de Wordpress de açık ve bugları kapatır.Ayrıca yeni özellikler de ekler.Bu yüzden sitenizde ki Wordpress' i, temaları, eklentileri her zaman güncel tutun.

## Wordpress de Warez (Korsan) Yazılımlardan Uzak Durun

Wordpress için yapılmış tema ve eklentiler çoğunlukla yurtdışı kaynaklı geliştirildiği için dolar ve avro üzerinden satışa sunuluyor. Ülkemizde de döviz fiyatların artması nedeniyle basit bir Wordpress teması veya eklentisi en az 150 TL 'den başlıyor. Tabi bizim insanımız herşeye para ayırıp Wordpress tema ve eklentiye para ayırmadığı için warez yani korsan kullanıma yöneliyor. Tabi kimse size babasının hayrına en az 150 TL olan eklentileri ve temaları bedavaya vermiyor. Bu warez yazılımların içinde gizledikleri arka kapılar ile

- Sitenize virüs bulaştırıp Google sıralamasını düşürebilirler
- Sitenize sizin haberiniz olmadan link (hacklink) ekleyebilirler ki bu linkler genellikle masum linkler olmuyor. Yani sitenize +18, kumar, uyuşturucu ve spam linkleri ekleyebilirler. Bu da sizin Google sıralamanızı düşürebilir.
- Siteniz de haberiniz olmadan tanıtım yazıları yayınlayabilirler. Yayınladıkları tanıtım yazısı full linklerden oluştuğu için bırakın Google de sıra düşmeyi siteniz gözükürse yarabbi şükür diyebilirsiniz.
- Sitenize 301 yönlendirme,sahte url yapısı veya iframe ekleyebilirler. Bu linkleri çok kolay bir şekilde sitemapınıza ekleyip arama motorlarına indexletebilirler. Bu da sizin Google sıralamanızı düşürür.
- Siteniz de sizden habersiz korsan yazılım barındırıp indirme linklerini korsan forumlarında dağıtabilirler. Bu yüzden DMCA veya telif bildirimi alabilir yazılım sahipleri sitenizi Google arama sonuçlarından sildirebilirler.

Gördüğünüz gibi warez tema ve eklentiler siteniz için tehlike saçmakta. Eğer Wordpress de Güvenlik istiyorsanız Warez yazımlardan uzak durmanız gerekiyor.

## Wordpress de Kullanıcı Adınızı Değiştirin.

Wordpress kurulumda varsayılan olarak admin kullanıcı adı verilir. Tabi ki bunu kurulumda değiştirebilirsiniz ama hatırı sayılır bir kullanıcı kitlesi kullanıcı adı olarak admin kullanıyor. Wordpress de güvenlik istiyorsanız kullanıcı adınızı değiştirmeniz lazım.

### Wordpress de Kullanıcı Adı Nasıl Değiştirilir?

Wordpress de Kullanıcı adınızı değiştirmek için Wordpress blogunuzun bağlı olduğu veritabanını phpmyadmin yardımıyla açın. Aşağıda ki sql sorgusunda YeniKullanıcıadınız bölümüne istediğiniz kullanıcı adını yazıp sql olarak çalıştırın.

``UPDATE `wp_users` SET `user_login` = 'YeniKullanıcıadınız' WHERE `wp_users`.`ID` = 1``

## Wordpress de Karmaşık Şifre Kullanın

Bu adımı gören bazı arkadaşlarımız benim şifrem 123456 değil şifrem güvenli diyebilir. Ancak hackerler brute force programlarında sadece en çok kullanılan şifreleri değil sizin bilgilerinizden oluşan kombinasyonları da deniyorlar. Yani şifreniz doğdunuz yer, sevgilinizin ya da ailenizden birinin adıysa yani herkesin kolayca tahmin edebileceği bir şifre ise çabucak kendinize karmaşık bir şifre seçmeniz lazım.

### Wordpress de Karmaşık Şifre Nasıl Oluşturulur?

Wordpress de karmaşık şifre oluşturmak için Yönetim panelinizden Kullanıcılar **\->** Profiliniz yolunu izleyin. Açılan sayfada Yeni parola bölümünde Parola oluştur butonuna basıp yeni oluşturduğunuz parolayı not edin. Daha sonra Profili güncelle butonuna basıp yeni şifrenizi kullanabilirsiniz.

## Wordpress de 2StepAuth (2 Adımlı Doğrulama) Kullanın

Wordpress blogunuzda her ne kadar admin kullanıcı adından uzak durup karmaşık şifre kullansanız da bilgisayarına bulaşan basit bir keylogger ile şifrenizi basit bir şekilde ele geçirip basitçe yönetim panelinize girebilirler. Bunu engellemek içinse 2StepAuth yani 2 Adımlı Doğrulama kullanacağınız.

2 adımlı doğrulamayı kısaca anlatmak gerekirse hackerler kullanıcı adınızı ve şifrenizi öğrenseler bile giriş yapmaya çalıştıklarında telefonuzda bulunan Google Authenticator veya Authy uygulamasının ürettiği rastgele şifreleri isteyecektir.

### Wordpress de Nasıl 2StepAuth (2 Adımlı Doğrulama) Kullanılır?

Wordpress de 2StepAuth (2 Adımlı Doğrulama) kullanmak için;

1. Google Authenticator eklentisini Yönetim panelinizden indirip yada [**buradan**](https://wordpress.org/plugins/google-authenticator/) indirip yükleyip aktifleştirin.
2. Yönetim panelinizden Kullanıcılar **\->** Profiliniz yolunu izleyin.
3. Açılan sayfada Google Authenticator Settings bölümüne gelip Active bölümünü işaretleyin.Daha sonra Description bölümünde istediğiniz açıklamayı girebilirsiniz.
4. Show/Hide QR code butonuna basıp çıkan Qr kodunu Google Authenticator veya Authy uygulaması ile taratın.
5. Profili güncelle butonuna basarak 2StepAuth (2 Adımlı Doğrulama) yı aktifleştirebilirsiniz.

Yukarıda ki adımları eksiksiz bir şekilde yaptıysanız Yönetim Paneline giriş yaptığınız zaman sizden 2 Adımlı Doğrulama kodunu isteyecektir.

## Wordpress de Eşsiz Doğrulama Anahtarı Kullanın

Bildiğiniz üzere Wordpress bilgisayarınızda belirli cookies (çerezler) depolar. Bu cookiesler sizin kullanıcı adınızı,şifrenizi kısaca giriş bilgilerinizi barındırır.  Ancak bu cookiesler yeteri kadar şifrelenmediği için belirli saldırılara maruz kalıp çalınabiliyor. İşte bu yüzden Wordpress bizim için Eşsiz Doğrulama Anahtarı özelliğini sunuyor. Eşsiz Doğrulama Anahtarı ile cookieslerinizi şifreleyip kırılmasını daha da zorlaştırabilirsiniz.

### Wordpress de Eşsiz Doğrulama Anahtarı Nasıl Kullanılır?

Öncelikle;

1. **[Buradan](https://api.wordpress.org/secret-key/1.1/salt/)** Eşsiz Doğrulama Anahtarınızı oluşturun. Açılan sayfada ki kodlar rastgele kişiye özel oluşturulmaktadır. Bu yüzden herhangi bir değişiklik yapmayınız.
2. Sayfada ki komutları wp-config.php dosyasına ekleyin ve kayıt edin.
3. Kayıt edildikten sonra yönetim panelinden otomatik olarak çıkış yapacaksınız. Yeniden giriş yaptığınız zaman Eşsiz Doğrulama Anahtarınız etkin olacaktır.

## Wordpress de Yönetim Panelinden Dosya Düzenlemeyi Kapatmak

Wordpress de doğru chmod izinleri verdiğiniz zaman size tema dosyalarınızı yönetim panelinde düzenlemenize izin vermektedir. Bu da yönetim panelinize izinsiz girişlerde tema dosyalarınızın çok kolay bir şekilde düzenlenebilir olmasını sağlamakta. Bu yüzden Wordpress de Yönetim Panelinde Dosya Düzenlemeyi kapatmalısınız.

### Wordpress de Yönetim Panelinden Dosya Düzenleme Nasıl Kapatılır?

Wordpress de Yönetim Panelinden Dosya Düzenlemeyi Kapatmak için wp-config.php dosyasını açın ve aşağıda ki kodu ekleyin. `define('DISALLOW_FILE_EDIT', true);`

## Wordpress de Chmod İzin Ayarlarını Yapın

Wordpress blogunuzda chmod ayarlarınız öncelik taşır. Blogunuz da ki klasörlere ve dosyalara doğru chmod izinlerini vermezseniz hosting hesabınıza yetkisiz olarak dosya veya klasör kaydının önüne açmış olursunuz.

Wordpress blogunuzda chmod izinleri;

- Klasörler 755
- Dosyalar 644 olmalıdır.

## Wordpress de Login (Giriş) Hata Mesajlarını Gizleyin

Wordpress de üyeliğinize giriş yaptığınız zaman herhangi bir bilgiyi yanlış girdiğiniz zaman veya sunucu kaynaklı bir hata olduğu zaman ayrıntılı bir hata mesajı ile ifade edilir. Bu mesaj sitenize sızmaya çalışan hackerlerin işine yarayacağı için gizlemeniz gerekmektedir.

### Wordpress de Login (Giriş) Hata Mesajları Nasıl Gizlenir?

Wordpress de Login (Giriş) Hata Mesajlarını gizlemek için aşağıdaki kodu Ftp hesabınızdan wp-includes **\->** functions.php dosyasına ekleyin.

<script src="https://gist.github.com/EmreKara5aya/d86bffd96d60f37b79f6afe3dcd6c314.js"></script>

## Wordpress de Sürümüzü Gizleyin

Wordpress de güvenlik açıkları sürümlere göre depolanır. Örneğin Wordpress 4.7 için açıklar ayrı Wordpress 4.8 için açıklar ayrı bir şekilde listenir ve uygulanır. Hackerler de Wordpress blogunuzu hacklemek için sürüm numaranıza uygun açıkları tarar. Eğer siz wordpress sürümünüzü gizlerseniz hackerleri durdurmayı başarabilirsiniz.

### Wordpress de Sürüm Nasıl Gizlenir?

Wordpress sürümünüzü gizlemek için Ftp hesabınızdan wp-includes **\->** functions.php dosyasını açıp aşağıda ki kodu eklemeniz yeterlidir.

`remove_action(‘wp_head’, ‘wp_generator’);`

## Wordpress de Wp-config.php Dosyasının Yolunu Değiştirin.

Wordpress önemli ayarlarınız ve bilgileriniz wp-config.php dosyasın da saklanır. Bu yüzden blogunuzu hacklemek isteyen hackerlerin ilk hedefi sizin wp-config.php dosyanızı ele geçirmek olacaktır. Bu nedenle wp-config.php dosyasının adını değiştirmeniz gerekmektedir.

### Wordpress de Wp-config.php Dosyasının Yolu Nasıl Değiştirilir?

Wp-config.php adını değiştirmek için ;

1. Wp-config.php dosyasının yeni dizinini ayarlayın. Ben kodlarda örnek olarak yenidizin/wp-config.php gösterdim
2. Aşağıda ki kodu bulun
    
    <script src="https://gist.github.com/EmreKara5aya/46b7d629f029ebf8be44ce08f673a3d3.js"></script>
    
3. Aşağıda ki kodu kendinize göre düzenlendikten sonra yukarıda ki kodun yerine kayıt edin.
    
    <script src="https://gist.github.com/EmreKara5aya/acb13b06273e4f43e410b30bd1b258cb.js"></script>
    

## Wordpress de Wp-login.php Ve Wp-admin İsimlerini Değiştirme

Wordpress de bildiğiniz üzere default olarak giriş sayfası wp-login.php, admin klasörü olarak da wp-admin geçer. Hackerlerde bunu bildiği için sitenize direk bu 2 yoldan giriş yapmaya çalışırlar.  Eğer kullanıcı adınızı ve şifrenizi bilen bir hackerse rahatlıkla blogunuzun yönetim paneline girebilir.

### Wordpress de Wp-login.php Ve Wp-admin İsimlerini Nasıl Değiştirilir?

1. Yönetim panelizden iThemes Security eklentisini yükleyip etkinleştirin.
2. Yan bölümden Security bölümü seçin Security Check bölümünü görüp Close butonuna tıklayın.
3. Üst bölümde All bölümüne tıklayın. Böylece tüm ayarlar görünmüş olacak.
4. Ayarlar göründüğü zaman Hide Backend bölümün de Configure Settings butonuna tıklayın.
5. Açılan bölümde Enable the hide backend feature seçeneğini seçin ve Login Slug bölümünde yeni giriş adresinizi belirleyin.
6. Ayarları tamamladıktan sonra kayıt edin ve wp-login.php veya wp-admin' e ulaşmaya çalıştığınıda 404 hatası alacaksınız.

## Wordpress de Tablo Ön Ekini Değiştirin

Wordpress de tablo ön eki kurulumda wp\_ olarak gelmekte. Tablo ön ekinizi default ayarda bırakmak tehlikeli bir seçenektir. Bu yüzden kendinize özel tablo ön ekiniz olması lazımdır.

### Wordpress de Tablo Ön Eki Nasıl Değiştirilir?

1. Üst adımda yüklediğimiz iThemes Security eklentisini yüklemediyseniz lütfen yükleyiniz.
2. Yan bölümden Security bölümü seçin Security Check bölümünü görüp Close butonuna tıklayın.
3. Üst bölümde All bölümüne tıklayın. Böylece tüm ayarlar görünmüş olacak.
4. Ayarlardan Change Database Table Prefix bölümünde Configure Settings butonuna tıklayın
5. Açılan bölümde Change Prefix bölümünü yes olarak işaretleyip Save butonuna basın. Burada size yeni tablo ön ekinizi verecek. Bunu kopyalayın
6. Wp-config.php dosyasını açın ve aşağıda ki kodu bulup kendinize göre düzenleyip kayıt edin. `$table_prefix = 'wp_';`

Tablo ön ekiniz otomatik olarak değişecektir. Eski tablo ön ekinize dönmek için Change Prefix bölümünü no olarak işaretleyip wp-config.php de $table\_prefix bölümünü tekrardan düzenlemeniz yeterlidir.

## Final

Size bu yazımda 13 adımda nasıl **Wordpress Güvenlik Önlemleri** alacağınızı anlattım. Anlattığım güvenlik önlemlerini sizde uygulayarak kaliteli **webmaster blog** sahibi olabilirsiniz.

Sorularınızı ve eklemek istediğiniz adımları yorum olarak gönderebilirsiniz.

Hayırlı Günler
