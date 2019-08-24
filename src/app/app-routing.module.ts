import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmWithdrawComponent } from './atm-withdraw/atm-withdraw.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'atm-withdraw', component: AtmWithdrawComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
