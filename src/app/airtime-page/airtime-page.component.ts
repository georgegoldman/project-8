import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Airtime } from './airtimeInt';

@Component({
  selector: 'app-airtime-page',
  templateUrl: './airtime-page.component.html',
  styleUrls: ['./airtime-page.component.css']
})
export class AirtimePageComponent implements OnInit {
  form: FormGroup;
  airTimeProviders: Airtime[] = []
  airtime  = new HomeComponent()
  airtime.typesOfServices
  constructor() { }


  ngOnInit(): void {
  }

}
