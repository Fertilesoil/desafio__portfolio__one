import { cardHobbies, cardSkills, cardProjetos } from "./utils/ObjetosCard";
import { criaCards, criarCardsProjetos } from "./Service";

const elementoSkills = document.querySelector(".skills");
const elementoHobbies = document.querySelector(".hobbies");
const elementoProjetos = document.querySelector(".experiencia__conteudo");

criaCards(cardSkills, elementoSkills);
criaCards(cardHobbies, elementoHobbies);

criarCardsProjetos(cardProjetos, elementoProjetos);

const slides = document.querySelectorAll(".slides img");
const slidesCodificador = document.querySelectorAll(".slides__codificador img");
const slidesDoces = document.querySelectorAll(".slides__doces img");
let slideIndex = 0;
let intervalId = null;

// document.addEventListener("DOMContentLoaded", {
//   iniciarSlider(slides),
//   iniciarSlider(slides),
//   iniciarSlider(slides)
// });
// document.addEventListener("DOMContentLoaded", iniciarSlider(slidesCodificador));
// document.addEventListener("DOMContentLoaded", iniciarSlider(slidesDoces));

iniciarSlider(slidesCodificador)
// iniciarSlider(slidesDoces)
// iniciarSlider(slides)

function iniciarSlider(elemento) {
  if (elemento.length > 0) {
    elemento[slideIndex].classList.add("display__slide");
    intervalId = setInterval(proximoSlide, 4000);
  }
}

function mostrarSlider(index, elemento) {

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

function slideAnterior(elemento) {
  const anterior = document.querySelector(".anterior");

  anterior.onclick = () => {
    slideIndex--;
    mostrarSlider(slideIndex, elemento);
  }
}

slideAnterior(slides);


function proximoSlide(elemento) {
  const proximo = document.querySelector(".proximo");

  slideIndex++;
  mostrarSlider(slideIndex, elemento);

  proximo.onclick = () => {
    slideIndex++;
    mostrarSlider(slideIndex, elemento);
  }
}
