import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaPastelComponent } from './casa-pastel.component';

describe('CasaPastelComponent', () => {
  let component: CasaPastelComponent;
  let fixture: ComponentFixture<CasaPastelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaPastelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
