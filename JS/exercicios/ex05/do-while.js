alert(".:: JavaScript | Exercício 05 ::. \n");

let op1 = prompt("Selecione um dos programas abaixo:\n1- Menu interativo\n2- Controle Financeiro\n0- Encerrar");
if (op1 == 1) {
  let op;
  do {
    op = parseInt(prompt(".:: MENU INTERATIVO ::.\n" + "Selecione uma das opções abaixo: \n1- Alfa\n2- Beta\n3- Gama\n4- Delta\n5- Encerrar"));

    if (op == 1) {
      alert("Alfa é a primeira letra do alfabeto grego e tem um valor numérico de 1. Ela é derivada da letra fenícia Aleph ou Álefe. Letras que surgiram de alfa incluem o A do latim e a letra A do alfabeto cirílico. Plutarco em Moralia apresenta uma discussão sobre a razão da letra alfa ser a primeira no alfabeto");
    } else if (op == 2) {
      alert("Beta (Β ou β; em grego: βήτα, transl.: bēta) é a segunda letra do alfabeto grego. No sistema numeral grego, tem o valor de 2. É derivada da letra fenícia bete . Letras que surgiram de beta incluem B, do latim, e as letras cirílicas be e ve.");
    } else if (op == 3) {
      alert("Gama (Γ ou γ; em grego: γάμμα, transl.: gámma)[1] é a terceira letra do alfabeto grego, parecida com o C ou G atual, tendo um valor numérico de 3.");
    } else if (op == 4) {
      alert("Delta (Δ ou δ; em grego: δέλτα, transl.: délta) é a quarta letra do alfabeto grego. Devido ao formato de triângulo da letra maiúscula, diversas denominações que possuem algum tipo de semelhança ou afinidade com esse formato recebem o nome da letra, como é o caso da asa - delta e da delta de um rio.");
    } else if (op == 5) {
      alert("Programa encerrado!");
      break;
    } else {
      alert("Número inválido! Tente novamente.");
    }
  } while (op != 5);
} else if (op1 == 2) {

} else if (op1 == 0) {
  alert("Encerrando programa...");
} else {
  alert("Valor incorreto! Programa encerrado.");
}
// MENU INTERATIVO
