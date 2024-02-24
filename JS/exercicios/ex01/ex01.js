
alert(".:: JavaScript | Exercício 01 ::. \n");
id = prompt("Digite a opção do exercício desejado: \n" + "1. Cadastro de Recrutas \n 2. Calculadora de 4 operações \n 0. Sair");

if (id == 1) {
  alert("Você selecionou o exercício Cadastro de Recrutas.");

  nome = prompt("Digite o seu primeiro nome: ");
  sobrenome = prompt("Digite seu sobrenome: ");
  escolaridade = prompt("Digite seu grau de escolaridade: ");
  idade = parseInt(prompt("Informe sua idade"));
  alert("Cadastro concluído!\n\n" + "Nome completo: " + nome + " " + sobrenome + "\nEscolaridade: " + escolaridade + "\nIdade: " + idade + " anos");
  alert(".:: Programa encerrado ::.");

} else if (id == 2) {
  alert("Você selecionou a calculadora de 4 operações!");
  n1 = parseFloat(prompt("Digite o primeiro número: "));
  n2 = parseFloat(prompt("Agora digite o segundo número: "));

  const soma = n1 + n2;
  const sub = n1 - n2;
  const mult = n1 * n2;
  const div = n1 / n2;

  alert("Número 1: " + n1 + "\nNúmero 2: " + n2 + "\n\nSoma: " + soma + "\nSubtração: " + sub + "\nMultiplicação: " + mult + "\nDivisão: " + div.toFixed(3));
  alert(".:: Programa encerrado ::.");

} else if (id == 0) {
  alert(".:: Programa encerrado ::.");
}
