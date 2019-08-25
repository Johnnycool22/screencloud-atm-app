import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-atm-withdraw',
  templateUrl: './atm-withdraw.component.html',
  styleUrls: ['./atm-withdraw.component.css']
})
export class AtmWithdrawComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  showBalance() {
    this.authService.getBalance().subscribe();
  }

  ngOnInit() {
  }
  }
