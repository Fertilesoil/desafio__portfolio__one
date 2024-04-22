

export class Slider {
  // this.slideIndex = 0;
// this.intervalId = null;

iniciarSlider(elemento) {
  if (elemento.length > 0) {
    elemento[slideIndex].classList.add("display__slide");
    this.intervalId = setInterval(proximoSlide, 4000);
  }
}

mostrarSlider(index, elemento) {

  if (slideIndex >= elemento.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = elemento.length - 1;
  }

  elemento.forEach(slide => {
    slide.classList.remove("display__slide");
  });

  elemento[slideIndex].classList.add("display__slide");
}

slideAnterior() {
  const anterior = document.querySelector(".anterior");

  anterior.onclick = () => {
    slideIndex--;
    mostrarSlider(slideIndex, slides);
  }
}

// slideAnterior();

proximoSlide() {
  const proximo = document.querySelector(".proximo");

  slideIndex++;
  mostrarSlider(slideIndex, slides);

  proximo.onclick = () => {
    slideIndex++;
    mostrarSlider(slideIndex, slides);
  }
}  
}

