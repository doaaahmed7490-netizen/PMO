import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsReportComponent } from './charts-report.component';

describe('ChartsReportComponent', () => {
  let component: ChartsReportComponent;
  let fixture: ComponentFixture<ChartsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
