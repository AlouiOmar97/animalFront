import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantAComponent } from './plant-a.component';

describe('PlantAComponent', () => {
  let component: PlantAComponent;
  let fixture: ComponentFixture<PlantAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
