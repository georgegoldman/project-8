import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PAYMENTS } from './mock-payment';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getPayments(): Observable<Payment[]> {
    const payment = of(PAYMENTS);
    return payment
  }
}
