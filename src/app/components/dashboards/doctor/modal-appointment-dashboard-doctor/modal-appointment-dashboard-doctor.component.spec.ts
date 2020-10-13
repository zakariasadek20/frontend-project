import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAppointmentDashboardDoctorComponent } from './modal-appointment-dashboard-doctor.component';

describe('ModalAppointmentDashboardDoctorComponent', () => {
  let component: ModalAppointmentDashboardDoctorComponent;
  let fixture: ComponentFixture<ModalAppointmentDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAppointmentDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAppointmentDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
