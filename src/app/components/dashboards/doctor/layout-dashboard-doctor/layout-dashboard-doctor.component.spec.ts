import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDashboardDoctorComponent } from './layout-dashboard-doctor.component';

describe('DashboardDoctorComponent', () => {
  let component: LayoutDashboardDoctorComponent;
  let fixture: ComponentFixture<LayoutDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
