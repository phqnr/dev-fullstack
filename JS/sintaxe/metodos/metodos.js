let pessoa = {
  nome: "Henrique",
  idade: 29,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  }
};

// console.log(pessoa);
pessoa.dizerOla();