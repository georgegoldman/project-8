import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InternetBillService } from '../internet-bill.service';
import { Payment } from '../payment'

@Component({
  selector: 'app-internet-bill',
  templateUrl: './internet-bill.component.html',
  styleUrls: ['./internet-bill.component.css']
})
export class InternetBillComponent implements OnInit {

  isp!: string

  internetBills: Payment = {
    name: '',
    route: '',
    provider: []
  }

  internetFormGroup = new FormGroup({
    amount: new FormControl('', Validators.required),
    package: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),

  })

  constructor(private internetBillService: InternetBillService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInternetBill();
    this.route.params
      .forEach(element => {
        this.internetBills.provider.forEach((service) => {
          if (service.subRoute === element['id']){
            this.isp = service.serviceProvider
          }
        })
      })

  }

  getInternetBill(): void {
    this.internetBillService.getInternetPayment()
      .subscribe(interBill => this.internetBills = interBill)
  }

  erroMessage(): string {
    return 'is required'
  }

  onSubmit(): void {
    console.warn(this.internetFormGroup.value)
  }
}
