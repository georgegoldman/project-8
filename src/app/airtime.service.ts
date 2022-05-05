import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYMENTS, PROVIDERS } from './mock-payment';
import { Service } from './payment';

@Injectable({
  providedIn: 'root'
})
export class AirtimeService {

  constructor() { }

  getAirtimePayment(): Observable<Service[]>{
    const airtimePayment = of(PAYMENTS[0].packages)
    return airtimePayment
  }
}
