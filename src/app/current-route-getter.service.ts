import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouteGetterService {

  routeVal!: string;

  constructor(private route: ActivatedRoute) { }

  get(): Observable<any> {
    const theRoute = this.route.params
    return theRoute
  }
}
