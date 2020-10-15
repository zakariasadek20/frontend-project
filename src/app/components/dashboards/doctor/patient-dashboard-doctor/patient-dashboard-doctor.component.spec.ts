import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardDoctorComponent } from './patient-dashboard-doctor.component';

describe('PatientDashboardDoctorComponent', () => {
  let component: PatientDashboardDoctorComponent;
  let fixture: ComponentFixture<PatientDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
