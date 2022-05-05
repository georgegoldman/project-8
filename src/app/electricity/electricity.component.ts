import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ElectricityService } from '../electricity.service';
import { Package } from '../payment';
import { PackagesService } from '../service/packages.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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

  setAmount(packageName: string): void {
    this.getPackages.getPackages()
      .subscribe(e => {
        e.forEach(a => {
          if(a.packageName === packageName) this.electricityFormGroup.controls['amount'].setValue(a.packageAmount)
        })
      })
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

    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
        }
      )
  }

  onSubmit(): void {
    console.warn(this.electricityFormGroup.getRawValue())
    this.openDialog()
  }

}

