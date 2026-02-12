import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStrategicGoalComponent } from './edit-strategic-goal.component';

describe('EditStrategicGoalComponent', () => {
  let component: EditStrategicGoalComponent;
  let fixture: ComponentFixture<EditStrategicGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStrategicGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStrategicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
