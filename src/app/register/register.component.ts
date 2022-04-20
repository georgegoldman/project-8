import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide:boolean = true

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required])
  password = new FormControl('', Validators.required)

  getEmailErrorMessage():string {
    if(this.email.hasError('email')) return 'Please enter a valid email'
    return this.email.hasError('required') ? 'You must enter a email': '';
  }

  getUsernameErrorMessage():string {
    return this.username.hasError('required') ? 'You must enter a Username' : ''
  }

  getPasswordErrorMessage():string {
    return this.password.hasError('required') ? 'You must provide a password' : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
