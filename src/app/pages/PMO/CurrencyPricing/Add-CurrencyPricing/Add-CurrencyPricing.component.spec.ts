/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddCurrencyPricingComponent } from './Add-CurrencyPricing.component';

describe('AddCurrencyPricingComponent', () => {
  let component: AddCurrencyPricingComponent;
  let fixture: ComponentFixture<AddCurrencyPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrencyPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
