import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/repositories/login.service';

import { HttpClient , HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NameButtonComponent } from './name-button/name-button.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, NavbarComponentComponent, LoginComponent, NameButtonComponent, SignUpComponent, LandingComponent],
  bootstrap:    [ AppComponent ],
  providers: [LoginService, HttpClient]
})
export class AppModule { }
