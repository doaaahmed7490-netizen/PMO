import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*import { BlockLawRoutingModule } from './block-law-routing.module';
import { ListBlockLawsComponent } from './list-block-laws/list-block-laws.component';
import { AddBlockLawComponent } from './add-block-law/add-block-law.component';
import { EditBlockLawComponent } from './edit-block-law/edit-block-law.component';*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';*/
import { MatTableModule } from '@angular/material/table';

import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbFormFieldModule, NbIconModule, NbTableModule, NbAlertModule, NbSelectModule, NbToggleModule, NbDialogService } from '@nebular/theme';
/*import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/components/shared.module';
import { PipeModule } from '../../shared/pipes/pipes.module';*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpLoaderFactore } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { SharedModule } from '../../shared/components/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { UserRoutingModule } from './user-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedModule } from '../../shared/components/shared.module';
//import { SharedModule } from '../../shared/components/shared.module';
//import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
 // declarations: [ListBlockLawsComponent, AddLetterTypeComponent, EditBlockLawComponent],
  declarations: [ListUsersComponent,AddUserComponent, EditUserComponent],

  imports: [
    UserRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbFormFieldModule,
    NbIconModule,
    NbSelectModule,
  //  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//,NgbModal,
    //SharedModule,
    //NbDialogService,
    //MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NbToggleModule,
   // MatDialog,
   /// NgbModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    NbDialogService // should add here
    ,ConfirmationDialogService
  ]
//,
//  entryComponents: [ ConfirmationDialogComponent ],


})
export class UserModule { }
