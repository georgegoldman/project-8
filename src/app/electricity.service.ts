import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from './payment';
import { PAYMENTS } from './mock-payment';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {

  constructor() { }

  getElectricityPayment(): Observable<Service[]> {
    const electricityPackages = of(PAYMENTS[2].packages)
    return electricityPackages
  }
}
