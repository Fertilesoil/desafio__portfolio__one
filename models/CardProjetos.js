class CardProjetos {
  titulo
  descricao
  textoUm
  textoDois
  refUm
  refDois

  constructor(titulo, descricao, textoUm, textoDois, refUm, refDois) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.textoUm = textoUm;
    this.textoDois = textoDois;
    this.refUm = refUm;
    this.refDois = refDois;

    this.divPrincipal = document.createElement("div");
    this.divPrincipal.classList.add("experiencia__singular__info");

    this.divInterna = document.createElement("div");
    this.divInterna.classList.add("experiencia__singular__info__botoes");

    this.h3 = document.createElement("h3");
    this.h3.textContent = titulo;

    this.span = document.createElement("span");
    this.span.textContent = descricao;

    this.linkUm = document.createElement("a");
    this.linkUm.textContent = textoUm;
    this.linkUm.href = refUm;
    this.linkUm.target = "_blank";

    this.linkDois = document.createElement("a");
    this.linkDois.textContent = textoDois;
    this.linkDois.href = refDois;
    this.linkDois.target = "_blank";

    this.botaoUm = document.createElement("button");
    this.botaoUm.classList.add("botoes");
    this.botaoUm.appendChild(this.linkUm);

    this.botaoDois = document.createElement("button");
    this.botaoDois.classList.add("botoes");
    this.botaoDois.appendChild(this.linkDois);

    this.divInterna.appendChild(this.botaoUm);
    this.divInterna.appendChild(this.botaoDois);

    this.divPrincipal.appendChild(this.h3);
    this.divPrincipal.appendChild(this.span);
    this.divPrincipal.appendChild(this.divInterna);
  }

  adicionarCard(elemento) {
    return elemento.appendChild(this.divPrincipal);
  }
}

export default CardProjetos;