alert(".:: JavaScript | Exercício 09 ::. \n");

let op;
do {
  op = parseFloat(prompt("Bem vindo(a) à Calculadora Geométrica. \n" + "Informe um das opções abaixo para calcular áreas diferentes: \n" +
    "1. Triângulo \n2. Retângulo \n3. Quadrado \n4. Trapézio \n5. Círculo \n0. Sair"));
  switch (op) {
    case 1:
      triangulo();
      break;
    case 2:
      retangulo();
      break;
    case 3:
      quadrado();
      break;
    case 4:
      trapezio();
      break;
    case 5:
      circulo();
      break;
    case 0:
      alert("Encerrando programa...");
      break;
    default:
      alert("Opção inválida! Tente novamente.");
      break;
  }

} while (op !== 0);


// funções gerais
function triangulo(base, altura) {
  var base = parseFloat(prompt(" # Triângulo \nInforme o valor da base do triângulo: "));
  var altura = parseFloat(prompt("Agora informe o valor da altura do triângulo: "));

  var areaTriangulo = alert("A área do triângulo é de " + (base * altura) / 2 + " m².");
  return areaTriangulo;
}

function retangulo(base, altura) {
  var base = parseFloat(prompt(" # Retângulo \nInforme o valor da base do retângulo: "));
  var altura = parseFloat(prompt("Agora informe o valor da altura do retângulo: "));

  var areaRetangulo = alert("A área do retângulo é de " + (base * altura) + " m².");
  return areaRetangulo;
}

function quadrado(lado) {
  var lado = parseFloat(prompt(" # Quadrado \nInforme o valor do lado do quadrado: "));

  var areaQuadrado = alert("A área do quadrado é de " + (Math.pow(lado, 2)) + " m².");
  return areaQuadrado;
}

function trapezio(baseMaior, baseMenor, altura) {
  var baseMaior = parseFloat(prompt(" # Trapézio \nInforme o valor da base maior: "));
  var baseMenor = parseFloat(prompt("Informe o valor da base menor: "));
  var altura = parseFloat(prompt("Agora informe o valor da altura do trapézio: "));


  var areaTrapezio = alert("A área do trapézio é de " + (((baseMaior + baseMenor) * altura) / 2) + " m².");
  return areaTrapezio;
}

function circulo(raio) {
  var pi = 3.14;
  var raio = parseFloat(prompt(" # Círculo \nInforme o valor do raio: "));

  var areaCirculo = alert("A área do círculo é de " + ((pi * raio) ** 2) + " m².");
  return areaCirculo;
}