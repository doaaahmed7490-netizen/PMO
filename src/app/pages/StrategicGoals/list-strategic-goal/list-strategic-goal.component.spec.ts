import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStrategicGoalComponent } from './list-strategic-goal.component';

describe('ListStrategicGoalComponent', () => {
  let component: ListStrategicGoalComponent;
  let fixture: ComponentFixture<ListStrategicGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStrategicGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStrategicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
