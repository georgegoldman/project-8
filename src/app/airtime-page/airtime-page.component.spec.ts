import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimePageComponent } from './airtime-page.component';

describe('AirtimePageComponent', () => {
  let component: AirtimePageComponent;
  let fixture: ComponentFixture<AirtimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtimePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
