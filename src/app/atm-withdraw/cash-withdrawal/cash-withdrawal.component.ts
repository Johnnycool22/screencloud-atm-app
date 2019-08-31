import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cash-withdrawal',
  templateUrl: './cash-withdrawal.component.html',
  styleUrls: ['./cash-withdrawal.component.css']
})
export class CashWithdrawalComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const withdraw = form.value.withdraw;
    form.resetForm();
    }

  ngOnInit() {
  }

}
