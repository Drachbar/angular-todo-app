import {Component, OnInit} from '@angular/core';
// import { AppComponent } from "../app.component";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'

  ngOnInit(): void {
    console.log(this.message)
  }
}

export class Class1 {

}
