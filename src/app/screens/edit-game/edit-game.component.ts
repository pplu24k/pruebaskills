import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../core/services/game/game.service';
import { Game } from '../../core/models/Game.model';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrl: './edit-game.component.less'
})
export class EditGameComponent implements OnInit{
  id: string = '';
  game: any

  constructor(private route: ActivatedRoute,
    private gameService: GameService
    ) { }


  ngOnInit(): void {

    const idOfParam = this.route.snapshot.paramMap.get('id') as string;
    this.id = idOfParam
    this.gameService.getGame(idOfParam).subscribe(response => {
      console.log(response)
      this.game = response
    })



  }
}
