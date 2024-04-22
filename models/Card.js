class Card {
  titulo
  icone

  constructor(titulo, icone) {
    this.titulo = titulo;
    this.icone = icone;

    this.card = document.createElement("div");
    this.card.classList.add("card");

    this.span = document.createElement("span");
    this.span.classList.add("card__texto");
    this.span.innerText = titulo;

    this.card.innerHTML = this.icone;
    this.card.appendChild(this.span);
  }

  adicionarCard(elemento) {
    return elemento.appendChild(this.card);
  }
}

export default Card;