import { TestBed } from '@angular/core/testing';

import { SpecialitieService } from './specialitie.service';

describe('SpecialitieService', () => {
  let service: SpecialitieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialitieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
