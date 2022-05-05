
import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AirtimeService } from '../airtime.service';
import { CreditCardDialogComponent } from '../credit-card-dialog/credit-card-dialog.component';
export interface DialogData {
  network: string;
  amount: string;
  tel: string;
}


@Component({
  selector: 'app-airtime-page',
  templateUrl: 'airtime-page.component.html',
  styleUrls: ['airtime-page.component.css']
})
export class AirtimePageComponent{



  airtime = new FormGroup({
    network: new FormControl(''),
    amount : new FormControl('', Validators.required),
    tel : new FormControl('', Validators.required),

  })


  constructor(private route: ActivatedRoute, private getServices: AirtimeService, public dialog: MatDialog) {}

  ngOnInit() {
    this.setNetwork()
    this.airtime.controls['network'].disable()
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreditCardDialogComponent, {

      data: this.airtime.getRawValue()
    })

    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log(result);
        }
      )
  }

  onSubmit(): void {
    console.warn(this.airtime.getRawValue())
    this.openDialog()
  }

  erroMessage(): string {
    return 'is required'
  }

  setNetwork(): void{
    this.getServices.getAirtimePayment()
      .subscribe(e => e.forEach(i => this.route.params.forEach(x => {if(i.serviceRoute === x['id']) this.airtime.controls['network'].setValue(i.serviceName) })))
  }

}


// @Component({
//   selector: 'dialog-overview-dialog',
//   templateUrl: 'dialog-overview-dialog.html'
// })
// export class DialogOverviewDialog {

//   card = new FormGroup({
//     cardNumber: new FormControl('', Validators.required),
//     month: new FormControl('', Validators.required),
//     year: new FormControl('', Validators.required),
//     cvc: new FormControl('', Validators.required)
//   })

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ){}

//   onNoClick(): void {
//     this.dialogRef.close()
//   }

//   erroMessage(): string {
//     return 'is required'
//   }
// }
