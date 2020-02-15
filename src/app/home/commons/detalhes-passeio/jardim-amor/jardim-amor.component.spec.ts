import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JardimAmorComponent } from './jardim-amor.component';

describe('JardimAmorComponent', () => {
  let component: JardimAmorComponent;
  let fixture: ComponentFixture<JardimAmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JardimAmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JardimAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
