import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRoteiro2Component } from './lista-roteiro2.component';

describe('ListaRoteiro2Component', () => {
  let component: ListaRoteiro2Component;
  let fixture: ComponentFixture<ListaRoteiro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRoteiro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRoteiro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
