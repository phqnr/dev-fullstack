// const array1 = [["0 nivel", "1 nivel", "2 nivel", "3 nivel"], ["4 nivel", "5 nivel", "6 nivel"], ["7 nivel", "8 nivel", "9 nivel"]];
const array = ["1 nivel", ["2 nivel", 42, true], [["3 nivel, 1 item", "Olá mundo!"], ["3 nivel, 2 item", "Hello, World!"]], []];
console.log(array);
console.log(array[0]);
console.log(array[1][1]);
console.log(array[2][1][1]);

// Trabalhando com matrizes
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c1", "l3, c3", "l3, c4"]
];

console.table(matriz); // console.table exibe uma tabela com os dados do parâmetro informado

// Adicionando elementos na matriz
matriz.push(["Nova linha"]);
matriz[0].push("Nova coluna");

console.table(matriz);

// Iterar sobre matrizes
console.log("\nIterando sobre os elementos da matriz: ");
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}