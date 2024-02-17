import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { TableComponent } from './components/table/table.component';
import { TableSearchComponent } from './components/table-search/table-search.component';
import { GameSearchPipe } from './pipes/game-search.pipe';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { GenericTableComponent } from './components/generic-table/generic-table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ReservationFormComponent,
    TableComponent,
    TableSearchComponent,
    GameSearchPipe,
    ReservationComponent,
    NavComponent,
    GenericTableComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReservationFormComponent,
    TableComponent,
    TableSearchComponent,
    GameSearchPipe,
    ReservationComponent,
    NavComponent,
    GenericTableComponent
  ]
})
export class SharedModule { }
