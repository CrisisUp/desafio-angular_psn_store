import { Injectable } from '@angular/core';
import { Game } from '../models/game.model'; // Importamos a interface

@Injectable({
  providedIn: 'root' // Isso torna o serviço disponível em toda a aplicação
})
export class GameService {

  // A lista de jogos agora vive aqui
  private games: Game[] = [
    {
      id: 1,
      cover: "assets/bt-1.jpg",
      label: "DIGITAL",
      type: "DIGITAL | PS4",
      price: "R$ 129,99"
    },
    {
      id: 2,
      cover: "assets/bt-4.jpg",
      label: "EXCLUSIVE",
      type: "DISC | PS5",
      price: "R$ 269,99"
    },
    {
      id: 3,
      cover: "assets/ac-cover.jpg",
      label: "BEST OF YEAR",
      type: "DIGITAL | PS5",
      price: "R$ 369,99"
    },
    {
      id: 4,
      cover: "assets/bt-hardline.jpg",
      label: "NEW",
      type: "DIGITAL | PS3 PS4 PS5",
      price: "R$ 369,99"
    }
  ];

  constructor() { }

  // Método para retornar os jogos
  getGames(): Game[] {
    return this.games;
  }

	// NOVO: Método para buscar um jogo específico pelo ID
  getGameById(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }
}
