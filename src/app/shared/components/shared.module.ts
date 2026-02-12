import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactore } from '../../app.module';
import { ngdirective } from '../ngdirective.directive';
import { ConfirmDialogComponent } from './showcase-dialog/confirm-dialog.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [ConfirmDialogComponent, ngdirective, PieChartComponent],
  imports: [
    FormsModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
    NbInputModule,
    NbAlertModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ConfirmDialogComponent, PieChartComponent],
 // entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {}
