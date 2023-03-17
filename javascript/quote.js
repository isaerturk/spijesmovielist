$(document).ready(function () {
  var quotes = {
    dizi: [
      {
        quote:
          "Bütün hatıralarım, bütün hayatım. Her şey silinip gidecek. Ben ne olacağım? Şahsiyetim ne olacak?",
        author: "Şahsiyet",
      },
      {
        quote: "İyi gelen ne varsa hep sensin işte.",
        author: "Behzat Ç.",
      },
      {
        quote:
          "Ne güzel olurdu değil mi? Yanlış bildiğimiz her şeyi unutsak, sadece doğrular kalsa.",
        author: "Şahsiyet",
      },
      {
        quote:
          "Adalet dediğin nefsi müdafaa. İntikam ise geç kalmış bir nefsi müdafaa…",
        author: "Şahsiyet",
      },
      {
        quote:
          "Kardeşim ben senin yılgın bir hoşgörüyle beni benimsemene mi kaldım?",
        author: "Gibi",
      },
      {
        quote:
          "Kimsenin hiçbir şey bilmediği yerde bir insan her şeyi bilebilir",
        author: "Gibi",
      },
      {
        quote:
          "Sadece 10 liramın olması sıfır liramın olmasından daha çok canımı yakıyor. Lütfen beni bu 10 liradan kurtar!",
        author: "Gibi",
      },
      {
        quote:
          "Lan yaşadığımız yetmiyor bir de senden dinliyoruz hayatın acı gerçeklerini..",
        author: "Gibi",
      },
      {
        quote:
          "Gerçeklerin bir kıymeti yok ki. Genel kanı neyse onu yaşıyoruz.",
        author: "Gibi",
      },
      {
        quote:
          "Ya güzel kardeşim bir şeyin tam tersini söyle al sana farklı bakış açısı.",
        author: "Gibi",
      },
      {
        quote: "AYBEN ne lan? Sen IBAN'a 'ayben' mi diyorsun?",
        author: "Gibi",
      },
      {
        quote: "İlkkan ne oldu sana? Birkaç gündür kangal köpeği gibisin.",
        author: "Gibi",
      },
      {
        quote: "Yaşarken anlamadın mı oğlum ne yaşadığını ya!",
        author: "Gibi",
      },
      {
        quote: "Belki de bu yüzden yalnızca cesurların işidir badana.",
        author: "Gibi",
      },
      {
        quote:
          "Ben yanlış geldiğimi anladım da siz çok yanlış gözüküyorsunuz. Buraya ‘Mandosi’ yazıp, kendine Esat diyip, Kadir ismiyle olmuyor.",
        author: "Gibi",
      },
      {
        quote:
          "Benim zevklerim sizin nezdinizde makul bir zemine oturmak zorunda değil.",
        author: "Gibi",
      },
      {
        quote:
          "Ya güzel kardeşim bir şeyin tam tersini söyle al sana farklı bakış açısı.",
        author: "Gibi",
      },
      {
        quote:
          "Saat daha sabah 8. Büyücüler açılmamıştır. Gidelim şurada bir yerde çay kahve bir şeyler içelim.",
        author: "Gibi",
      },
      {
        quote:
          "60 adet yumurta, 5 kilogram beyaz peynir, 10 litre süt, 4.5 kilogram tavuk göğsü, 2 kilogram yulaf, 6 adet 1 kiloluk yoğurt, 1 litre bebe yağı + 46 numara bay terlik",
        author: "Gibi",
      },
      {
        quote:
          "Ezelden beridir ebeveynlerimizin çizdiği yolda, adımıza kurulmuş hayalleri kovaladık. Gerçi ben badanacı olarak bu zinciri kırdım ama…",
        author: "Gibi",
      },
      {
        quote:
          "Çorbamın içine mermi koymuşlar. Bir mesaj olarak mı acaba? Allahın dinlenme tesisinde bu ne sembolizm ya?",
        author: "Gibi",
      },
      {
        quote: "Oğlum sen hala köle misin? Kurtuldun ya! Biz siviliz lan!",
        author: "Gibi",
      },
      {
        quote:
          "Yürümek öyle çok da matah bir şey değil Ozan! İşte al bak, İlkkan abin yürüyor. N’aptı? Yürüye yürüye gitti köle oldu.",
        author: "Gibi",
      },
      {
        quote:
          "Ya güzel kardeşim bir şeyin tam tersini söyle al sana farklı bakış açısı.",
        author: "Gibi",
      },
      {
        quote: "İlkkan’ın fıstığa alerjisi var, batılı gibi!",
        author: "Gibi",
      },
      {
        quote: "Erdem atletik diye ben niye köfteci açmak zorundayım?",
        author: "Gibi",
      },
      {
        quote:
          "Öncelikle bir, bir gün önce babannesi yenen hiçkimse ertesi gü kahvaltıcıya gittiği için kafası dağılmaz, bu bir. İkincisi bizler sorunlarımızdan kahvaltı yaparak kaçan insanlar da değiliz. Üç ben böyle şeylerin konuşulması gerektiğine inanırım, yad edilmeli insanlar ona inanırım ben.",
        author: "Gibi",
      },
      {
        quote:
          "El vardır, ele olur el. Bel vardır, bele olur bel. Dil vardır, dile olur dil. Göl vardır, göle olur göl. Döl vardır, döle olur döl.",
        author: "Gibi",
      },
      {
        quote:
          "Eğer hepsini yeniden kaybedeceksem fazla bağlanmak istemiyorum.",
        author: "Anne with an E",
      },
      {
        quote:
          "Acaba şu anda burada, içimizde, bu çirkin suçu işlememiş gibi görünmeyen en az bir kişi bile olmayabileceği yönünde düşünmeye mi zorlanıyoruz?",
        author: "Gibi",
      },
      {
        quote: "Görünmeyen düşman daha korkutucudur.",
        author: "The Wire",
      },
      { quote: "Geçmiş, şu anın babasıdır.", author: "The Sopranos" },
    ],
    film: [
      {
        quote:
          "Bir adam bir şeyi istediği zaman, başka bir adam onun bunu istediğini bilir.",
        author: "The Godfather",
      },
      {
        quote:
          "Bütün sevgimle seninleyim. Her zaman seninleydim. Bütün hayatımı sana adadım.",
        author: "The Notebook",
      },
      {
        quote:
          "Fikirleri uyuşmuyordu. Hatta hemfikir oldukları konular bile pek azdı. Sürekli didişirlerdi. Sürekli birbirlerine meydan okuyorlardı. Ama farklılıklarına karşın önemli bir ortak noktaları vardı. Birbirleri için deli oluyorlardı.",
        author: "The Notebook",
      },
      {
        quote:
          "Bana her şeyin sözünü verdiğinde hayatın bana ne getireceğini hiç düşünmedim.",
        author: "The Great Gatsby",
      },
      {
        quote: "Aklını özgürleştirmek istiyorsan bildiklerini unutmalısın.",
        author: "Matrix",
      },
      {
        quote: "Telefon çalmadığında aramayan benimdir.",
        author: "Tatlı Tesadüf",
      },
      {
        quote: "Karakterli olmak karakter olmak için yeterli değildir.",
        author: "Pulp Fiction",
      },
      {
        quote:
          "Mathilda: Hayat hep böyle zor mudur, yoksa sadece çocuk olduğunda mı böyle gelir? Leon: Hep böyledir.",
        author: "Leon",
      },
      {
        quote:
          "Umut tehlikelidir. Umut bi insanı deli edebilir. Bu iyi değildir.",
        author: "Esaretin Bedeli",
      },
      {
        quote:
          "Para silahtır ama siyaset, tetiği ne zaman çekeceğini bilmektir.",
        author: "The Godfather",
      },
      {
        quote: "Eğer yaşamak için çalışıyorsan neden çalışarak ölüyorsun.",
        author: "İyi, Kötü ve Çirkin",
      },
      {
        quote:
          "Bir hiç olmak çok üzücüdür beyler. İnsanlar hep aranmak ister, dinlenmek ister, hayatta bir kez de olsa önemli olmak ister.",
        author: "12 Kızgın Adam",
      },
      {
        quote: "Öldürme yetkisine sahip olup da öldürmüyorsan güçlüsündür.",
        author: "Schindler’in Listesi",
      },
      {
        quote:
          "Çözmesi 2 dakika sürecek bir labirent çizmek için 1 dakikan var.",
        author: "Inception",
      },
      {
        quote: "Ölüm herkesin geçmesi gereken yeni bir başlangıçtır.",
        author: "Yüzüklerin Efendisi: Kralın Dönüşü",
      },
      {
        quote:
          "Nauthannem i ned ol reiannen. (Bir hayale daldığımı sanmıştım.)",
        author: "Yüzüklerin Efendisi: Kralın Dönüşü",
      },
      {
        quote:
          "Neden bıçak kullanıyorum biliyormusun? Tabanca çok hızlı. Böylece küçük anların tadına varıyorsun. (Joker)",
        author: "Batman / Kara Şövalye",
      },
      {
        quote:
          "İnsan sevdiğini öldürür diye bir söz vardır ya. Aslında bakın, insanı öldüren hep sevdiğidir.",
        author: "Dövüş Kulübü",
      },
      {
        quote:
          "+Ne dedi Orhan Veli? -Ne dedi? +Ne bileyim bununla ilgili bir şeyler de demiştir.",
        author: "Kaybedenler Kulübü",
      },
      {
        quote: "İki insana birbirlerine aşık olduklarını söylersen olurlar.",
        author: "Amelie",
      },
      {
        quote: "Yolumdan çekil oğlum, benim oksijenimi kullanıyorsun.",
        author: "Guguk Kuşu",
      },
      {
        quote:
          "Siyasiler gerçeği örtmek, sanatçılar ise gerçeği göstermek için yalan söylerler.",
        author: "V For Vendetta",
      },
      {
        quote:
          "Asker olmanın en büyük avantajı düşmanınızı karşınızda görüyor olmanızdır.",
        author: "Gladyatör",
      },
      {
        quote:
          "Şeytanın yapmış olduğu en büyük hile, tüm dünyaya yaşamadığına inandırmaktır.",
        author: "Olağan Şüpheliler",
      },
      {
        quote:
          "Benden nefret mi ediyorsun? Seni düşünecek vaktim olsaydı inan senden nefret ederdim.",
        author: "Casablanca",
      },
      {
        quote: "Daha iyi olanı değil. Seni daha iyi hissettireni seçmelisin.",
        author: "İyi Olan Kazansın",
      },
      {
        quote: "Düşünün… Çünkü henüz yasaklanmadı.",
        author: "Schindler’in Listesi",
      },
      {
        quote:
          "Gülümseyen insanların hiç acı çekmediklerini düşünme. Onlar sadece acının kendilerini kontrol etmesine izin vermiyorlar.",
        author: "Aşk Sarhoşu",
      },
      {
        quote:
          "Neden savaşlar oluyor biliyor musun? Çünkü, dünya insansız başladı ve de onsuz bitecek.",
        author: "Hayat Güzeldir",
      },
      {
        quote: "Bende bir resmi bile yok… O sadece hafızamda!",
        author: "Titanic",
      },
      {
        quote:
          "Bir kuşu aldın, iyileştirdin, sonra da uçmayı öğrettin. Nasıl ayrılacaksın.",
        author: "Ayla",
      },
      {
        quote:
          "Bakın benim parolam sevgidir. Ama ben şiddeti de yerine göre bir enstrüman olarak kullanırım.",
        author: "Ölümlü Dünya",
      },
      {
        quote: "Sanki çok ömrümüz varmış gibi beklemeyi öğretiyor hayat bize",
        author: "Piyanist",
      },
      {
        quote:
          "Mr. Stark? Hey… Mr. Stark? Can you hear me? It’s Peter. Hey. We won, Mr. Stark…. We won, Mr. Stark. We won! You did it, sir, you did it. I’m sorry… Tony…",
        author: "Avengers: End Game",
      },
      {
        quote:
          "Peter Parker: Mr. Stark? I don’t feel so good… Tony Stark: You’re all right. Peter Parker: I don’t… I don’t know what’s happening. I don’t know… I don’t want to go. I don’t want to go, sir. Please. Please, I don’t want to go. I don’t want to go. I’m sorry.",
        author: "Avengers: End Game",
      },
      {
        quote:
          "Olağanüstü şeyler gördüm… Çözemediğim tek gizem kalbimin neden hala senden vazgeçmediği.",
        author: "Sihirbaz",
      },
      {
        quote: "Hayat her zaman mı böyle zor, yoksa sadece çocukken mi?",
        author: "Leon",
      },
      {
        quote:
          "Cinayet… Pardon! Cinayet mi dedim. Evlilik diyecektim. Ama bilirsiniz ki, düşününce ikisi de benzer süreçlerdir. Katılımcılar birbirlerini tanır ve bittiğinde biri ölmüştür.",
        author: "Sherlock",
      },
      {
        quote: "Beynime bir silah daya ve duvarları beynimle boya",
        author: "Fight Club",
      },
      {
        quote: "Eğer senden nefret edersem dünyada sevebileceğim kimse kalmaz.",
        author: "The Man From Nowhere",
      },
      {
        quote:
          "Ya iyi olarak ölürsün, ya da kötüye dönüşecek kadar uzun yaşarsın.",
        author: "The Dark Knight",
      },
      {
        quote:
          "Bazılarının tesadüf dediği şey bana göre sonuçtur. Başkalarının fırsat dediği şey bana göre maliyettir.",
        author: "The Matrix",
      },
      {
        quote: "Hayatının amacını, mutlu olduğun yerde ara.",
        author: "Her Çocuk Özeldir",
      },
      {
        quote:
          "Hiç yanımda olmayan birisinin, hep aklımda olması çok tuhaf değil mi?",
        author: "Hızlı ve Öfkeli",
      },
      {
        quote: "Arkadaşlarla olmak için ne hoş bir yer!",
        author: "Harry Potter",
      },
      {
        quote:
          "Başarıyı getiren şey yanındakilerin sayısı değil inandığın şeylerin niteliğidir.",
        author: "Harry Potter",
      },
      {
        quote:
          "Ölüler için üzülme Harry, yaşayanlar için üzül. Her şeyden önce de sevgisiz yaşayanlar için.",
        author: "Harry Potter",
      },
      {
        quote: "Biraz risk olmadan hayatın ne tadı olur?",
        author: "Harry Potter",
      },
      {
        quote:
          "Hepimizin içinde hem aydınlık hem de karanlık bir taraf vardır. Önemli olan hangisini seçtiğimizdir. Bizi biz yapan budur.",
        author: "Harry Potter",
      },
      {
        quote:
          "Mutluluk en karanlık zamanlarda bile vardır. Yeter ki ışığı açmayı unutmayın.",
        author: "Harry Potter",
      },
      {
        quote: "Bu iyiydi, James. (Nice one, James)",
        author: "Harry Potter",
      },
      {
        quote: "Birine karar vermek, diğerini kaybetmektir.",
        author: "O kadın",
      },
      {
        quote: "Aynı şey iki defa gerçekleşmez",
        author: "Narnia Günlükleri",
      },
      {
        quote:
          "Makyajına ve yüzündeki boyalarına güvenme. Yollar da güzeldir ama altından kanalizyasyon geçer.",
        author: "Scarface",
      },
      {
        quote:
          "Bazı insanları çevresi yaratır,bazı insanlar çevresini yaratır.",
        author: "Köstebek",
      },
      {
        quote: "Kimse hayat kadar sert vuramaz.",
        author: "Rocky Balboa",
      },
      {
        quote: "İmkansız ulaşmanın tek yolu, onun mümkün olduğuna inanmaktır.",
        author: "Alice Harikalar Diyarı",
      },
      {
        quote: "Hayatta yaptıklarımız, sonsuzlukta yankılanır",
        author: "Gladiator",
      },
      {
        quote: "Kibir, benim en gözde günahımdır.",
        author: "Şeytanın Avukatı",
      },
    ],
  };

  // Sayfa yüklendiğinde rastgele bir alıntı göster
  var categories = $("input[name='category']");
  var category = categories.filter(":checked").val();
  var randomQuote =
    quotes[category][Math.floor(Math.random() * quotes[category].length)];
  $("#quote").text(randomQuote.quote);
  $("#author").text(randomQuote.author);

  // Alıntı getir butonuna tıklandığında rastgele bir alıntı göster
  $("#get-quote").click(function () {
    var category = categories.filter(":checked").val();
    var randomQuote =
      quotes[category][Math.floor(Math.random() * quotes[category].length)];
    $("#quote").text(randomQuote.quote);
    $("#author").text(randomQuote.author);

    $(this).text("Yenilendi");

    setTimeout(function () {
      $("#get-quote").text("Yenile");
    }, 1000);
  });

  // Kopyala butonuna tıklandığında kopyalama işlemi
  $("#get-copy").click(function () {
    var copyText = $("#quote");

    var textArea = document.createElement("textarea");
    textArea.value = copyText.text();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    $(this).text("Kopyalandı");

    setTimeout(function () {
      $("#get-copy").text("Kopyala");
    }, 1000);
  });

  $("#get-twitter").click(function () {
    // Input kutusundan tweet içeriğini alın
    var tweetText = $("#quote").text();

    // Tweet içeriğini URL uygun hale getirin
    var encodedTweetText = encodeURIComponent(tweetText);

    // Twitter'a yeni bir tweet atmak için URL oluşturun
    var tweetUrl =
      "https://twitter.com/intent/tweet?url=&text=" + encodedTweetText;

    // Yeni tweet sayfasını açın
    window.open(tweetUrl, "_blank");
  });
});
