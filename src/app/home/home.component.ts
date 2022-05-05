import { Component, OnInit } from '@angular/core';
import { Payment, Service } from '../payment';
import { HomeService } from '../home.service';
import { ProvidersService } from '../service/providers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payments:Payment[] = []
  providers: Service[] = []

  constructor(private homeService: HomeService, private provider: ProvidersService) { }

  getPayments():void {
    this.homeService.getPayments()
      .subscribe(payments => this.payments = payments)
  }

  getProviders(): void {
    this.provider.getProviders()
      .subscribe(providers => this.providers = providers)
  }

  ngOnInit(): void {
    this.getPayments()
    this.getProviders()
  }

}
