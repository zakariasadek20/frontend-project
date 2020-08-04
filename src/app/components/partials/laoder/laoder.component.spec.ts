import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaoderComponent } from './laoder.component';

describe('LaoderComponent', () => {
  let component: LaoderComponent;
  let fixture: ComponentFixture<LaoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
