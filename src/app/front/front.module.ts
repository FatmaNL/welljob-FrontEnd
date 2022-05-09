import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';


@NgModule({
  declarations: [
    FrontComponent,
    NavbarComponent,
    FooterComponent,
    NewsfeedComponent,
    CollaborationsComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
