import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookDoctorComponent } from './home-book-doctor.component';

describe('HomeBookDoctorComponent', () => {
  let component: HomeBookDoctorComponent;
  let fixture: ComponentFixture<HomeBookDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBookDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
