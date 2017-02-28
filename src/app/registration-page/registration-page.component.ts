import { Component, OnInit } from '@angular/core';
import {ProvidersComponent} from "../providers/providers.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public error: any;

  constructor(private afService: ProvidersComponent, private router: Router) { }

  register(event, name, email, password) {
    event.preventDefault();
    this.afService.registerUser(email, password).then((user) => {
      this.afService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['']);
      })
          .catch((error) => {
            this.error = error;
          });
    })
        .catch((error) => {
          this.error = error;
          console.log(this.error);
        });
  }

}
