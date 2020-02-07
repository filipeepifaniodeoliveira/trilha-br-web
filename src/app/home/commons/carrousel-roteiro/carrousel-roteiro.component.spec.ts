import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselRoteiroComponent } from './carrousel-roteiro.component';

describe('CarrouselRoteiroComponent', () => {
  let component: CarrouselRoteiroComponent;
  let fixture: ComponentFixture<CarrouselRoteiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselRoteiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselRoteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
