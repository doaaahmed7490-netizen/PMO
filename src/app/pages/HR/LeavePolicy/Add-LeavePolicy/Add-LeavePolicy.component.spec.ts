/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddLeavePolicyComponent } from './Add-LeavePolicy.component';

describe('AddLeavePolicyComponent', () => {
  let component: AddLeavePolicyComponent;
  let fixture: ComponentFixture<AddLeavePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeavePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeavePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
