import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirectiveGoalComponent } from './list-directive-goal.component';

describe('ListDirectiveGoalComponent', () => {
  let component: ListDirectiveGoalComponent;
  let fixture: ComponentFixture<ListDirectiveGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDirectiveGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDirectiveGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
