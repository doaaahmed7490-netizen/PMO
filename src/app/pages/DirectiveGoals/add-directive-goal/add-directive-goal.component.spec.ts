import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDirectiveGoalComponent } from './add-directive-goal.component';

describe('AddDirectiveGoalComponent', () => {
  let component: AddDirectiveGoalComponent;
  let fixture: ComponentFixture<AddDirectiveGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDirectiveGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDirectiveGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
