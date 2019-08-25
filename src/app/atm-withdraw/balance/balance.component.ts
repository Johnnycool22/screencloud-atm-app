import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/balance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  pin: number;
  currentBalance: Balance;

  constructor() { }

  ngOnInit() {
  }

}
