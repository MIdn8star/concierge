import { TestBed } from '@angular/core/testing';

import { Floor } from './floor';

describe('Floor', () => {
  let service: Floor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Floor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
