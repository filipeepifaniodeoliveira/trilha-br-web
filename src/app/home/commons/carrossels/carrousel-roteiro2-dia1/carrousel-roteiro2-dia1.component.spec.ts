import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiro2Dia1Component } from './carrousel-roteiro2-dia1.component';

describe('CarrouselRoteiro2Dia1Component', () => {
  let component: CarrouselRoteiro2Dia1Component;
  let fixture: ComponentFixture<CarrouselRoteiro2Dia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiro2Dia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiro2Dia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
