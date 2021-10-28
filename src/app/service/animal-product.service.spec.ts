import { TestBed } from '@angular/core/testing';

import { AnimalProductService } from './animal-product.service';

describe('AnimalProductService', () => {
  let service: AnimalProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
