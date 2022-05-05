import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PACKAGE } from '../mock-payment';
import { Package } from '../payment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }

  getPackages(): Observable<Package[]>{
    const packages = of(PACKAGE)
    return packages
  }
}
