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
import { OfferComponent } from './offer/offer.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    SidePanelComponent,
    BackComponent,
    ReservationComponent,
    CollaborationadminComponent,
    OfferComponent,
    AdvertisingComponent,
    NavbarComponent
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
