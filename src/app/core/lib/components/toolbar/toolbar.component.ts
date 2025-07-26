import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() logoSrc: string = 'assets/images/logo.png';
  @Input() logoAlt: string = 'Show do Milhão';
  @Input() userPoints: number = 10000;
  @Input() userName: string = 'Vitin';
  @Input() showUserAvatar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onUserAvatarClick(): void {
    // Lógica para quando o avatar do usuário for clicado
    console.log('Avatar do usuário clicado');
  }

  onLogoClick(): void {
    // Lógica para quando a logo for clicada
    console.log('Logo clicada');
  }

  formatPoints(points: number): string {
    return points.toLocaleString('pt-BR');
  }

}
