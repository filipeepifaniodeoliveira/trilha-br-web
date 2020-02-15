import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiro1Dia2Component } from './carrousel-roteiro1-dia2.component';

describe('CarrouselRoteiro1Dia2Component', () => {
  let component: CarrouselRoteiro1Dia2Component;
  let fixture: ComponentFixture<CarrouselRoteiro1Dia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiro1Dia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiro1Dia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
