import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payments:Payment[] = []

  constructor(private paymentService: PaymentService) { }

  getPayments():void {
    this.payments = this.paymentService.getPayments();
  }

  ngOnInit(): void {
    this.getPayments()
  }

}
