import { init, send } from "@emailjs/browser";

const nome = document.querySelector(".nome__forms");
const legendNome = document.querySelector(".nome__forms__legend");
const email = document.querySelector(".email__forms");
const legendEmail = document.querySelector(".email__forms__legend");
const assunto = document.querySelector(".assunto__forms");
const legendAssunto = document.querySelector(".assunto__forms__legend");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector(".contato__botao");
const inputs = [...document.querySelectorAll("[data-input]")]

inputs.onchange = () => {
  
};

// botao.classList.add("disabled");

const barrarEscrita = (e) => {
  const elemento = e.currentTarget;
  elemento.value.trim();

  elemento.onkeypress = (e) => {
    if (elemento.value.length > 50) {
      e.preventDefault();
    }
  }
}

const validacao = (elemento, vazio, excedente) => {
  const span = elemento.previousElementSibling.nextElementSibling.nextElementSibling
  const input = elemento.value.trim();

  span.style.display = "none";

  if (input === "") {
    span.textContent = `${vazio}`;
    span.style.display = "flex";
    // botao.classList.add("disabled");
  }

  if (input.length > 50) {
    span.textContent = `${excedente}`;
    span.style.display = "flex";
    // botao.classList.add("disabled");
  }

  elemento.addEventListener("keypress", (e) => barrarEscrita(e));
};

nome.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    nome,
    "* Campo nome não pode estar vazio.",
    "* Nome não pode ter mais que 50 caracteres.");
  if (nome.value.length > 0) {
    botao.classList.remove("disabled");
  } else if (nome.value.length === 0) {
    botao.classList.add("disabled");
  }
});

email.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    email,
    "* Email não pode estar vazio.",
    "* Email não pode ter mais que 50 caracteres.");
  if (email.value.length > 0) {
    botao.classList.remove("disabled");
  } else if (email.value.length === 0) {
    botao.classList.add("disabled");
  }
});

assunto.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    assunto,
    "* Assunto não pode estar vazio.",
    "* Assunto não pode ter mais que 50 caracteres.");
  if (assunto.value.length > 0) {
    botao.classList.remove("disabled");
  } else if (assunto.value.length === 0) {
    botao.classList.add("disabled");
  }
});

mensagem.addEventListener("input", (e) => {
  guardarValores(e)
  if (mensagem.value.length > 0) {
    botao.classList.remove("disabled");
  } else if (mensagem.value.length === 0) {
    botao.classList.add("disabled");
  }
});

// console.log(elementos);

// const validacaoBotao = nome.value.length === 0 && email.value.length === 0 && assunto.value.length === 0 && mensagem.value.length === 0;

// if (validacaoBotao) {
//   botao.classList.add("disabled");
// } else if (!validacaoBotao) {
//   botao.classList.remove("disabled");
// }

nome.onfocus = (e) => {
  legendNome.style.color = "rgba(15, 67, 145, 1)";
}

nome.onblur = () => {
  legendNome.style.color = "gray";
}

email.onfocus = () => {
  legendEmail.style.color = "rgba(15, 67, 145, 1)";
}

email.onblur = () => {
  legendEmail.style.color = "gray";
}

assunto.onfocus = () => {
  legendAssunto.style.color = "rgba(15, 67, 145, 1)";
}

assunto.onblur = () => {
  legendAssunto.style.color = "gray";
}

const options = {
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  blockHeadless: true,
}

init(options);

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

const params = {
  nome: "",
  email: "",
  assunto: "",
  mensagem: ""
}
const guardarValores = (e) => {
  const nome = e.target.name;
  const valor = e.target.value;

  params[nome] = [valor];
}

const mandarEmail = () => {
  send(serviceId, templateId, params)
    .then(res => {
      nome.value = ""
      email.value = ""
      assunto.value = ""
      mensagem.value = ""
    })
    .catch(err => console.log(err.message));
}

botao.onclick = () => mandarEmail();