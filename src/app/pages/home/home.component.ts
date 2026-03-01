import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service'; // Importe o serviço

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  games: Game[] = []; // Começa vazio

  // Injeção de Dependência: O Angular entrega o serviço pronto no constructor
  constructor(private service: GameService) { }

  ngOnInit(): void {
    // Quando o componente nasce, ele pede os jogos ao serviço
    this.games = this.service.getGames();
  }

  updateSearch(value: string) {
    this.searchText = value;
  }

  get filteredGames(): Game[] {
    return this.games.filter(game =>
      game.label.toLowerCase().includes(this.searchText.toLowerCase()) ||
      game.type.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
