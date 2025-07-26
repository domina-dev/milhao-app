import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // No seu arquivo .ts
  ranking = [
    { nome: 'Vitin', pontuacao: 10000 },
    { nome: 'Emy', pontuacao: 10000 },
    { nome: 'Davi', pontuacao: 10000 },
    { nome: 'Matheus', pontuacao: 10000 },
    { nome: 'Junin', pontuacao: 10000 },
    { nome: 'Pedrin', pontuacao: 10000 },
    // etc...
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("HOME");

  }

}
