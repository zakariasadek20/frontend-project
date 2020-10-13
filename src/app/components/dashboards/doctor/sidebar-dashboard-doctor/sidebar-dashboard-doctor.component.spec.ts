import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDashboardDoctorComponent } from './sidebar-dashboard-doctor.component';

describe('SidebarDashboardDoctorComponent', () => {
  let component: SidebarDashboardDoctorComponent;
  let fixture: ComponentFixture<SidebarDashboardDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDashboardDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDashboardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
