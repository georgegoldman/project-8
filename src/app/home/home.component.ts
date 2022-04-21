import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typesOfServices = [
    {
      name: 'Buy Airtime',
      provider: ['MTN', 'GLO', '9Mobile', 'AIRTEL' ]
    },
    {
      name: 'Pay Internet Bill',
      provider: [
        'Spectranet Limited',
        'Smile Bundle',
        'Ipnx Subscription Payments',
        'Mtn Vtu Plus Data Plan',
        '9Mobile Recharge(e-top Up)',
        'Airtel Prepaid Data Bundle',
        'Airtel Voice, Data & Sms Bundles',
        'Glo Data Bundle',
      ]
    },
    {
      name: 'Pay TV Bill',
      provider: [
        'Dstv Box Office Wallet Topup',
        'Dstv Subcription',
        'Gotv',
        'Startimes Payments'
      ]
    },
    {
      name: 'Pay Electricity Bill',
      provider: [
        'Benin EDC',
        'Eko EDC',
        'Enugu EDC',
        'Ibadan EDC',
        'Ikeja EDC',
        'Jos EDC',
        'Kaduna EDC',
        'Abuja EDC',
        'Kedco',
        'PHed Postpaid'
      ]
    },
    {
      name: 'Pay for Betting',
      provider: [
        'Nairabet',
        '1xbet',
        'Bet9ja',
        'BetKing',
        'Betway',
        'Merrybet Gold Limited',
        'Sportybet',
        'Winners Golden Bet'
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
