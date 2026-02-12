import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStrategicGoalComponent } from './add-strategic-goal.component';

describe('AddStrategicGoalComponent', () => {
  let component: AddStrategicGoalComponent;
  let fixture: ComponentFixture<AddStrategicGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStrategicGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStrategicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
