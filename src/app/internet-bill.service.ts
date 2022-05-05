import { digest } from '@angular/compiler/src/i18n/digest';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrentRouteGetterService } from './current-route-getter.service';
import { PAYMENTS } from './mock-payment';
import {  PackageAmount, Payment, Service } from './payment';

@Injectable({
  providedIn: 'root'
})
export class InternetBillService {

  constructor() { }

  getInternetPayment(): Observable<Service[]> {
    const internetPackages = of(PAYMENTS[1].packages)
    return internetPackages
  }

}

