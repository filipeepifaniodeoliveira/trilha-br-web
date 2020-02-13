import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRota2Component } from './detalhe-rota2.component';

describe('DetalheRota2Component', () => {
  let component: DetalheRota2Component;
  let fixture: ComponentFixture<DetalheRota2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRota2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRota2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
