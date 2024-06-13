const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Legolas", "Gimli"];
console.log(array);

// Adicionar elementos no final do array :: .push()
array.push("Aragorn");
console.log(array);

// Adicionar elementos no início do array :: .unshift()
array.unshift("Bilbo");
console.log(array);

// Remover elementos no final do array :: .pop()
const ultimoElemento = array.pop(array);
console.log(array);
console.log(ultimoElemento);

// Remover elementos no início do array :: .shift()
const primeiroElemento = array.shift(array);
console.log(array);
console.log(primeiroElemento);

// Pesquisar por um elemento no array
// Verificar se um elemento existe no array :: .includes()
const verificar = array.includes("Gandalf, O Cinzento");
console.log(verificar);

// Pesquisar pelo índice do elemento no array :: .indexOf()
const indice = array.indexOf("Gandalf");
console.log(indice);

// Cortar o array :: .slice()
const hobbits = array.slice(0, 4); // Posição inicial até a posição final -1 
array.push("Aragorn");
const outros = array.slice(-4);
console.log("Sociedade do Anel: " + array);
console.log("Hobbits do Condado:" + hobbits);
console.log("Outros: " + outros);

// Concatenar o array :: .concat()
const sociedade = hobbits.concat(outros, "Boromir");
console.log("The Fellowship of the Ring: " + sociedade);

// Substituição dos elementos :: .splice()
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, O Cinzento");
console.log(elementosRemovidos);
console.log(sociedade);

// Iterar sobre os elementos :: criar um laço for e usar .length
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log((i + 1) + ". " + elemento);
}