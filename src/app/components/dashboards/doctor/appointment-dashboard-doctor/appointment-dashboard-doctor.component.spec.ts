import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDashboardDoctorComponent } from './appointment-dashboard-doctor.component';

describe('AppointmentDashboardDoctorComponent', () => {
  let component: AppointmentDashboardDoctorComponent;
  let fixture: ComponentFixture<AppointmentDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
