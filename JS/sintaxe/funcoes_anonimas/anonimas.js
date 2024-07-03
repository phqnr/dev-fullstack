function somar(a, b) {
  return a + b;
}

let operacao = somar;
console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
}

console.log(operacao(4, 5));

// função anônima é possível atribuir a uma variável
const subtrair = function (a, b) {
  return a - b;
}

// console.log(subtrair(10, 2));


olaMundo();
// oiMundo(); 

function olaMundo() {
  console.log("Hello, World!");
}

// função anônima só é chamada após a inicialização, senão vai apresentar erro
const oiMundo = function () {
  console.log("Hi, World!");
}

oiMundo(); 
