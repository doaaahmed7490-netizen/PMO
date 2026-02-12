import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*import { BlockLawRoutingModule } from './block-law-routing.module';
import { ListBlockLawsComponent } from './list-block-laws/list-block-laws.component';
import { AddBlockLawComponent } from './add-block-law/add-block-law.component';
import { EditBlockLawComponent } from './edit-block-law/edit-block-law.component';*/
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';*/
import { MatTableModule } from '@angular/material/table';

import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbFormFieldModule, NbIconModule, NbTableModule, NbAlertModule, NbSelectModule, NbDatepicker, NbDatepickerModule } from '@nebular/theme';
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

import { SharedModule } from '../../shared/components/shared.module';
import { ngdirective } from '../../shared/ngdirective.directive';


import { UserSurveyRoutingModule } from './UserSurveyRouting.module';
import { SubmitSurveyComponent } from './submit-survey/submit-survey.component';

@NgModule({
 // declarations: [ListBlockLawsComponent, AddLetterTypeComponent, EditBlockLawComponent],
  declarations: [SubmitSurveyComponent],

  imports: [
    UserSurveyRoutingModule,
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
    //MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    //SharedModule,
    SharedModule,
    //FormGroup,
    NbDatepickerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
})
export class UserSurveyModule { }
