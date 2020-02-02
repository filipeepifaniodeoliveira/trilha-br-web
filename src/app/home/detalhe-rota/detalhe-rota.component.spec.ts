import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRotaComponent } from './detalhe-rota.component';

describe('DetalheRotaComponent', () => {
  let component: DetalheRotaComponent;
  let fixture: ComponentFixture<DetalheRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
