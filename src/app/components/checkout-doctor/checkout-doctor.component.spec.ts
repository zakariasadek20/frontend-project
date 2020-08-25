import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDoctorComponent } from './checkout-doctor.component';

describe('CheckoutDoctorComponent', () => {
  let component: CheckoutDoctorComponent;
  let fixture: ComponentFixture<CheckoutDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
