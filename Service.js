import Card from "./models/Card";
import CardProjetos from "./models/CardProjetos";

export function criaCards(objeto, elemento) {
  objeto.forEach(card => {
    const novoCard = new Card(card.titulo, card.icone);
    novoCard.adicionarCard(elemento);
  });
};

export function criarCardsProjetos(objeto, elemento) {
  objeto.forEach(card => {
    const novoCard = new CardProjetos(
      card.titulo,
      card.descricao,
      card.textoUm,
      card.textoDois,
      card.refUm,
      card.refDois);
    novoCard.adicionarCard(elemento);
  });
};

