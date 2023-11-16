const URL = "https://viacep.com.br/ws/";
const buscar = document.getElementById("buttonBusca");
const input = document.getElementById("input");
const estado = document.querySelector("#uf");
const cidade = document.querySelector("#cidade");
const bairro = document.querySelector("#bairro");
const rua = document.querySelector("#rua");

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    pesquisaCEP();
    window.scroll({ top: document.body.offsetHeight });
  }
});

buscar.addEventListener("click", () => {
  pesquisaCEP();
  window.scroll({ top: document.body.offsetHeight });
});

input.addEventListener("keyup", () => {
  input.value = input.value.replace(/[^0-9\\.]+/g, "");
});

//Mudando Caracteres

// let string = "amizade amar";
// console.log(string);
// string = string.replaceAll("a", "x");
// console.log(string);

async function pesquisaCEP() {
  try {
    const cep = input.value;
    const request = await fetch(`${URL}${cep}/json`);
    const result = await request.json();
    estado.innerText = result.uf;
    cidade.innerText = result.localidade;
    bairro.innerText = result.bairro;
    rua.innerText = result.logradouro;
    console.log(result);
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
}

//Desestruturação de Objeto

// const principal = { nome: "Marcos", idade: 999 };
// const secundaria = { ...principal };
// let { idade } = principal;
// console.log(idade);

// secundaria.nome = "Pedro";

// console.log(principal);
// console.log(secundaria);
