import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAComponent } from './animal-a.component';

describe('AnimalAComponent', () => {
  let component: AnimalAComponent;
  let fixture: ComponentFixture<AnimalAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
