import { TestBed } from '@angular/core/testing';

import { ElementServices } from './element.service';

describe('ElementService', () => {
  let service: ElementServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
