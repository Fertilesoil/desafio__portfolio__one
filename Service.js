import Card from "./models/Card";
import CardProjetos from "./models/CardProjetos";

export function criaCards(objeto, elemento) {
  objeto.forEach(card => {
    const novoCard = new Card(card.titulo, card.icone);
    novoCard.adicionarCard(elemento);
  });
};

export function criarCardsProjetos(objeto, elemento, index) {
  const novoCard = new CardProjetos(
    objeto[index].titulo,
    objeto[index].descricao,
    objeto[index].textoUm,
    objeto[index].textoDois,
    objeto[index].refUm,
    objeto[index].refDois);
  novoCard.adicionarCard(elemento[index]);
};