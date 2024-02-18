import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { HomeComponent } from './screens/home/home.component';
import { BookingComponent } from './screens/booking/booking.component';
import { AdminComponent } from './screens/admin/admin.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuardGuard] 
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [authGuardGuard] 
  },
  {
    path: 'managing',
    component: AdminComponent,
    canActivate: [authGuardGuard] 
  },
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
