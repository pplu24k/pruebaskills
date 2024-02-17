import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AppModule } from '../../app.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    LogupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class HomeModule { }
