import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreditCardDialogComponent } from '../credit-card-dialog/credit-card-dialog.component';
import { InternetBillService } from '../internet-bill.service';
import { Package } from '../payment'
import { PackagesService } from '../service/packages.service';

@Component({
  selector: 'app-internet-bill',
  templateUrl: './internet-bill.component.html',
  styleUrls: ['./internet-bill.component.css']
})
export class InternetBillComponent implements OnInit {

  packages: Package[] = []

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

    const transactionId = "this is your trancation id #37821200378_ for tracking"

    dialogRef.afterClosed()
      .subscribe(
        y => {
          if(y === undefined){
            alert('Transaction canceled')
          }else{
            alert(transactionId)
          }
        }
      )
  }

  onSubmit(): void {
    console.warn(this.internetFormGroup.getRawValue())
    this.openDialog()
  }
}
