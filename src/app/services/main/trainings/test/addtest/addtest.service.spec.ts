import { TestBed } from '@angular/core/testing';

import { AddtestService } from './addtest.service';

describe('AddtestService', () => {
  let service: AddtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
