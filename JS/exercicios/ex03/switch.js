alert(".:: JavaScript | Exercício 03 ::. \n");

const metro = parseFloat(prompt("Informe um valor em metros a ser convertido: "));

const conversor = parseFloat(prompt("Selecione uma das opções do conversor: \n1. milímetro (mm) \n2. centímetro (cm) \n3. decímetro (dm) \n4. decâmetro (dam) \n5. hectômetro (hm) \n6. quilômetro (km)"))

switch (conversor) {
  case 1:
    var resultado = metro * 1000;
    alert("Conversão de metro para milímetro: " + resultado + "mm.");
    break;

  case 2:
    var resultado = metro * 100;
    alert("Conversão de metro para centímetro: " + resultado + "cm.");
    break;

  case 3:
    var resultado = metro * 10;
    alert("Conversão de metro para decímetro: " + resultado + "dm.");
    break;

  case 4:
    var resultado = metro * 0.1;
    alert("Conversão de metro para decâmetro: " + resultado + "dam.");
    break;

  case 5:
    var resultado = metro * 0.01;
    alert("Conversão de metro para hectômetro: " + resultado + "hm.");
    break;

  case 6:
    var resultado = metro * 0.001;
    alert("Conversão de metro para quilômetro: " + resultado + "km.");
    break;
  default:
    alert("Valor incorreto!");
}