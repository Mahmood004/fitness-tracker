import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  minDate;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
    this.minDate.setFullYear(this.minDate.getFullYear() - 20);
    console.log(this.maxDate.getFullYear());
    console.log(this.minDate.getFullYear());
  }

  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
