import { Component, OnInit } from '@angular/core';
import { Table } from '../../core/models/Table.class';
import { Game } from '../../core/models/Game.class';
import { TableService } from '../../core/services/table/table.service';
import { GameService } from '../../core/services/game/game.service';
import { PartnersService } from '../../core/services/partnersservice/partners.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent implements OnInit{



  tables:Array<Table> = []
  games:Array<Game> = []
  partners: Array<any> = []
  searchStr = ''

  constructor(private tableService: TableService,
    private gameService: GameService, private partnerService: PartnersService){}


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
    private loadPartners(){
      this.partnerService.getPartners().subscribe(data => {
        console.log(data)
        this.partners = data
      })
    }


  ngOnInit(): void {
    this.loadGames()
    this.loadTables() 
    this.loadPartners()
  }

  onGameSearch(search: string) {
    this.searchStr = search
  }

}
