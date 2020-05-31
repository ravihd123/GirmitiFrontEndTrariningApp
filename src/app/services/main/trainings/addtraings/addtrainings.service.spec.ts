import { TestBed } from '@angular/core/testing';

import { AddtrainingsService } from './addtrainings.service';

describe('AddtrainingsService', () => {
  let service: AddtrainingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtrainingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
