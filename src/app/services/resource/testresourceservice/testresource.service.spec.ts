import { TestBed } from '@angular/core/testing';

import { TestresourceService } from './testresource.service';

describe('TestresourceService', () => {
  let service: TestresourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestresourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
