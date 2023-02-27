import { Component } from '@angular/core';

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

  handleLogin() {
    if(this.username === 'mattias' && this.password === 'dummy') {
      this.invalidLogin = false
      console.log(this.username)
    } else {
      this.invalidLogin = true
    }
  }
}
