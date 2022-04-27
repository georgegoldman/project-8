import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYMENTS } from './mock-payment';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class InternetBillService {

  constructor() { }

  getInternetPayment(): Observable<Payment> {
    const internetPlans = of(PAYMENTS[1])
    return internetPlans
  }
}
