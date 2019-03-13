import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaPage } from './rona.page';

describe('RonaPage', () => {
  let component: RonaPage;
  let fixture: ComponentFixture<RonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
