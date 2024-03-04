import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, catchError, map, of, tap } from 'rxjs';
import { Game } from '../../models/Game.model';
import { GameRequest } from './models/GameRequest.model';
import { GameFormData } from '../../../screens/admin/components/game-form/game-form.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { 
    this._games = new ReplaySubject(1)
    this.http.get('http://localhost:8000/api/games').subscribe((games:any) => {
      this._gamesArr =  games
      this._games.next(games)

    }

    )
  }


  _games!: ReplaySubject<Game[]>
  _gamesArr:Game[] = []

  get games():Observable<Array<Game>>{

    return this._games;


  }

  store(game:GameFormData){

    const gameToSave = game as GameRequest

    return this.http.post('http://localhost:8000/api/game',gameToSave).pipe(
      map((response: any) => {
        this._gamesArr.push(response as Game)
        this._games.next(this._gamesArr)
        return true;
      }),
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return of(false);
      })
    );

  }

  getGame(id:any){

    return this._games.pipe(map((games) => {
      console.log(games)
      return games.find(game => game.id == id)
    }))


  }
  update(gameToUpdate:any){

    return this.http.put('http://localhost:8000/api/game/',gameToUpdate).pipe(
      map((response:any) => {
        const index = this._gamesArr.findIndex(obj => obj.id === gameToUpdate.id);
        this._gamesArr[index] = gameToUpdate
        return true
      }),
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return of(false);
      }))


  }


}
