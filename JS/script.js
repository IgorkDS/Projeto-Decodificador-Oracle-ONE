//selecionar de onde vai ser criptografado
const entrada = document.getElementById("entrada");
// let conteudo = entrada.value

//selecionar botao para criptofagar
var botaoCriptogafar = document.getElementById("botao-criptogafar");

//ação botao criptogafar
var cliqueCriptogafar = botaoCriptogafar.addEventListener("click", encriptar);

//criar funcao para botao descriptogafar
var saida = document.getElementById("saida");

var botaoDescriptogafar = document.getElementById("botao-descriptogafar");

var cliqueDescriptogafar = botaoDescriptogafar.addEventListener(
  "click",
  descriptogafar
);

//funcao que criptogafa
function encriptar() {
  if (entrada.value != "") {
    var texto = entrada.value.replace(/e/gim, "enter");
    var texto = texto.replace(/a/gim, "ai");
    var texto = texto.replace(/o/gim, "ober");
    var texto = texto.replace(/u/gim, "ufat");
    saida.innerHTML = `${texto}`;
  } else if (entrada.value === "") {
    alert("Você deve digitar o texto que deseja criptofrafar 😎");
  }
}
//funcao que descriptogafa
function descriptogafar() {
  if (entrada.value != "") {
    var texto = entrada.value.replace(/enter/gim, "e");
    var texto = texto.replace(/ai/gim, "a");
    var texto = texto.replace(/ober/gim, "o");
    var texto = texto.replace(/ufat/gim, "u");
    saida.innerHTML = `${texto}`;
  } else if (entrada.value === "") {
    alert("Você deve colar o texto que deseja decodificar 👇");
  }
}
//checar permissao
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state === "granted" || result.state === "prompt") {
  }
});
// //funcao para copiar
document.getElementById("copiar").addEventListener("click", function () {
  let copytext = document.getElementById("saida").value;
  navigator.clipboard.writeText(copytext).then(() => {
    if (saida.value === "") {
      alert("Não posso copiar um campo vazio 😢");
    } else if (saida.value != "") {
      alert("Texto copiado 🤘");
    }
  });
});
