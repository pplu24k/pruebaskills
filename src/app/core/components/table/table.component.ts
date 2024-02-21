import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../models/Table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.less'
})
export class TableComponent implements OnInit{


  @Input() table!: Table;
  


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
