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


export const firebaseConfig = {
  apiKey: "Your-Code-Here",
  authDomain: "Your-Code-Here",
  databaseURL: "Your-Code-Here",
  storageBucket: "Your-Code-Here",
  messagingSenderId: "Your-Code-Here"
};

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
