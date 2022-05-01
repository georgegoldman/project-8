import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentRouteGetterService } from '../current-route-getter.service';
import { InternetBillService } from '../internet-bill.service';
import { PackageAmount, Payment } from '../payment'

@Component({
  selector: 'app-internet-bill',
  templateUrl: './internet-bill.component.html',
  styleUrls: ['./internet-bill.component.css']
})
export class InternetBillComponent implements OnInit {

  packagesAmount!: PackageAmount
  isp!: string
  ispPackages!: PackageAmount[]

  internetBills: Payment = {
    name: '',
    route: '',
  }

  internetFormGroup = new FormGroup({
    amount: new FormControl('', Validators.required),
    package: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),

  })

  constructor(private internetBillService: InternetBillService, private currentRoute: CurrentRouteGetterService) { }

  ngOnInit(): void {
    this.getInternetBill();
    this.setISPString()

  }


  getInternetBill(): void {
    this.internetBillService.getInternetPayment()
      .subscribe(interBill => this.internetBills = interBill)
  }

  setISPString(): void {
    this.currentRoute.get()
      .subscribe(x => console.warn(x))
  }

  erroMessage(): string {
    return 'is required'
  }

  onSubmit(): void {
    console.warn(this.internetFormGroup.value)
  }
}
