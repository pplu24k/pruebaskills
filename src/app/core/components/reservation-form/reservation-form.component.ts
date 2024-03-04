import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TableService } from '../../services/table/table.service';
import { Size } from '../../models/Size.model';
import { EMPTY, Observable, of, switchMap } from 'rxjs';
import { GameService } from '../../services/game/game.service';
import { Game } from '../../models/Game.model';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Table } from '../../models/Table.model';
import { BookingService } from '../../services/booking/booking.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.less',
})
export class ReservationFormComponent implements OnInit {
  constructor(
    private tableService: TableService,
    private gameService: GameService,
    private bookingService: BookingService
  ) {}

  tableIsSelectedError = false;
  bookingDone = false;
  errorDoingBooking = false;
  isReserved = false;
  reservationForm: UntypedFormGroup = new UntypedFormGroup({});
  tables: Observable<Array<Table>> = this.tableService.tables

  @Input() selectedTable: Table | null = null;
  @Output() cancelSelectedTable = new EventEmitter<any>();



  handleCancelSelectedTable() {
    this.cancelSelectedTable.emit();
  }

  games: Observable<Array<Game>> = this.gameService.games



  private setForm() {
    this.reservationForm = new UntypedFormGroup({
      startDate: new UntypedFormControl('', []),
      endDate: new UntypedFormControl('', []),
      table: new UntypedFormControl('', []),
      game: new UntypedFormControl('', []),
    });
  }

  ngOnInit(): void {
    this.setForm();
  }



  selectTableForAGame() {
    // console.log(this.reservationForm.value.game)
    // const game:any = this.games.find((game) => { return game.id == this.reservationForm.value.game;})
    // const tablesWithEnoughSize = this.tables.filter((table:any) => {
    //   return table.width >= game.widthNeeded && table.height >= game.heightNeeded
    // })
    // console.log(tablesWithEnoughSize)
    // const selectedSize =       tablesWithEnoughSize.reduce((_smallest:any, _current:any) => {
    //   if(!_smallest){
    //     return _current
    //   }
    //   if(_current.height * _current.width < _smallest.height / _smallest.width){
    //     return _current
    //   }
    //   else{
    //     return _smallest
    //   }
    // })
    // this.reservationForm.patchValue({table: {selectedSize}})
  }





  private getTableId() {
    let selectedTableId = 0;

    const newBooking = this.reservationForm.value;
    if (this.selectedTable != null) {
      selectedTableId = this.selectedTable.id;
    } else {
      selectedTableId = newBooking.table;
    }
    return selectedTableId;
  }




  makeReservation($event: any) {
    $event.preventDefault();
    const newBooking = this.reservationForm.value;
    const selectedTableId = this.getTableId();



    this.bookingService.doABooking(newBooking.startDate, newBooking.endDate, selectedTableId).subscribe(data => {
      console.log(data)
      if (data) {
          this.bookingDone = true;
          this.errorDoingBooking = false;
        } else {
          this.bookingDone = false;
          this.errorDoingBooking = true;
        }
        this.tableIsSelectedError = false;
    })

  }

  
}
