import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'login', component: ClientLoginComponent},
  { path: 'register', component: ClientRegisterComponent},
  { path: 'supporter/login', component: LoginComponent},
  { path: 'supporter/register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
