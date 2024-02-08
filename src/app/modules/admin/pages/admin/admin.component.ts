import { Component, OnInit } from '@angular/core';
import { Table } from '../../../../core/models/Table.interface';
import { Game } from '../../../../core/models/Game.interface';
import { TableService } from '../../../../shared/services/table/table.service';
import { GameService } from '../../../../shared/services/game/game.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent implements OnInit{



  tables:Array<Table> = []
  games:Array<Game> = []
  
  searchStr = ''

  constructor(private tableService: TableService,
    private gameService: GameService){}


    private loadGames(){
      this.gameService.getGames().subscribe(data => {
        this.games = data
      })
    }
    private loadTables(){
      this.tableService.getData().subscribe(data => {
        console.log(data)
        this.tables = data
      })
    }


  ngOnInit(): void {
    this.loadGames()
    this.loadTables() 
  }

  onGameSearch(search: string) {
    this.searchStr = search
  }

}
