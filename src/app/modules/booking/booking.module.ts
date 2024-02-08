import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './pages/booking/booking.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookingComponent,

  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
