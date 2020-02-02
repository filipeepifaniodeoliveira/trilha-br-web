import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRoteiroComponent } from './lista-roteiro.component';

describe('ListaRoteiroComponent', () => {
  let component: ListaRoteiroComponent;
  let fixture: ComponentFixture<ListaRoteiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRoteiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRoteiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
