import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para ler a rota atual
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: GameService
  ) { }

  ngOnInit(): void {
    // Captura o ID da URL (ex: /details/1)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Pede ao serviço o jogo específico (precisaremos criar esse método no Service!)
    this.game = this.service.getGameById(id);
  }
}
