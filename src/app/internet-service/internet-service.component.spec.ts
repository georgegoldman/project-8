import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetServiceComponent } from './internet-service.component';

describe('InternetServiceComponent', () => {
  let component: InternetServiceComponent;
  let fixture: ComponentFixture<InternetServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
