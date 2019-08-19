import { TestBed } from '@angular/core/testing';

import { StoreallinputService } from './storeallinput.service';

describe('StoreallinputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreallinputService = TestBed.get(StoreallinputService);
    expect(service).toBeTruthy();
  });
});
