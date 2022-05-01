import { digest } from '@angular/compiler/src/i18n/digest';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrentRouteGetterService } from './current-route-getter.service';
import { PAYMENTS } from './mock-payment';
import {  PackageAmount, Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class InternetBillService {
  ispPackages!: PackageAmount[]
  ISPs: Payment = PAYMENTS[1]

  constructor(private currentRoute: CurrentRouteGetterService) { }

  getInternetPayment(): Observable<Payment> {
    const internetPlans = of(this.ISPs)
    return internetPlans
  }
  getInternetPaymentPackages(x:string): void {
    this.getInternetPayment()
      .subscribe(x => console.warn(x))
  }
}

