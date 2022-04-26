import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';

import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators
} from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-airtime-page',
  templateUrl: 'airtime-page.component.html',
  styleUrls: ['airtime-page.component.css']
})
export class AirtimePageComponent{
  // network!: FormGroup;
  airtime = new FormGroup({
    network : new FormControl('', Validators.required),
    amount : new FormControl('', Validators.required),
    tel : new FormControl('', Validators.required),

  })

  onSubmit(): void {
    console.warn(this.airtime.value)
  }

  erroMessage(): string {
    return 'is required'
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .forEach(element => this.airtime.controls['network'].setValue(element['id']))
  }
}

