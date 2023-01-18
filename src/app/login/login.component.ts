import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  show: boolean = false

  constructor(private appComponent: AppComponent, private router: Router) { }

  login() {
    this.router.navigate(['dashboard'])
  }

  password() {
    this.show = !this.show
  }

  ngOnInit() {
    this.appComponent.isLoggedIn = false
  }
}
