import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';

const routes: Routes = [
  {path: '', component: FrontComponent}, // /front/
  {path: 'dashboard', redirectTo: '/back', pathMatch:'full'} // /front/dashboard
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
