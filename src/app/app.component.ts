import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ProvidersComponent } from "./providers/providers.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  constructor(public afService: ProvidersComponent, private router: Router) {
    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    // this.afService.af.auth.subscribe(
    //     (auth) => {
    //       if(auth == null) {
    //         console.log("Not Logged in.");
    //
    //
    //         this.isLoggedIn = false;
    //         this.router.navigate(['login']);
    //       }
    //       else {
    //         console.log("Successfully Logged in.");
    //         this.isLoggedIn = true;
    //         // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
    //         // the user did not get redirected to the home page.
    //         this.afService.displayName = auth.google.displayName;
    //         this.afService.email = auth.google.email;
    //
    //         // this.router.navigate(['']);
    //         this.isLoggedIn = true;
    //       }
    //     }
    // );
      this.afService.af.auth.subscribe(
          (auth) => {
              if(auth == null) {
                  console.log("Not Logged in.");
                  this.isLoggedIn = false;
                  this.router.navigate(['login']);
              }
              else {
                  console.log("Successfully Logged in.");
                  // Set the Display Name and Email so we can attribute messages to them
                  if(auth.google) {
                      this.afService.displayName = auth.google.displayName;
                      this.afService.email = auth.google.email;
                  }
                  else {
                      this.afService.displayName = auth.auth.email;
                      this.afService.email = auth.auth.email;
                  }
                  this.isLoggedIn = true;
                  this.router.navigate(['']);
              }
          }
      );
  }
  logout() {
    this.afService.logout();
  }
}
