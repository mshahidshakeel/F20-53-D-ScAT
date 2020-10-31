import { TestBed } from '@angular/core/testing';

import { RawNewsService } from './raw-news.service';

describe('RawNewsService', () => {
  let service: RawNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
