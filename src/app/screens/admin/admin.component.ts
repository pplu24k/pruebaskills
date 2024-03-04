import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from '../../core/models/Table.model';
import { Game } from '../../core/models/Game.model';
import { TableService } from '../../core/services/table/table.service';
import { GameService } from '../../core/services/game/game.service';
import { PartnersService } from './services/partners/partners.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less',
})
export class AdminComponent {
  @ViewChild('deleteTableModal') modalDialog: ElementRef | undefined;
  tables: Observable<Array<Table>> = this.tableService.tables

  partners: Array<any> = [];
  searchStr = '';

  tableToDelete = 0;
  constructor(
    private tableService: TableService,
    private gameService: GameService,
  ) {}

  games: Observable<Array<Game>> = this.gameService.games

  onGameSearch(search: string) {
    this.searchStr = search;
  }

  showDialog(table: Table) {
    console.log(table);
    this.tableToDelete = table.id;
    this.modalDialog?.nativeElement.showModal();
  }

  closeDialog() {
    this.modalDialog?.nativeElement.close();
  }

  removeTable() {
    this.tableService.remove(this.tableToDelete).subscribe(response => {
      if(response){
        alert("Se ha eliminado la table")
      }
      else{
        alert("Error al eliminar la tabla")
      }
      this.modalDialog?.nativeElement.close();
    })
  }
}
