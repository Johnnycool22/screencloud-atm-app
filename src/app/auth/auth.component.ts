import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public key = '';
  searchValue = '';

  constructor(private authService: AuthService, private router: Router) { }

  onClick(event) {
    console.log(event);
    this.key = event.type;
  }

  clearSearch() {
    this.searchValue = null;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const pin = form.value.pin;

    this.authService.signin(pin).subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/atm-withdraw']);
    }, error => {
      console.log(error);
    });

    form.resetForm();
  }

  ngOnInit() {
  }
}
