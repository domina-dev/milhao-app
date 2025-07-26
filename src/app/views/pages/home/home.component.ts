import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ranking = [
    { nome: 'Vitin', pontuacao: "1.000.000" },
    { nome: 'Emily', pontuacao: "500.000" },
    { nome: 'Davi', pontuacao: "200.000" },
    { nome: 'Matheus', pontuacao: "100.000" },
    { nome: 'Junin', pontuacao: "50.000" },
    { nome: 'Pedrin', pontuacao: "10.000" },
  ];

  rankingComMedalhas: any[] = [];

  tabelaPremiacao = [
    { pergunta: 6, valor: "1.000.000", status: 'premio-maximo' },
    { pergunta: 5, valor: "500.000", status: 'premio' },
    { pergunta: 4, valor: "200.000", status: 'premio' },
    { pergunta: 3, valor: "100.000", status: 'porto-seguro' },
    { pergunta: 2, valor: "50.000", status: 'premio' },
    { pergunta: 1, valor: "10.000", status: 'premio' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.atribuirMedalhas();
  }

  atribuirMedalhas() {
    // Usa 'map' para criar a nova lista com as medalhas.
    this.rankingComMedalhas = this.ranking.map((jogador, index) => {
      let medalha = ''; // Padrão: sem medalha

      if (index === 0) {
        medalha = '🥇'; // Ouro para o primeiro (índice 0)
      } else if (index === 1) {
        medalha = '🥈'; // Prata para o segundo (índice 1)
      } else if (index === 2) {
        medalha = '🥉'; // Bronze para o terceiro (índice 2)
      }

      // Retorna um novo objeto combinando os dados do jogador com a nova propriedade 'medalha'.
      return {
        ...jogador,
        medalha: medalha
      };
    });
  }
}
