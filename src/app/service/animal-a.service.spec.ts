import { TestBed } from '@angular/core/testing';

import { AnimalAService } from './animal-a.service';

describe('AnimalAService', () => {
  let service: AnimalAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
