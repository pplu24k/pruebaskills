import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrl: './game-search.component.less'
})
export class GameSearchComponent {

  @Output() searchString = new EventEmitter<string>();

  search: string = ''
  

  onSearch(event:any){
    event.preventDefault()
    this.searchString.emit(this.search)
  }



}
