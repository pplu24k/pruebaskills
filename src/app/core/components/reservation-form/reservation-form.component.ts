import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TableService } from '../../services/table/table.service';
import { Size } from '../../../core/models/Size.interface';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game/game.service';
import { Game } from '../../models/Game.class';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Table } from '../../models/Table.class';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.less'
})
export class ReservationFormComponent implements OnInit, OnChanges{



  constructor(private tableService: TableService,
    private gameService: GameService
    ){}


  

    reservationForm: UntypedFormGroup = new UntypedFormGroup({})

  tableSizes: Array<Size> = []

  @Input() selectedTable: Table | null = null
  @Output() cancelSelectedTable =  new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedTable']) {
    console.log('El valor de miPropiedad ha cambiado:', this.selectedTable);
    }
}


handleCancelSelectedTable() {
 this.cancelSelectedTable.emit()
  }

  games: Array<Game> = []
  private loadTableSizes(){
    this.tableService.getSizesOfTables().subscribe((data) => {
      this.tableSizes = data
    })
  }
  private loadGames(){
    this.gameService.getGames().subscribe((data) => {
      this.games = data
    })
  }

  private setForm(){
    this.reservationForm = new UntypedFormGroup({
      startDate: new UntypedFormControl('', []),
      endDate: new UntypedFormControl('', []),
      table: new UntypedFormControl('', []),
      game: new UntypedFormControl('', []),
    })
  }

  ngOnInit(): void {
    this.loadTableSizes()
    this.loadGames()
    this.setForm()


  }


  selectTableForAGame() {
    console.log(this.reservationForm.value.game)

    const game:any = this.games.find((game) => { return game.id == this.reservationForm.value.game;})
    const tablesWithEnoughSize = this.tableSizes.filter((size:any) => {
      return size.width >= game.widthNeeded && size.height >= game.heightNeeded
    })
    console.log(tablesWithEnoughSize)
    const selectedSize =       tablesWithEnoughSize.reduce((_smallest:any, _current:any) => {
      if(!_smallest){
        return _current
      }
      if(_current.height * _current.width < _smallest.height / _smallest.width){
        return _current
      }
      else{
        return _smallest
      }
    })
    console.log(selectedSize)
    this.reservationForm.patchValue({table: {selectedSize}})




}

}