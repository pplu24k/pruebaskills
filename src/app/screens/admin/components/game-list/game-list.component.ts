import { Component, Input } from '@angular/core';
import { Game } from '../../../../core/models/Game.class';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.less'
})
export class GameListComponent {

  @Input() games: Game[] = []

}
