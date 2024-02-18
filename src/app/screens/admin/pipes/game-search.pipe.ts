import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../../core/models/Game.class';
@Pipe({
  name: 'gameSearch'
})
export class GameSearchPipe implements PipeTransform {

  transform(value: Game[], searchStr: string): Game[] {
    
    if(searchStr.trim() === ''){
      return value
    }
    return value.filter((game:Game) => {
      return game.name.toLowerCase().includes(searchStr.toLowerCase())
    })
    

  }

}
