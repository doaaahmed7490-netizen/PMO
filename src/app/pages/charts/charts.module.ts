import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts.component';
import { RouterModule, Routes } from '@angular/router';
import {
  NbAutocompleteModule,
  NbCardModule,
  NbDateAdapterService,
  NbDateService,
  NbDatepicker,
  NbDatepickerAdapter,
  NbDatepickerModule,
  NbInputModule,
  NbSelectModule,
} from '@nebular/theme';
import { NgxGaugeModule } from 'ngx-gauge';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactore } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: ChartsComponent }];

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbSelectModule,
    FormsModule,
    NgxGaugeModule,
    MatIconModule,
    NbAutocompleteModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [RouterModule],
})
export class ChartsModule { }
