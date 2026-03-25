/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCurrencyPricingComponent } from './List-CurrencyPricing.component';

describe('ListCurrencyPricingComponent', () => {
  let component: ListCurrencyPricingComponent;
  let fixture: ComponentFixture<ListCurrencyPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCurrencyPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurrencyPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
