import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hide = true;

  _form!: FormGroup;
  message!: string;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this._form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/usuarios';
    this.authService.logout();
  }

  get f() { return this._form.controls; }

  model: Login = { email: "123@123.com", password: "123" }

  login() {
    // stop here if form is invalid  
    if (this._form.invalid) {
      return;
    }
    else {
      if (this.f.email.value == this.model.email && this.f.password.value == this.model.password) {
        console.log("Login successful");
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.email.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your email and password";
      }
    }
  }
}

