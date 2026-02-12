import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss']
})
export class QrCodeDialogComponent { 
   @Input() QrCode: string;

   @Input() SurveyTitle: string;
 //  @Input() chartQuestions: string[];
  constructor(private ref: NbDialogRef<QrCodeDialogComponent>) {}

  closeCharts() {
    this.ref.close();
  }
}

