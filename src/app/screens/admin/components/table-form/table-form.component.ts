import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../../core/services/table/table.service';
import { GameService } from '../../../../core/services/game/game.service';
import { Table } from '../../../../core/models/Table.model';
import { Game } from '../../../../core/models/Game.model';


@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrl: './table-form.component.less'
})
export class TableFormComponent{


tableWidth!: number;
tableHeight!: number;
error = false
savedMsg = ''

constructor(private tableService: TableService){}


saveTable($event:any){

  $event.preventDefault()
  console.log(this.tableWidth,this.tableHeight)
  if(this.tableWidth && this.tableHeight){

    this.tableService.store(this.tableWidth,this.tableHeight).subscribe(response => {
      console.log(response)
      this.savedMsg = `Tabla de ${this.tableWidth} x ${this.tableHeight} creada.`
    })
  }
  else{
    this.savedMsg = ''
    this.error= true
  }



}





}
