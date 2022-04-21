console.clear();
const prompt = require("prompt-sync")();


let continuar = 'SIM'
while (continuar == 'SIM') {

  console.log(`
---------------------
       JOKENPÔ
---------------------`);

  const jogadas = ["pedra", "papel", "tesoura"];
  let pontojogador = 0;
  let pontocomputador = 0;

  let rodadas = +prompt('Quantas rodadas voce quer jogar? ');
  while (isNaN(rodadas) || rodadas <= 0) {
    console.log("Comando inválido, apenas número maior que 0")
    console.log();
    rodadas = +prompt('Quantas rodadas voce quer jogar? ');
  }
  for (let i = 1; i <= rodadas; i++) {
    console.log(`
---------- JOKENPÔ RODADA ${i} ---------------------
0 - pedra 
1 - papel 
2 - tesoura
-------------------------------------------------`);
    console.log();

    let escolhausuario = +prompt("Deseja realizar qual jogada? (pedra, papel ou tesoura): ");
    let jogadausuario = jogadas[escolhausuario];

    while (escolhausuario != 0 && escolhausuario != 1 && escolhausuario != 2) {
      console.log("Comando inválido, digite apenas um número de 0 até 2");
      console.log();
      escolhausuario = +prompt("Deseja realizar qual jogada? (0- pedra) (1- papel) (2-tesoura): ");
      jogadausuario = jogadas[escolhausuario];
    }
    console.log();

    let computador = jogadas[Math.floor(Math.random() * jogadas.length)];

    console.log(`A sua jogada foi: ${jogadausuario}`);
    console.log(`A jogada do computador foi: ${computador}`);
    console.log();

    if (jogadausuario == computador) {
      console.log("Voce empatou");
    }
    else if (
      (jogadausuario == jogadas[0] && computador == jogadas[1]) ||
      (jogadausuario == jogadas[1] && computador == jogadas[2]) ||
      (jogadausuario == jogadas[2] && computador == jogadas[0])
    ) {
      console.log("Voce perdeu a rodada");
      pontocomputador++;
    }

    else if (
      (jogadausuario == jogadas[0] && computador == jogadas[2]) ||
      (jogadausuario == jogadas[1] && computador == jogadas[0]) ||
      (jogadausuario == jogadas[2] && computador == jogadas[1])
    ) {
      console.log("Voce ganhou a rodada");
      pontojogador++;
    }
    console.log(`
Seus pontos: ${pontojogador}
Pontos computador: ${pontocomputador}`)
    console.log();
  }
  if (pontojogador > pontocomputador) {
    console.log(`Parabéns voce ganhou ${pontojogador} rodadas e foi o GRANDE CAMPEÃO de JOKENPÔ`)
  }
  else if (pontocomputador > pontojogador) {
    console.log(`Infelizmente o computador venceu ${pontocomputador} rodadas e foi o campeão de JOKENPÔ`)
  }
  else {
    console.log(`Voce ganhou ${pontojogador} rodadas e o computador ganhou ${pontocomputador} rodadas, não houve campeão de JOKENPÔ`)
  }

  continuar = prompt("Quer jogar de novo? [SIM / NAO]: ").toUpperCase()
  while (continuar != "SIM" && continuar != "NAO") {
    continuar = prompt("Quer jogar de novo? [SIM / NAO]: ").toUpperCase()
  }
  console.clear();
}