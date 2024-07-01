function ola() {
  console.log("Olá, mundo!");
}

// ola();
// console.log(ola());


function dobro(x) {
  alert("O dobro de " + x + " é " + (x * 2));
}

// for (let i = 1; i < 6; i++) {
//   console.log(dobro(i));
// }

function saudacao(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

// saudacao("Henrique");
// saudacao();

function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}

// soma(10, 20);


// ENTENDENDO OS PARÂMETROS DE UMA FUNÇÃO
function criarUser(nome, email, senha, tipo) {
  const usuario = {
    nome, // mesmo que nome: nome,
    email,
    senha,
    tipo
  }
  console.log(usuario);
}

function novoUser(nome, tipo = "admin", email, senha) { // sempre colocar valor padrão nos parâmetros finais
  const usuario = {
    nome, // mesmo que nome: nome,
    tipo,
    email,
    senha,
  }
  console.log(usuario);
}

// criarUser("Henrique", "hqnr@gmail.com", "admin1234", "admin");
// novoUser("Paulo", "phqnrz@hotmail.com", "senha2222");

function muitosParametros(nome, telefone, endereco, dataNascimento, email, senha) {
  //...
}

function objetoParametro(usuario) {
  usuario.nome,
    usuario.email,
    usuario.endereço,
    usuario.dataNascimento,
    usuario.email,
    usuario.senha;

  console.log(usuario);
}

const dadosUsuario = {
  nome: "Paulo Henrique",
  telefone: "84 9999-0009",
  endereco: "Rua dos Sonhos, 01",
  dataNascimento: "02/09/1994",
  email: "phqnr@gmail.com",
  senha: "admin1234"
}

objetoParametro(dadosUsuario);


// RETORNO DE FUNÇÃO
function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

// const resultado = calcularMedia(7, 2);
// console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome: nome,
    preco: preco,
    estoque: 1
  }
  return produto;
}

const computador = criarProduto("Notebook Dell 21' i3 8GB RAM", 3300, 10);
console.log(computador);

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

console.log(areaQuadrada(5));


// ESCOPO é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)
let pokemon = "Charmander";

function evoluir() {
  pokemon = "Charmeleon";
}

// console.log(pokemon);
// evoluir();
// console.log(pokemon);

function criarAnimal() {
  let animal = "Gato";
}

// criarAnimal();
// console.log(animal);


function avaliarNota(nota) {
  if (nota > 6) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

avaliarNota(7);
avaliarNota(4);