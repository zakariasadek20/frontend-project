import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTimingsDashboardDoctorComponent } from './schedule-timings-dashboard-doctor.component';

describe('ScheduleTimingsDashboardDoctorComponent', () => {
  let component: ScheduleTimingsDashboardDoctorComponent;
  let fixture: ComponentFixture<ScheduleTimingsDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTimingsDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTimingsDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
