import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMilestoneComponent } from './list-milestone.component';

describe('ListMilestoneComponent', () => {
  let component: ListMilestoneComponent;
  let fixture: ComponentFixture<ListMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMilestoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
