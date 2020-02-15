import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiro2Dia2Component } from './carrousel-roteiro2-dia2.component';

describe('CarrouselRoteiro2Dia2Component', () => {
  let component: CarrouselRoteiro2Dia2Component;
  let fixture: ComponentFixture<CarrouselRoteiro2Dia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiro2Dia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiro2Dia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
