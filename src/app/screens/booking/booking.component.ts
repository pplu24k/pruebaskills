import { Component, OnInit } from '@angular/core';
import { TableService } from '../../core/services/table/table.service';
import { Table } from '../../core/models/Table.model';
import { Game } from '../../core/models/Game.model';
import { AuthService } from '../../core/services/auth/auth.service';
import { BookingService } from '../../core/services/booking/booking.service';
import { Booking } from '../../core/models/Booking.model';
import { Observable } from 'rxjs';

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
    tables:Observable<Array<Table>> = this.tableService.tables
    bookings: Observable<Booking[]> = this.bookingService.personalBookings

  ngOnInit(): void {
    const currentUser = this.authService.user
    this.isAdmin = currentUser?.isAdmin as boolean
    const email = currentUser?.email as string
    this.user = email

  }
}
