import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvailableFeaturesComponent } from './home-available-features.component';

describe('HomeAvailableFeaturesComponent', () => {
  let component: HomeAvailableFeaturesComponent;
  let fixture: ComponentFixture<HomeAvailableFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAvailableFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAvailableFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
