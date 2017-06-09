import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

export class User {
  name: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
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

  userInfo: User;
  ngOnInit() {
    this.userInfo = {
      name: '',
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  submitted: boolean = false;
  processRegisterForm() {
    this.registerWithEmail();
    this.submitted = true;
  }

  registerWithEmail() {
    // make validation function
    /* validate().then(
      if (this.isValidated) => login/register
    )*/
    this.afAuth.auth.createUserWithEmailAndPassword(this.userInfo.email, this.userInfo.password).then(
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
    this.afAuth.auth.signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password).then(
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