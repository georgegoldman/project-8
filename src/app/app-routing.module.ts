import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AirtimePageComponent } from './airtime-page/airtime-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternetBillComponent } from './internet-bill/internet-bill.component';
import { ElectricityComponent } from './electricity/electricity.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'airtime/:id', component: AirtimePageComponent},
  {path: 'internet-bills/:id', component: InternetBillComponent},
  {path: 'electricity/:id', component: ElectricityComponent},

  {path: '**', component: PageNotFoundComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
