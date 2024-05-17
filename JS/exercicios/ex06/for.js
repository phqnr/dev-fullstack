alert(".:: JavaScript | Exercício 06 ::. \n");
let op = prompt("Selecione uma das opções abaixo: \n1- Tabuada\n2- Palavra palíndroma\n0- Sair");

if (op == 1) { // TABUADA
  let num = parseInt(prompt(".:: TABUADA ::." + "\n\nInforme um número a ser calculado:"));
  let mult = " ";
  for (let i = 1; i <= 20; i++) {
    mult += num + " x " + i + " = " + num * i + "\n";

  }
  alert("Resultado da tabuada de " + num + ":\n\n" + mult);
} else if (op == 2) {
  const palavra = prompt(".:: PALAVRA PALÍNDROMA ::." + "\n\nInforme palavra a ser verificada:")
  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
    // alert(palavraInvertida);
  }

  if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
  } else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
  }

} else if (op == 0) {
  alert("Programa encerrado!");
} else {
  alert("Valor incorreto. Programa encerrado!");
}


