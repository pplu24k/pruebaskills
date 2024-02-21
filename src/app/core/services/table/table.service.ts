import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Table } from '../../models/Table.model';
import { Size } from '../../models/Size.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
 
  
  constructor(private http: HttpClient) { }

  getData(): Observable<Table[]> {
    return this.http.get('/api/proxy/tables').pipe(
      map(({ tables }: any) => {
        return tables
      })
    ) as Observable<Table[]>;
  }


  getSizesOfTables(): Observable<Size[]> {
    return this.http.get('/api/proxy/tables')      .pipe(
      map(({ tables }: any) => {
        const uniqueSizes:Size[] = []
        tables.forEach((table:Table) => {
          const existingIndex = uniqueSizes.findIndex(size => size.width === table.width && size.height === table.height);
          if (existingIndex === -1) {
            uniqueSizes.push({ width: table.width, height: table.height });
          }
        
        })
        return uniqueSizes
      })
    ) as Observable<Size[]>;
  }



}
