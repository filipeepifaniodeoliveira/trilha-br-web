import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueOlivaComponent } from './parque-oliva.component';

describe('ParqueOlivaComponent', () => {
  let component: ParqueOlivaComponent;
  let fixture: ComponentFixture<ParqueOlivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueOlivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueOlivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
