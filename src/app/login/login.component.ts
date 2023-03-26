import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'mattias'
  password = ''
  errorMessage = 'Ivalid Credentials'
  invalidLogin = false;

  constructor(private router: Router) { }

  handleLogin() {
    if(this.username.toLowerCase() === 'mattias' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
      console.log(this.username)
    } else {
      this.invalidLogin = true
    }
  }
}
