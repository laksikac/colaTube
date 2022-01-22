import { TestBed } from '@angular/core/testing';

import { ClipApiService } from './clip-api.service';

describe('ClipApiService', () => {
  let service: ClipApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
