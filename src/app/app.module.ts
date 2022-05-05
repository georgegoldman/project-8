import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AirtimePageComponent } from './airtime-page/airtime-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternetBillComponent } from './internet-bill/internet-bill.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { CreditCardDialogComponent } from './credit-card-dialog/credit-card-dialog.component';
import { PaymentSuccessfullComponent } from './payment-successfull/payment-successfull.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AirtimePageComponent,
    PageNotFoundComponent,
    InternetBillComponent,
    ElectricityComponent,
    CreditCardDialogComponent,
    PaymentSuccessfullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
