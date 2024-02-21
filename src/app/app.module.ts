import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/home/components/login/login.component';
import { LogupComponent } from './screens/home/components/logup/logup.component';
import { BookingComponent } from './screens/booking/booking.component';
import { AdminComponent } from './screens/admin/admin.component';
import { GameFormComponent } from './screens/admin/components/game-form/game-form.component';
import { GameListComponent } from './screens/admin/components/game-list/game-list.component';
import { GameSearchComponent } from './screens/admin/components/game-search/game-search.component';
import { TableFormComponent } from './screens/admin/components/table-form/table-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameSearchPipe } from './screens/admin/pipes/game-search.pipe';
import { FooterComponent } from './core/components/footer/footer.component';
import { GenericTableComponent } from './core/components/generic-table/generic-table.component';
import { NavComponent } from './core/components/nav/nav.component';
import { ReservationComponent } from './core/components/reservation/reservation.component';
import { ReservationFormComponent } from './core/components/reservation-form/reservation-form.component';
import { TableComponent } from './core/components/table/table.component';
import { TableSearchComponent } from './core/components/table-search/table-search.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BookingService } from './screens/booking/services/bookings/booking.service';
import { GameService } from './core/services/game/game.service';
import { PartnersService } from './screens/admin/services/partners/partners.service';
import { TableService } from './core/services/table/table.service';
import { AuthService } from './core/services/auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogupComponent,
    BookingComponent,
    AdminComponent,
    GameSearchPipe,
    GameFormComponent,
    GameListComponent,
    GameSearchComponent,
    TableFormComponent,
    FooterComponent,
    GenericTableComponent,
    HeaderComponent,
    NavComponent,
    ReservationComponent,
    ReservationFormComponent,
    TableComponent,
    TableSearchComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [
    AuthService,
    BookingService,
    GameService,
    PartnersService,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
