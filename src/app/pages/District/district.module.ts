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

import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbFormFieldModule, NbIconModule, NbTableModule, NbAlertModule, NbSelectModule } from '@nebular/theme';
/*import { ThemeModule } from '../../@theme/theme.module';*/
import { SharedModule } from '../../shared/components/shared.module';
/*import { PipeModule } from '../../shared/pipes/pipes.module';*/
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpLoaderFactore } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { SharedModule } from '../../shared/components/shared.module';
import { MatIconModule } from '@angular/material/icon';

import { MatSortModule } from '@angular/material/sort';

import { DistrictRoutingModule } from './district-routing.module';
import { AddDistrictComponent } from './add-district/add-district.component';
import { EditDistrictComponent } from './edit-district/edit-district.component';
import { ListDistrictComponent } from './list-district/list-district.component';


@NgModule({
 // declarations: [ListBlockLawsComponent, AddLetterTypeComponent, EditBlockLawComponent],
  declarations: [ListDistrictComponent,AddDistrictComponent,EditDistrictComponent],

  imports: [
    DistrictRoutingModule,
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
export class DistrictModule { }
