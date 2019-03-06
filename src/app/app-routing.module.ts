import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component'
import {HomePage} from './home/home.page';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {VerifyemailComponent} from './components/verifyemail/verifyemail.component';
import {UserdashboardComponent} from './components/userdashboard/userdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'userdashboard/:name', component: UserdashboardComponent },
  { path: 'home', 
    component:HomePage,
    children:[
      {path: '', component: LayoutComponent},
      {path: 'dashboard/:name', component: DashboardComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'verifyemail/:id', component:VerifyemailComponent}
      
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
