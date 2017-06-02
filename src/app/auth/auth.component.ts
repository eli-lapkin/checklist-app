import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (auth: AngularFireAuth) => {
        this.user = auth.authState;
        console.log('%c success', 'color: green');
        return auth;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showForm = false;
  showSignIn = false;

  toggleRegister() {
    this.showForm = !this.showForm;
    this.showSignIn = false;
  }

  toggleLogin() {
    this.showSignIn = !this.showSignIn;
    this.showForm = false;
  }
  
  name: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';

  registerWithEmail() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(
      (auth: AngularFireAuth) => {
        this.user = auth.authState;
        console.log('%c success', 'color: green');
        return auth;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loginWithEmail() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(
      (auth: AngularFireAuth) => {
        this.user = auth.authState;
        console.log('%c success', 'color: green');
        return auth;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}