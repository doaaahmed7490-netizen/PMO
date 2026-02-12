import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnanlysisQstComponent } from './survey-ananlysis-qst.component';

describe('SurveyAnanlysisQstComponent', () => {
  let component: SurveyAnanlysisQstComponent;
  let fixture: ComponentFixture<SurveyAnanlysisQstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAnanlysisQstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyAnanlysisQstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
