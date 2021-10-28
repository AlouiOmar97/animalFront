import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalADetailComponent } from './animal-adetail.component';

describe('AnimalADetailComponent', () => {
  let component: AnimalADetailComponent;
  let fixture: ComponentFixture<AnimalADetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalADetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalADetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
