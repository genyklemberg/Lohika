import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = false;
  display_reg: boolean = false;
  display_forgot_pass: boolean = false;

  login() {
    this.display = true;
    console.log('login');
  }
  register() {
    this.display_reg = true;
    console.log('register');
  }

  forgot() {
      this.display_forgot_pass = true;
      console.log('forgot');
  }

  selectedValues: string[] = [];

}
