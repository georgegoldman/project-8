import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-card-dialog',
  templateUrl: './credit-card-dialog.component.html',
  styleUrls: ['./credit-card-dialog.component.css']
})
export class CreditCardDialogComponent implements OnInit {

  card = new FormGroup({
    cardNumber: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required)
  })

  constructor(public dialogRef: MatDialogRef<CreditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void{
      this.dialogRef.close()
    }

    erroMessage(): string {
      return 'is required'
    }

  ngOnInit(): void {
  }

}
