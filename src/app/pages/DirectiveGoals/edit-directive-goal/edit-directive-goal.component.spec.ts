import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectiveGoalComponent } from './edit-directive-goal.component';

describe('EditDirectiveGoalComponent', () => {
  let component: EditDirectiveGoalComponent;
  let fixture: ComponentFixture<EditDirectiveGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirectiveGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirectiveGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
