alert(".:: JavaScript | Exercício 08 ::. \n");
let op;
let imoveis = [];

do {
  op = parseInt(prompt(".:: CORRETORA DE IMÓVEIS DEV HOUSE ::.\n"
    + "Imóveis cadastrados: " + imoveis.length + "\n\nSelecione uma das opções abaixo: \n1- Cadastrar um novo imóvel\n2- Listar imóveis cadastrados\n0- Sair"));

  switch (op) {
    case 1:
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ");
      imovel.quartos = parseInt(prompt("Quantos quartos possui o imóvel? "));
      imovel.banheiros = parseInt(prompt("Quantos banheiros possui o imóvel? "));
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não) ");

      const confirmacao = confirm("Salvar este imóvel?\n\n" +
        "Proprietário: " + imovel.proprietario +
        "\nQntd quartos: " + imovel.quartos +
        "\nQntd banheiros: " + imovel.banheiros +
        "\nPossui garagem? " + imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        window.alert("Imóvel salvo com sucesso!");
      } else {
        window.alert("Imóvel não cadastrado. Tente novamente.");
      }
      break;
    case 2:
      for (let i = 0; i < imoveis.length; i++) {
        alert("# Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQntd quartos: " + imoveis[i].quartos +
          "\nQntd banheiros: " + imoveis[i].banheiros +
          "\nPossui garagem? " + imoveis[i].garagem +
          "\n -------------------------------\n");
      }
      break;
    case 0:
      window.alert("Encerrando programa...");
      break;
    default:
      window.alert("Opção inválida, tente novamente!");
  }
} while (op !== 0);