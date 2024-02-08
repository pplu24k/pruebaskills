import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../../shared/services/table/table.service';
import { Table } from '../../../../core/models/Table.interface';
import { Game } from '../../../../core/models/Game.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.less'
})
export class BookingComponent  implements OnInit{

  constructor(private tableService: TableService){}


  tables: Array<Table> = []




  private loadTables = () => {
    this.tableService.getData().subscribe(data => {
      console.log(data)
      this.tables = data
    })
  }


  ngOnInit(): void {
    this.loadTables()
  }




}
