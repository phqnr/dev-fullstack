alert(".:: JavaScript | Exercício 04 ::. \n");

const nome = prompt("Olá, turista! Informe o seu nome: ");
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)");


while (continuar == "Sim" || continuar == "sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " + nome +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
);