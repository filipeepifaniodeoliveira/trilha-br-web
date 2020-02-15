import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedraSilencioComponent } from './pedra-silencio.component';

describe('PedraSilencioComponent', () => {
  let component: PedraSilencioComponent;
  let fixture: ComponentFixture<PedraSilencioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedraSilencioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedraSilencioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
