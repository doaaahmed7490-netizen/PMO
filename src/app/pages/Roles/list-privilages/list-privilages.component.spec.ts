import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrivilagesComponent } from './list-privilages.component';

describe('ListPrivilagesComponent', () => {
  let component: ListPrivilagesComponent;
  let fixture: ComponentFixture<ListPrivilagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrivilagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrivilagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
