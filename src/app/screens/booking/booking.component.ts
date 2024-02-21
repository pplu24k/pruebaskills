import { Component, OnInit } from '@angular/core';
import { TableService } from '../../core/services/table/table.service';
import { Table } from '../../core/models/Table.model';
import { Game } from '../../core/models/Game.model';
import { AuthService } from '../../core/services/auth/auth.service';
import { BookingService } from './services/bookings/booking.service';
import { Booking } from '../../core/models/Booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.less'
})
export class BookingComponent  implements OnInit{

  constructor(private tableService: TableService,
    private authService: AuthService,
    private bookingService: BookingService){}
    user: string | null = null
    isAdmin = false
    tables: Array<Table> = []
    bookings: Booking[] = []

  


  private loadTables = () => {
    this.tableService.getData().subscribe(data => {
      console.log(data)
      this.tables = data
    })
  }




  ngOnInit(): void {
    this.loadTables()
    const currentUser = this.authService.user
    this.isAdmin = currentUser?.isAdmin as boolean
    const email = currentUser?.email as string
    this.user = email
    this.bookingService.getBookingsOf(email).subscribe(data => {
      this.bookings=data
    })

  }
}
