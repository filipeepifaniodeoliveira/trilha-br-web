import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiro2Dia3Component } from './carrousel-roteiro2-dia3.component';

describe('CarrouselRoteiro2Dia3Component', () => {
  let component: CarrouselRoteiro2Dia3Component;
  let fixture: ComponentFixture<CarrouselRoteiro2Dia3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiro2Dia3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiro2Dia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
