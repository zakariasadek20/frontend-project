import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClinicSpecialitiesComponent } from './home-clinic-specialities.component';

describe('HomeClinicSpecialitiesComponent', () => {
  let component: HomeClinicSpecialitiesComponent;
  let fixture: ComponentFixture<HomeClinicSpecialitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClinicSpecialitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeClinicSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
