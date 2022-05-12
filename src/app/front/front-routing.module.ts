import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { FrontComponent } from './front.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ReserverComponent } from './reserver/reserver.component';

const routes: Routes = [
  {path: '', component: FrontComponent, children: [

    {path: 'newsfeed', component: NewsfeedComponent},
    {path: 'collaboration', component: CollaborationsComponent, children:[{path: 'reserver', component: ReserverComponent}]}
    
  ]}, // /front/
  {path: 'dashboard', redirectTo: '/back', pathMatch:'full'}
   // /front/dashboard
   // /froreserverard
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
