/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListContractComponent } from './List-Contract.component';

describe('ListContractComponent', () => {
  let component: ListContractComponent;
  let fixture: ComponentFixture<ListContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
