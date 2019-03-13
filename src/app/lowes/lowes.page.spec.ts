import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowesPage } from './lowes.page';

describe('LowesPage', () => {
  let component: LowesPage;
  let fixture: ComponentFixture<LowesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
