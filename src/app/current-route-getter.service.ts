import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouteGetterService {

  constructor(private router: Router) { }

  get(i: string): void{
    this.router.url.match(i)
  }

}
