import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    standalone: false
})
export class SearchBarComponent {
  // O "cano" por onde a informação vai sair
  @Output() onSearch = new EventEmitter<string>();

  // Função chamada a cada tecla digitada no input
  handleSearch(value: string) {
    this.onSearch.emit(value); // Envia o valor para o componente pai (Home)
  }
}
