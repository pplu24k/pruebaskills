import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) { }
  
  getPartners():Observable<Array<any>>{

    return this.http.get('/api/proxy/users').pipe(
      map(({users} : any) => {
        return users.filter((user:any) => {return user.role === "partner" })
      })
    )


  }
}
