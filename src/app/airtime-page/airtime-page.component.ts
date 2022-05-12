
import { Component} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {  FormControl, FormGroup,  Validators } from '@angular/forms';
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

    const transactionId = "this is your trancation id #3783000878_ for tracking"

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

  erroMessage(): string {
    return 'is required'
  }

  setNetwork(): void{
    this.getServices.getAirtimePayment()
      .subscribe(e => e.forEach(i => this.route.params.forEach(x => {if(i.serviceRoute === x['id']) this.airtime.controls['network'].setValue(i.serviceName) })))
  }

}

