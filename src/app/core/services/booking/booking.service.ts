import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, catchError, map, of, switchMap } from 'rxjs';
import { Booking } from '../../models/Booking.model';
import { BookingRequest } from './models/BookingRequest';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
    this._bookings = new ReplaySubject(1)
    this._personalBookings = new ReplaySubject(1)
   this.http.get('http://localhost:8000/api/bookings').subscribe((response: any) => {
    this._bookingsArr = response
    this._bookings.next(response)
   })
   this.http.get('http://localhost:8000/api/bookings/personal').subscribe((response:any) => {
    this._personalBookings.next(response)
   })

  }

  _bookingsArr:Booking[] = []
  _bookings: ReplaySubject<Booking[]> 
  _personalBookings: ReplaySubject<Booking[]>


  get bookings(): ReplaySubject<Booking[]>{
    return this._bookings;
  }

  get bookingsNotSync(): Array<Booking>{
    return this._bookingsArr;
  }


  get personalBookings():Observable<any>{

    return this._personalBookings

  }

  doABooking(startDate: Date, endDate: Date, table: number){

    const newBooking = new BookingRequest(startDate,endDate,table)
    console.log(newBooking.toDTO())

    return this.http.post('http://localhost:8000/api/booking',newBooking.toDTO()).pipe(
      map((response:any) => {
        this._bookingsArr.push(newBooking as any)
        this._bookings.next(this._bookingsArr)
        return response
      }),
      catchError(error => {
        console.log(error)
        return of(false);
      }))
    
  }

  checkIfIsReserved(table:number, startDate: Date, endDate: Date ): Observable<boolean> {
    return this.bookings.pipe(
      switchMap((response) => {
        const bookings = response;
        const actualBooking = bookings.find(
          (booking: any) =>
            booking.table === table &&
            new Date(booking.startIn) <=
            startDate &&
            new Date(booking.endIn) >=
            endDate
        );
        return of(!!actualBooking);
      })
    );
  }


}
