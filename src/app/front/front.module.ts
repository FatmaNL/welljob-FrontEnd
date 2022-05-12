import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ReserverComponent } from './reserver/reserver.component';
import { MaterialModule } from './material.module';
import { NewsPostComponent } from './news-post/news-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrontComponent,
    NavbarComponent,
    FooterComponent,
    NewsfeedComponent,
    CollaborationsComponent,
    ReserverComponent,
    NewsPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontRoutingModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})
export class FrontModule { }
