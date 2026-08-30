/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPositionComponent } from './List-Position.component';

describe('ListPositionComponent', () => {
  let component: ListPositionComponent;
  let fixture: ComponentFixture<ListPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
