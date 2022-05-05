import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROVIDERS } from '../mock-payment';
import { Provider, Service } from '../payment';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor() { }

  getProviders(): Observable<Service[]> {
    const providers = of(PROVIDERS)
    return providers
  }
}
