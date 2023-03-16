var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const vizyonButtons = document.querySelectorAll('input[name="vizyon"')
const vizyondakiler = document.getElementById("vizyondakiler")
const yakinda = document.getElementById("yakındakiler")
const audio = document.getElementById("click-sound");

function toggleDivs() {
  if (this.value === "vizyondakiler" && this.checked) {
    vizyondakiler.classList.add("change");
    yakinda.classList.remove("change");
    yakinda.style.display = "none"
    vizyondakiler.style.display ="block"
  } else if (this.value === "yakinda" && this.checked) {
    vizyondakiler.classList.remove("change");
    yakinda.classList.add("change");
    vizyondakiler.style.display ="none"
    yakinda.style.display ="block"
  }
}

vizyonButtons.forEach((button) => {
  button.addEventListener("change", toggleDivs);
});

for (var i = 0; i < vizyonButtons.length; i++) {
  vizyonButtons[i].addEventListener("click", function () {
    if (this.checked) {
      audio.currentTime = 0;
      audio.play();
      audio.volume = 0.5;
    } else {
      audio.pause();
    }
  });
}

// Sayfa yüklendiğinde de div'leri doğru şekilde göstermek için
toggleDivs.call(vizyonButtons[0]);