import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiro1Dia3Component } from './carrousel-roteiro1-dia3.component';

describe('CarrouselRoteiro1Dia3Component', () => {
  let component: CarrouselRoteiro1Dia3Component;
  let fixture: ComponentFixture<CarrouselRoteiro1Dia3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiro1Dia3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiro1Dia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
