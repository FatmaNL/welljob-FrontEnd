import { NgModule } from '@angular/core';
import { RouterModule, ROUTER_CONFIGURATION, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BackComponent } from './back.component';
import { CollaborationadminComponent } from './collaborationadmin/collaborationadmin.component';

const routes: Routes = [
  {path:'', component: BackComponent, children: [
    {path: 'reservation', component: ReservationComponent},
    
    {path: 'collaboration', component: CollaborationadminComponent}
  ]},
   // /back/reservation
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
