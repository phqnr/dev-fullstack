function calcular(a, b, operacao) {
  console.log("Realizando uma operação...");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(calcular(8, 4, function subtrair(x, y) {
  console.log("Subtração.");
  return x - y;
}));


// funções high-order com arrays - forEach
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento, indice, array
  })
};

const lista = ["Arroz", "Feijão", "Farofa", "Carne"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}
console.log("\n\n")
lista.forEach(exibirElemento); // callBackFunction