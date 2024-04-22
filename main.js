import { cardHobbies, cardSkills, cardProjetos } from "./utils/ObjetosCard";
import { criaCards, criarCardsProjetos } from "./Service";

const elementoSkills = document.querySelector(".skills");
const elementoHobbies = document.querySelector(".hobbies");
const elementoProjetos = document.querySelector(".experiencia__conteudo");

criaCards(cardSkills, elementoSkills);
criaCards(cardHobbies, elementoHobbies);

criarCardsProjetos(cardProjetos, elementoProjetos);
