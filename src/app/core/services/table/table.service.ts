import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Table } from '../../models/Table.class';
import { Size } from '../../../core/models/Size.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private jsonUrl = 'assets/data.json';
  
  constructor(private http: HttpClient) { }

  getData(): Observable<Table[]> {
    return this.http.get(this.jsonUrl)      .pipe(
      map(({ tables }: any) => {
        return tables
      })
    ) as Observable<Table[]>;
  }

  getSizesOfTables(): Observable<Size[]> {
    return this.http.get(this.jsonUrl)      .pipe(
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
