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
    console.log(form);
    if (!form.valid) {
      return;
    }

    form.resetForm();
    }

  ngOnInit() {
  }
}
