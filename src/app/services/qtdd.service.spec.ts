import { TestBed } from '@angular/core/testing';

import { QTDDService } from './qtdd.service';

describe('QTDDService', () => {
  let service: QTDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QTDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
