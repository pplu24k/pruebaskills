import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Table } from '../../../core/models/Table.interface';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.less'
})
export class ReservationComponent {

  @ViewChild('reservationFormContainer') reservationFormContRef!: ElementRef;
  @Input() tables: Table[] = [];
  selectedTable!: Table | null

  selectTable(table: Table) {
    this.selectedTable = table
    console.log(table)
    const reservationForm = this.reservationFormContRef.nativeElement
    console.log(reservationForm)
    reservationForm.scrollIntoView()
  }

  handeCancelSelectedTable() {
   this.selectedTable = null
    }

}
