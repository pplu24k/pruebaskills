import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../../shared/services/table/table.service';
import { Table } from '../../../../core/models/Table.interface';
import { Game } from '../../../../core/models/Game.interface';
import { AuthServiceService } from '../../../../shared/services/authservice/auth-service.service';
import { BookingService } from '../../../../shared/services/BookingService/booking.service';
import { Booking } from '../../../../core/models/Booking.interface';

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
    this.isAdmin = this.authService.checkSession() == "admin"
    this.user = this.authService.checkUser()
    let currentUser = this.authService.checkUser()
    console.log(currentUser)
    this.bookingService.getBookingsOf(currentUser).subscribe(data => {
      console.log(data)
      this.bookings=data
    })

  }




}
