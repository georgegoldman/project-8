import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payments:Payment[] = []

  constructor(private homeService: HomeService) { }

  getPayments():void {
    this.homeService.getPayments()
      .subscribe(payments => this.payments = payments)
  }

  ngOnInit(): void {
    this.getPayments()
  }

}
