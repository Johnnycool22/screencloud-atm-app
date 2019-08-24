import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const pin = form.value.pin;

    this.authService.signin(pin).subscribe(resData => {
      console.log(resData);
    }, error => {
      console.log(error);
    });

    form.reset();
  }

  ngOnInit() {
  }

}
