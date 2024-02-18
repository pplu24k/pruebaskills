import { Component, OnInit } from '@angular/core';
import { TableService } from '../../core/services/table/table.service';
import { Table } from '../../core/models/Table.class';
import { Game } from '../../core/models/Game.class';
import { AuthServiceService } from '../../core/services/authservice/auth-service.service';
import { BookingService } from './services/bookings/booking.service';
import { Booking } from '../../core/models/Booking.class';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.less'
})
export class BookingComponent  implements OnInit{

  constructor(private tableService: TableService,
    private authService: AuthServiceService,
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
    const currentUser = this.authService.currentUser
    this.isAdmin = (currentUser)?currentUser?.isAdmin():false
    const email = currentUser?.email as string
    this.user = email
    this.bookingService.getBookingsOf(email).subscribe(data => {
      this.bookings=data
    })

  }
}
