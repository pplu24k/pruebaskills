import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../../../core/models/Booking.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) { }

  getBookings():Observable<Array<Booking>>{

    return this.http.get('assets/data.json').pipe(
      map(({bookings} : any) => {
        return bookings
      })
    )


  }
  getBookingsOf(partner:string|null):Observable<Array<Booking>>{
    if(partner == null){
      console.log("ES NULO")
      return new Observable()
    }
    return this.http.get('assets/data.json').pipe(
      map(({bookings} : any) => {
        return bookings.filter((booking:any) => {return booking.user === partner })
      })
    )


  }
}
