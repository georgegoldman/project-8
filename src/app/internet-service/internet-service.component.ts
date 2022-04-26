import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-internet-service',
  templateUrl: './internet-service.component.html',
  styleUrls: ['./internet-service.component.css']
})
export class InternetServiceComponent implements OnInit {

  internet = new FormGroup({
    service_provider: new FormControl(''),
    package: new FormControl(''),
    amount: new FormControl(''),
    customer_id: new FormControl(''),
  })

  constructor() { }

  onSubmit(): void {
    console.warn(this.internet.value)
  }

  erroMessage(): string {
    return 'is required'
  }

  ngOnInit(): void {
  }

}
