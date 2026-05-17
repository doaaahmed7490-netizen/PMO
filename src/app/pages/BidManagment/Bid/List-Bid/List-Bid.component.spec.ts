/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListBidComponent } from './List-Bid.component';

describe('ListBidComponent', () => {
  let component: ListBidComponent;
  let fixture: ComponentFixture<ListBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
