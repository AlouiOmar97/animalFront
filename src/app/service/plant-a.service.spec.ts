import { TestBed } from '@angular/core/testing';

import { PlantAService } from './plant-a.service';

describe('PlantAService', () => {
  let service: PlantAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
