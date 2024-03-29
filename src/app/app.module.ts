import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HelloComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
