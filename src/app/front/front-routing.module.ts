import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { FrontComponent } from './front.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [
  {path: '', component: FrontComponent, children: [
    {path: 'newsfeed', component: NewsfeedComponent},
    {path: 'collaboration', component: CollaborationsComponent}
  ]}, // /front/
  {path: 'dashboard', redirectTo: '/back', pathMatch:'full'} // /front/dashboard
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
