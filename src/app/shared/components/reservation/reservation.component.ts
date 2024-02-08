import { Component, Input } from '@angular/core';
import { Table } from '../../../core/models/Table.interface';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.less'
})
export class ReservationComponent {

  @Input() tables: Table[] = [];
  selectedTable!: Table

  selectTable(table: Table) {
    this.selectedTable = table
  }

}
