import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { SidePanelComponent } from './sidepanel/sidepanel.component';
import { BackComponent } from './back.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './reservation/reservation.service';
import { CollaborationadminComponent } from './collaborationadmin/collaborationadmin.component';


@NgModule({
  declarations: [
    SidePanelComponent,
    BackComponent,
    ReservationComponent,
    CollaborationadminComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReservationService]
})
export class BackModule { }
