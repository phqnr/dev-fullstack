alert(".:: JavaScript | Exercício 02 ::. \n");
id = prompt("Digite a opção do exercício desejado: \n" + "1. Teste de velocidade \n 2. Cálculo de dano \n 0. Sair");

if (id == 1) {
  alert("Você selecionou o exercício Teste de velocidade.");

  nome_v1 = prompt("Informe o nome do primeiro veículo: ");
  velo_v1 = parseInt(prompt("Informe a velocidade do veículo " + nome_v1 + " (Km/h):"));

  nome_v2 = prompt("Informe o nome do segundo veículo: ");
  velo_v2 = parseInt(prompt("Informe a velocidade do veículo " + nome_v2 + " (Km/h):"));

  if (velo_v1 == velo_v2) {
    alert("Os veículos estão na mesma velocidade.");
  } else if (velo_v1 > velo_v2) {
    alert("O veículo " + nome_v1 + " está a " + velo_v1 + " Km/h e é mais rápido que o veículo " + nome_v2 + ".");
  } else if (velo_v2 > velo_v1) {
    alert("O veículo " + nome_v2 + " está a " + velo_v2 + " Km/h e é mais rápido que o veículo " + nome_v1 + ".");
  }

  alert(".:: Programa encerrado ::.");

} else if (id == 2) {
  alert("Você selecionou o exercício Cálculo de dano.");

  let perso1 = prompt("Informe o nome do seu personagem: ");
  let ataque = parseInt(prompt("Informe o poder de ataque de " + perso1 + ":"));

  let perso2 = prompt("Informe o nome do seu outro personagem: ");
  let vida = parseInt(prompt("Informe os pontos de vida de " + perso2 + ":"));
  let defesa = parseInt(prompt("Informe o poder de defesa de " + perso2 + ":"));
  let escudo = confirm(perso2 + " possui escudo?");

  if (ataque > defesa && escudo === false) {
    dano = ataque - defesa;
    vida = vida - dano;
    alert("Dano causado por " + perso1 + ": " + dano + " power. \nVida atual de " + perso2 + ": " + vida + " lifepoints.");
  } else if (ataque > defesa && escudo === true) {
    dano = (ataque - defesa) / 2;
    vida = vida - dano;
    alert("Dano causado por " + perso1 + ": " + dano + " power. \nVida atual de " + perso2 + ": " + vida + " lifepoints.");
  } else if (defesa > ataque) {
    dano = 0;
    alert("Dano causado por " + perso1 + ": " + dano + " power. \nVida atual de " + perso2 + ": " + vida + " lifepoints.");
  }

} else if (id == 0) {
  alert(".:: Programa encerrado ::.");
}