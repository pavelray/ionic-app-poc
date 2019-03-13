import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeModalPage } from './barcode-modal.page';

describe('BarcodeModalPage', () => {
  let component: BarcodeModalPage;
  let fixture: ComponentFixture<BarcodeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
