import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacelleComponent } from './nacelle.component';

describe('NacelleComponent', () => {
  let component: NacelleComponent;
  let fixture: ComponentFixture<NacelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacelleComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
