import { Component, Injectable } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'af-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})

@Injectable()
export class ProvidersComponent {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(public af: AngularFire) {
    this.messages = this.af.database.list('messages');
  }

  registerUser(email, password) {
    console.log(email);
    return this.af.auth.createUser({
      email: email,
      password: password
    })
  }

  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email
    })
  }

  loginWithEmail(email, password) {
    return this.af.auth.login({
      email: email,
      password: password
    },
     {
       provider: AuthProviders.Password,
       method: AuthMethods.Password
    })
  }
  /*
   Logs in the user
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }
  addUserInfo(){

  }
}
