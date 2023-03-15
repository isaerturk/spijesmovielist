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
          "Eğer hepsini yeniden kaybedeceksem fazla bağlanmak istemiyorum.",
        author: "Anne with an E",
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
        author: "The Godfathe",
      },
      {
        quote:
          "Bütün sevgimle seninleyim. Her zaman seninleydim. Bütün hayatımı sana adadım.",
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
        quote: "Sanki çok ömrümüz varmış gibi beklemeyi öğretiyor hayat bize",
        author: "Piyanist",
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
