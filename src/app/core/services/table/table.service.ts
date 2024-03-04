import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, catchError, combineLatest, map, of } from 'rxjs';
import { Table } from '../../models/Table.model';
import { Size } from '../../models/Size.model';
import { tableRequest } from './models/TableRequest.model';
import { BookingService } from '../booking/booking.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient, private bookingsService: BookingService) {
    this._tablesSubjet = new ReplaySubject(1);
    this.getData().subscribe((response: Array<Table>) => {
      console.log(response)
      this._tablesSubjet.next(response);
      this._tablesArr = response
    });
    
  }
  _tablesSubjet!: ReplaySubject<Array<Table>>;
  _tablesArr:Table[] = []
  getData(): Observable<Table[]> {
    return this.http
      .get('http://localhost:8000/api/tables')
      .pipe((response: any) => {
        console.log(response);
        return response;
      });
  }

  getSizesOfTables(): Observable<Size[]> {
    return this.http.get('http://localhost:8000/api/tables').pipe(
      map((tables: any) => {
        const uniqueSizes: Size[] = [];
        tables.forEach((table: Table) => {
          const existingIndex = uniqueSizes.findIndex(
            (size) => size.width === table.width && size.height === table.height
          );
          if (existingIndex === -1) {
            uniqueSizes.push({ width: table.width, height: table.height });
          }
        });
        return uniqueSizes;
      })
    ) as Observable<Size[]>;
  }

  store(width: number, height: number): Observable<any> {
    const newTable: tableRequest = {
      width,
      height,
    };
    return this.http.post('http://localhost:8000/api/table', newTable).pipe(
      map((response: any) => {
        console.log(response)
        this._tablesArr.push(response)
        this._tablesSubjet.next(this._tablesArr)
        return true;
      }),
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return of(false);
      })
    );
  }

  remove(id: any): Observable<any> {
    return this.http.delete('http://localhost:8000/api/table/' + id).pipe(
      map((response: any) => {
        this._tablesArr = this._tablesArr.filter((table) => {
          return table.id != id
        })
        this._tablesSubjet.next(this._tablesArr)
        return true;
      }),
      catchError((error) => {

        console.error('Error en la solicitud:', error);
        return of(false);
      })
    );

  }

  updateTablesStateFromADate(date: Date){


      this.http
      .get('http://localhost:8000/api/tables?date='+date.toISOString())
      .subscribe((response: any) => {
        this._tablesArr = response
        this._tablesSubjet.next(response)
      });

    }
  

  get tables(): Observable<Table[]> {
    return this._tablesSubjet;
  }
}
