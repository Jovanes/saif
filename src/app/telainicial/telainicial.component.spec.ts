import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialComponent } from './telainicial.component';

describe('TelainicialComponent', () => {
  let component: TelainicialComponent;
  let fixture: ComponentFixture<TelainicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelainicialComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelainicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
