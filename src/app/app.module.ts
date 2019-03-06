// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


//Services

import {SignuphttpService} from './services/signuphttp.service'

//Components

import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LayoutComponent} from './layout/layout.component';
import {HomePage} from './home/home.page';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {VerifyemailComponent} from './components/verifyemail/verifyemail.component';
import {UserdashboardComponent} from './components/userdashboard/userdashboard.component';


@NgModule({
  
  //Component
  declarations: [ AppComponent,
                  DashboardComponent,
                  LayoutComponent,
                  HomePage,
                  SignupComponent,
                  LoginComponent,
                  UserdashboardComponent,
                  VerifyemailComponent],
  
  
  
  entryComponents: [],
  
  
  //Modules
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,CommonModule],
  
  
  //Services
  providers: [
    SignuphttpService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
