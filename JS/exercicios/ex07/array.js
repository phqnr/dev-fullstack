alert(".:: JavaScript | Exercício 07 ::. \n");

let op1 = prompt("Selecione um dos programas abaixo:\n1- Fila de Espera\n2- Pilha de Cartas\n0- Encerrar");
if (op1 == 1) { // Fila de espera
  let op;
  let pacientes = ["Sova", "Cypher", "Sage", "Raze", "Yoru"];
  do {
    op = parseInt(prompt(".:: BEM-VINDO(A) À CLINICA DEV ::.\n\n"
      + "Lista de pacientes na fila de espera: " + pacientes + "\n\nSelecione uma das opções abaixo: \n1- Novo paciente\n2- Chamar paciente\n3- Consultar sua posição na fila\n0- Sair"));

    if (op == 1) {
      let novoPaciente = prompt("Informe seu nome: ");
      pacientes.push(novoPaciente);
      window.alert(novoPaciente + ", você foi agendado(a) com sucesso! Aguarde e em breve será atendido(a).");
    } else if (op == 2) {
      if (pacientes.length == 0) {
        window.alert("Não há pacientes a serem consultados(as).")
      } else {
        let consultado = pacientes.shift();
        window.alert(consultado + " foi consultado(a).");
      }
    } else if (op == 3) {
      let posicao = pacientes.indexOf(prompt("Informe seu nome: "));
      if (posicao == undefined || posicao < 0) {
        window.alert("Você não está agendado(a). Selecione a opção 1 no menu para realizar seu agendamento. \nObrigado!");
      } else if (posicao == 0) {
        window.alert("Vocé é o(a) próximo(a) a ser chamado(a).");
      } else {
        window.alert("Você é o(a) " + (posicao + 1) + "º da fila.");
      }
    } else if (op == 0) {
      window.alert("Encerrando programa...");
      break;
    } else {
      window.alert("Opção incorreta, tente novamente.");
    }
  } while (op != 0);

} else if (op1 == 2) { // Pilha de Cartas
  let baralho = ["O Mago", "A Sacerdotisa", "A Imperatriz", "O Imperador", "O Papa ou Grão-Sacerdote", "Os Enamorados", "O Carro ou A Carruagem", "A Força", "O Eremita", "A Roda da Fortuna", "A Justiça", "O Enforcado", "A Morte", "A Temperança", "O Diabo", "A Torre", "A Estrela", "A Lua", "O Sol", "O Julgamento ou O Juízo Final", "O Mundo", "O Louco"];
  let op;

  do {
    let qntdCartas = baralho.length;
    op = parseInt(prompt(".:: BARALHO TAROT DE QÛEMTÏLHÀJÉM ::.\n\n"
      + "Quantidade de cartas no baralho: " + qntdCartas + "\n\nSelecione uma das opções abaixo: \n1- Adicionar uma carta\n2- Puxar uma carta\n0- Sair"));

    if (op == 1) {
      let novaCarta = prompt("Informe o nome da carta que deseja adicionar ao baralho: ");
      novaCarta = baralho.push(novaCarta);
      window.alert("Carta adicionada com sucesso!");

    } else if (op == 2) {
      // Função para embaralhar o baralho
      function embaralhar(baralho) {
        return baralho.sort(() => Math.random() - 0.5);
      }

      // Função para puxar uma carta
      function puxarCarta() {
        if (baralho.length == 0) {
          window.alert("O baralho está vazio. Adicione novas cartas ou embaralhe-o novamente.");
        }

        // embaralha o baralho sempre que uma carta é puxada
        baralho = embaralhar(baralho);
        let cartaPuxada = baralho.pop();
        window.alert("Puxando carta...\n\n" + "Você puxou a carta: " + cartaPuxada);
        return cartaPuxada;
      }

      puxarCarta();

    } else if (op == 0) {
      window.alert("Encerrando programa...");

    } else {
      window.alert("Opção inválida, tente novamente.")
    }
  } while (op != 0);

} else if (op1 == 0) { // Sair
  window.alert("Encerrando programa...");
} else {
  alert("Valor incorreto! Programa encerrado.");
}
