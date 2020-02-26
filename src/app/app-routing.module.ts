import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from './session.guard';


const routes: Routes = [
  {  
    path: '' , 
    redirectTo: '/login',  
    pathMatch: 'full',
    canActivate: [SessionGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
