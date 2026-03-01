import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model'; // Importando seu novo contrato

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: false
})
export class CardComponent implements OnInit {

  // Agora o componente recebe o objeto Game completo
  // O '!' indica que o Angular garantirá que esse valor chegue via Input
  @Input()
  gameData!: Game;

  constructor() { }

  ngOnInit(): void {
    // Você pode fazer logs aqui para validar se o objeto chegou corretamente
    // console.log(this.gameData);
  }

}
