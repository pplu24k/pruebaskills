import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../../models/Game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }


  getGames():Observable<Array<Game>>{

    return this.http.get('/api/proxy/games').pipe(
      map(({games} : any) => {
        return games
      })
    )


  }


}
