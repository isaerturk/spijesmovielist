const blackHeader = document.querySelector(".logo-header-black");
const whiteHeader = document.querySelector(".logo-header-white");
const switchButton = document.querySelector("#switch");
const switchButton2 = document.querySelector("#switch2");
switchButton.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
  blackHeader.classList.toggle("hidden");
  whiteHeader.classList.toggle("hidden");
});
switchButton2.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");
  blackHeader.classList.toggle("hidden");
  whiteHeader.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });

  // fetch("/data.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     let watchlistHtml = "";
  //     data.forEach((watchlist) => {
  //       watchlistHtml +=
  //         '<div class="watchlist-item" data-item="' +
  //         watchlist.dataItem +
  //         '"><div class="wl-itemfront"><img src="' +
  //         watchlist.poster +
  //         '"alt="poster" style="height: 360px; width: 260px"/></div><div class="wl-itemback text-justify p-2"><ul class="bg-black text-white p-1 mainfont text-l"><li class="isim"><h1 class="">' +
  //         watchlist.title +
  //         '</h1></li><li class="dir-oyuncu"><span class="dir">| Yönetmen | <em></em>' +
  //         watchlist.director +
  //         '</em> </span><br /><span class="oyuncu">| Oyuncular | <em></em>' +
  //         watchlist.actors +
  //         '</em></span></li><li class="tür"><span>| Tür |<em> </em><a href="#" class="' +
  //         watchlist.typeClass +
  //         '"><em>' +
  //         watchlist.type +
  //         '</em></a><a href="#" class="' +
  //         watchlist.typeClass2 +
  //         '"><em>' +
  //         watchlist.type2 +
  //         '</em></a></span></li><li class="süre"><span> | Süre | <em></em>' +
  //         watchlist.time +
  //         '</em></span></li><li class="puan">| <i class="fa-brands fa-imdb text-xl"></i>|<span id="puan"><em></em>' +
  //         watchlist.score +
  //         '</em></span><small>/10</small></li></ul><ul class="mt-2.5 flex justify-between"><li class="play-btn"><a class="bg-black text-white hover:bg-white hover:text-black font-bold p-3 w-28 block text-center" href="' +
  //         watchlist.movieLink +
  //         '"target="_blank">Oynat</a></li><li class="trailer-btn"><a class="bg-black text-white hover:bg-white hover:text-black font-bold p-3 w-28 block text-center" href="' +
  //         watchlist.trailerLink +
  //         '"target="_blank">Fragman</a></li></ul><button class="mt-2.5 bg-black text-white w-full p-3 font-bold">Özet İçin Aşağı Kaydır</button><p class="konu bg-black mt-2.5 text-white w-full text-justify p-1">' +
  //         watchlist.subject +
  //         "</p></div></div>";
  //     });
  //     document.querySelector(".watchlist-container").innerHTML = watchlistHtml;
  //   });
});

// başka sekmeye geçildiğinde title değiştirme
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Geri dön :|";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

// listem sayfasında kart sayısını yazdırma
const cardCount = document.querySelectorAll(".watchlist-item").length;
document.getElementById("movie-count").textContent = cardCount;

//content filtreleme
let buttons = document.querySelectorAll(".wl-toggle-items");
let cards = document.querySelectorAll(".watchlist-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (button.id !== "btn-all") {
      document.querySelector("#btn-all").classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
});

// tümü butonu
document.getElementById("btn-all").addEventListener("click", function () {
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    kartlar[i].style.display = "block";
  }
});
// Aksiyon butonu
document.getElementById("btn-aksiyon").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-aksiyon")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// Macera butonu
document.getElementById("btn-macera").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-macera")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// scifi butonu
document.getElementById("btn-scifi").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-scifi")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// gerilim butonu
document.getElementById("btn-gerilim").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-gerilim")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// polisiye butonu
document.getElementById("btn-polisiye").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-polisiye")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// romcom butonu
document.getElementById("btn-romcom").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-romcom")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// korku butonu
document.getElementById("btn-korku").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-korku")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// gizem butonu
document.getElementById("btn-gizem").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-gizem")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// dram butonu
document.getElementById("btn-dram").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-dram")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// komedi butonu
document.getElementById("btn-komedi").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-komedi")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
// animasyon butonu
document.getElementById("btn-anim").addEventListener("click", function () {
  // Sadece aksiyon sınıfına sahip kartları göster, diğerlerini gizle
  var kartlar = document.getElementsByClassName("watchlist-item");
  for (var i = 0; i < kartlar.length; i++) {
    if (kartlar[i].classList.contains("tür-anim")) {
      kartlar[i].style.display = "block";
    } else {
      kartlar[i].style.display = "none";
    }
  }
});
