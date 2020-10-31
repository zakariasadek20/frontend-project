import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddTimeSlotsDashboardDoctorComponent } from './modal-add-time-slots-dashboard-doctor.component';

describe('ModalAddTimeSlotsDashboardDoctorComponent', () => {
  let component: ModalAddTimeSlotsDashboardDoctorComponent;
  let fixture: ComponentFixture<ModalAddTimeSlotsDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddTimeSlotsDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddTimeSlotsDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
