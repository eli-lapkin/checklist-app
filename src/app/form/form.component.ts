import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  username: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;
  submitted: boolean = false;

  ngOnInit() {
    this.user = {
      name: '',
      username: ''
    }
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  processForm() {
    console.log(this.user);
    this.submitted = true;
  }
}
