import { Injectable } from '@angular/core';
import { Payment } from './payment';
import { PAYMENTS } from './mock-payment'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  getPayments(): Payment[] {
    return PAYMENTS;
  }
}
