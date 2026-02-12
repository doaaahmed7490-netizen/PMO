import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  @Input() title: string;
  @Input() body: string;
  @Input() buttonText: string;
  @Input() confirmStatus: string = 'danger';
  @Input() closeStatus: string = 'basic';

  constructor(protected ref: NbDialogRef<ConfirmationDialogComponent>
    
    ) {}

  dismiss() {
    this.ref.close();
  }
  confirm() {
    this.ref.close(true);
  }
}
/*  implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(true);
  }

  public accept() {
    this.activeModal.close(false);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
 */