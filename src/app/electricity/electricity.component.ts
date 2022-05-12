import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ElectricityService } from '../electricity.service';
import { Package } from '../payment';
import { PackagesService } from '../service/packages.service';

import { MatDialog } from '@angular/material/dialog';
import { CreditCardDialogComponent } from '../credit-card-dialog/credit-card-dialog.component';

export interface DialogData {
  provider: string;
  package: string;
  amount: string;
  meterNo: string;
}

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  packages: Package[]= []

  electricityFormGroup = new FormGroup({
    provider: new FormControl(''),
    package: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    meterNo: new FormControl('', Validators.required)
  })

  constructor(private electricityBilService: ElectricityService,
    private getPackages: PackagesService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  setProvider(): void{
    this.electricityBilService.getElectricityPayment()
      .subscribe(e => e.forEach(i => this.route.params.forEach(
        r => {
          if(i.serviceRoute === r['id']) this.electricityFormGroup.controls['provider'].setValue(i.serviceName)
        }
      )))
  }

  setPackages(): void {
    this.getPackages.getPackages()
      .subscribe(y => y.forEach( x => {
        this.route.params.forEach(
          r => {
            if(x.packageType === r['id']) this.packages.push(x)
          }
        )
      }))
  }

  getAmountError():string {
    if ( this.electricityFormGroup.controls['amount'].value < 50)
    {
      return this.electricityFormGroup.controls['amount'].value
    }
    return this.electricityFormGroup.controls['amount'].hasError('required') ? this.electricityFormGroup.controls['amount'].value : ''
  }

  erroMessage(): string {
    return 'is required'
  }

  ngOnInit(): void {
    this.setProvider()
    this.setPackages()
    this.electricityFormGroup.controls['provider'].disable()
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreditCardDialogComponent, {

      data: this.electricityFormGroup.getRawValue()
    })

    const transactionId = "this is your trancation id #3783753878_ for tracking"

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
    this.openDialog()
  }

}

