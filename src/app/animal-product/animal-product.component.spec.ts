import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProductComponent } from './animal-product.component';

describe('AnimalProductComponent', () => {
  let component: AnimalProductComponent;
  let fixture: ComponentFixture<AnimalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
