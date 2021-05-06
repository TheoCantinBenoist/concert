import { TestBed } from '@angular/core/testing';

import { GestconcertService } from './gestconcert.service';

describe('GestconcertService', () => {
  let service: GestconcertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestconcertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
