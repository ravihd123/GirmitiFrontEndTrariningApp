import { TestBed } from '@angular/core/testing';

import { AssignmentConfigrationService } from './assignment-configration.service';

describe('AssignmentConfigrationService', () => {
  let service: AssignmentConfigrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentConfigrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
