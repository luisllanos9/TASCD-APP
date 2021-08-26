import { TestBed } from '@angular/core/testing';

import { PampeService } from './pampe.service';

describe('PampeService', () => {
  let service: PampeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PampeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
