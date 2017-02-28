import { Component } from '@angular/core';

import {Router} from "@angular/router";
import { ProvidersComponent } from "../providers/providers.component"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {
  public error: any;

  constructor(public afService : ProvidersComponent, private  router: Router) { }

  // login() {
  //   this.alfService.loginWithGoogle().then((data) => {
  //     this.router.navigate(['']);
  //   })
  // }

  loginWithGoogle() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.afService.addUserInfo();
      this.router.navigate(['']);
    })
  }
  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afService.loginWithEmail(email, password).then(() => {
      this.router.navigate(['']);
    })
        .catch((error: any) => {
          if (error) {
            this.error = error;
            console.log(this.error);
          }
        });
  }

}
