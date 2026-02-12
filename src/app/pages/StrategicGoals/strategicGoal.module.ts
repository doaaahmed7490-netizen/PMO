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

import {
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbFormFieldModule,
  NbIconModule,
  // NbTableModule,
  NbAlertModule,
  NbSelectModule,
} from '@nebular/theme';
/*import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/components/shared.module';
import { PipeModule } from '../../shared/pipes/pipes.module';*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// import { TableModule } from '../table/table.module';
import { HttpLoaderFactore } from '../../app.module';
import { HttpClient } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { SharedModule } from '../../shared/components/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../../shared/components/shared.module';

// import { ngdirective } from '../../shared/ngdirective.directive';
import { StrategicGoalRoutingModule } from './strategicGoal-routing.module';
import { AddStrategicGoalComponent } from './add-strategic-goal/add-strategic-goal.component';
import { ListStrategicGoalComponent } from './list-strategic-goal/list-strategic-goal.component';
import { EditStrategicGoalComponent } from './edit-strategic-goal/edit-strategic-goal.component';
import { SliceWordsPipe } from './slice-words.pipe';

@NgModule({
  // declarations: [ListBlockLawsComponent, AddLetterTypeComponent, EditBlockLawComponent],
  declarations: [
    ListStrategicGoalComponent,
    AddStrategicGoalComponent,
    EditStrategicGoalComponent,
    SliceWordsPipe
  ],

  imports: [
    StrategicGoalRoutingModule,
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

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
})
export class StrategicGoalModule {}
