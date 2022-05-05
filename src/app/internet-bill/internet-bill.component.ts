import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardDialogComponent } from '../credit-card-dialog/credit-card-dialog.component';
import { CurrentRouteGetterService } from '../current-route-getter.service';
import { InternetBillService } from '../internet-bill.service';
import { Package, PackageAmount, Payment } from '../payment'
import { PackagesService } from '../service/packages.service';

@Component({
  selector: 'app-internet-bill',
  templateUrl: './internet-bill.component.html',
  styleUrls: ['./internet-bill.component.css']
})
export class InternetBillComponent implements OnInit {

  packages: Package[] = []

  // internetBills: Payment

  internetFormGroup = new FormGroup({
    provider: new FormControl(''),
    package: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),

  })

  constructor(private internetBillService: InternetBillService,
    private getPackages: PackagesService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setProvider()
    this.internetFormGroup.controls['provider'].disable()
    this.internetFormGroup.controls['amount'].disable()
    this.setPackage()
    // console.log(this.packages)
  }


  setProvider():void{
    this.internetBillService.getInternetPayment()
      .subscribe(e => e.forEach(i => this.route.params.forEach(x => {if(i.serviceRoute === x['id']) this.internetFormGroup.controls['provider'].setValue(i.serviceName)})))
  }

  setPackage(): void {
    this.getPackages.getPackages()
      .subscribe(x => x.forEach(
        y => {
          this.route.params.forEach(r => {
            if(y.packageType === r['id']) this.packages.push(y)
          })
        }
      ))
  }

  setAmount(packageName: string): void {
    this.getPackages.getPackages()
      .subscribe(e => {
        e.forEach(i => {
          if(i.packageName === packageName) this.internetFormGroup.controls['amount'].setValue(i.packageAmount)
        })
      })
  }

  erroMessage(): string {
    return 'is required'
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreditCardDialogComponent, {
    })

    dialogRef.afterClosed()
      .subscribe(
        y => {
          console.log(y);
        }
      )
  }

  onSubmit(): void {
    console.warn(this.internetFormGroup.getRawValue())
    this.openDialog()
  }
}
