import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AtmWithdrawComponent } from './atm-withdraw/atm-withdraw.component';
import { HttpClientModule } from '@angular/common/http';
import { BalanceComponent } from './atm-withdraw/balance/balance.component';
import { CashWithdrawalComponent } from './atm-withdraw/cash-withdrawal/cash-withdrawal.component';
import { HomeLandingComponent } from './home/home-landing/home-landing.component';
import { DddComponent } from './ddd/ddd.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    HomeComponent,
    AtmWithdrawComponent,
    BalanceComponent,
    CashWithdrawalComponent,
    HomeLandingComponent,
    DddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
