import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './pages/booking/booking.component';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingComponent,
    TableComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
