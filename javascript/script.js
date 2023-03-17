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
