import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../../models/Game.class';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }


  getGames():Observable<Array<Game>>{

    return this.http.get('assets/data.json').pipe(
      map(({games} : any) => {
        return games
      })
    )


  }


}
