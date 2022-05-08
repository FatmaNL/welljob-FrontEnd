import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { SidePanelComponent } from './sidepanel/sidepanel.component';
import { BackComponent } from './back.component';


@NgModule({
  declarations: [
    SidePanelComponent,
    BackComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
