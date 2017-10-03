import { Component } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  user: Observable<firebase.User>;

  constructor(public fireAuth: AngularFireAuth) {
    this.user = this.fireAuth.authState;
  }

  login() {
    this.fireAuth.auth.signInAnonymously();
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
