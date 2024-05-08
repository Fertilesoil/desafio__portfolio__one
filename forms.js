import { init, send } from "@emailjs/browser";

const nome = document.querySelector(".nome__forms");
const email = document.querySelector(".email__forms");
const assunto = document.querySelector(".assunto__forms");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector(".contato__botao");
const inputs = document.querySelectorAll('.contato__forms input, #mensagem');
const legends = document.querySelectorAll('.contato__forms input');

botao.classList.add("disabled");

inputs.forEach(input => {
  input.addEventListener('input', verificarCamposPreenchidos);
});

function verificarCamposPreenchidos() {
  const inputsPreenchidos = [...inputs].every(input => input.value.trim() !== '');

  if (inputsPreenchidos) {
    botao.classList.remove("disabled");
    botao.classList.add("enabled");
  } else {
    botao.classList.remove("enabled");
    botao.classList.add("disabled");
  }
}

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
  }

  if (input.length > 50) {
    span.textContent = `${excedente}`;
    span.style.display = "flex";
  }

  elemento.addEventListener("keypress", (e) => barrarEscrita(e));
};

nome.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    nome,
    "* Campo nome não pode estar vazio.",
    "* Nome não pode ter mais que 50 caracteres.");
});

email.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    email,
    "* Email não pode estar vazio.",
    "* Email não pode ter mais que 50 caracteres.");
});

assunto.addEventListener("input", (e) => {
  guardarValores(e)
  validacao(
    assunto,
    "* Assunto não pode estar vazio.",
    "* Assunto não pode ter mais que 50 caracteres.");
});

mensagem.addEventListener("input", (e) => guardarValores(e));

legends.forEach(legend => {
  legend.addEventListener('focus', () => {
    legend.previousElementSibling.style.color = "rgba(15, 67, 145, 1)";
  });

  legend.addEventListener('blur', () => {
    legend.previousElementSibling.style.color = "gray";
  });
});

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