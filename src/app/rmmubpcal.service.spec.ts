import { TestBed } from '@angular/core/testing';

import { RmmubpcalService } from './rmmubpcal.service';

describe('RmmubpcalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RmmubpcalService = TestBed.get(RmmubpcalService);
    expect(service).toBeTruthy();
  });
});
