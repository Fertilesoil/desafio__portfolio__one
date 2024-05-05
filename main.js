import { cardHobbies, cardSkills, cardProjetos, configSwiper } from "./utils/ObjetosCard";
import { criaCards, criarCardsProjetos } from "./Service";

const elementoSkills = document.querySelector(".skills");
const elementoHobbies = document.querySelector(".hobbies");
const elementoProjetos = [...document.querySelectorAll(".experiencia__singular")];

criaCards(cardSkills, elementoSkills);
criaCards(cardHobbies, elementoHobbies);

elementoProjetos.forEach((elemento, index) => {
  criarCardsProjetos(cardProjetos, elementoProjetos, index);
});

new Swiper(".swiper-1", configSwiper[0]);
new Swiper(".swiper-2", configSwiper[1]);
new Swiper(".swiper-3", configSwiper[2]);