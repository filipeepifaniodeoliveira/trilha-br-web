import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperoGramadoComponent } from './tempero-gramado.component';

describe('TemperoGramadoComponent', () => {
  let component: TemperoGramadoComponent;
  let fixture: ComponentFixture<TemperoGramadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperoGramadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperoGramadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
