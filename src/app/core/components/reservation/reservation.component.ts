import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from '../../models/Table.model';
import { BookingService } from '../../services/booking/booking.service';
import { TableService } from '../../services/table/table.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.less'
})
export class ReservationComponent{


  @ViewChild('reservationFormContainer') reservationFormContRef!: ElementRef;
  @Input() tables: Table[] = [];
  selectedTable!: Table | null
  actualDate: Date = new Date();
  constructor(private bookingsService: BookingService, private tableService: TableService){

  }

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

    updateDate($event: any) {
      this.actualDate = new Date($event.target.value)
      this.tableService.updateTablesStateFromADate(this.actualDate)
      
    }

}
