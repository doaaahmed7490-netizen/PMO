import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyExceptionDialogComponent } from './survey-exception-dialog.component';

describe('SurveyExceptionDialogComponent', () => {
  let component: SurveyExceptionDialogComponent;
  let fixture: ComponentFixture<SurveyExceptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyExceptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyExceptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
