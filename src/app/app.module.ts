import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";
import { ProvidersComponent } from './providers/providers.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes} from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


export const firebaseConfig = {   apiKey: "AIzaSyCRc3Pw21srrO-Arvwgd7wRJoHngvG5seA",   authDomain: "test-4916e.firebaseapp.com",   databaseURL: "https://test-4916e.firebaseio.com",   storageBucket: "test-4916e.appspot.com",   messagingSenderId: "522694819594" };

const router: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegistrationPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [ProvidersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
