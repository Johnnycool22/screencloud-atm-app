import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmWithdrawComponent } from './atm-withdraw/atm-withdraw.component';
import { BalanceComponent } from './atm-withdraw/balance/balance.component';
import { CashWithdrawalComponent } from './atm-withdraw/cash-withdrawal/cash-withdrawal.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent },
  { path: 'atm-withdraw', component: AtmWithdrawComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'cash-withdrawal', component: CashWithdrawalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
