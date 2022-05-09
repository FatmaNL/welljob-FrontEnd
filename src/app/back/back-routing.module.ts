import { NgModule } from '@angular/core';
import { RouterModule, ROUTER_CONFIGURATION, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BackComponent } from './back.component';

const routes: Routes = [
  {path:'', component: BackComponent, children: [
    {path: 'reservation', component: ReservationComponent}
  ]},
   // /back/reservation
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
