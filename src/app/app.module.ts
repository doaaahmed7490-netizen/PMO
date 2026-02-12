import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbSidebarModule,
  NbLayoutDirection,
  NbButtonModule,
  NbInputModule,
  NbDatepickerModule,
  NbToastrModule,
  NbDialogService,
  NbMenuModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './pages/main/main.module';
import { AuthModule } from './pages/auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsModule } from './pages/charts/charts.module';
import { ToggleDropdownDirective } from './components/navbar/dropdown.directive';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './pages/auth/auth-store/auth.reducer';
//import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { SharedModule } from '../../shared/components/shared.module';
import { MatIconModule } from '@angular/material/icon';
// import { AddParcelComponent } from './pages/Parcels/add-parcel/add-parcel.component';
// import { EditParcelComponent } from './pages/Parcels/edit-parcel/edit-parcel.component';
// import { ListParcelComponent } from './pages/Parcels/list-parcel/list-parcel.component';
// import { AddUserComponent } from './pages/Users/add-user/add-user.component';
// import { EditUserComponent } from './pages/Users/edit-user/edit-user.component';
// import { ListUsersComponent } from './pages/Users/list-users/list-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ConfirmationDialogService } from './pages/confirmation-dialog/confirmation-dialog.service';
// import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
// import { AddEngOfficeComponent } from './pages/EngineeringOffice/add-eng-office/add-eng-office.component';
// import { EditEngOfficeComponent } from './pages/EngineeringOffice/edit-eng-office/edit-eng-office.component';
// import { ListEngOfficeComponent } from './pages/EngineeringOffice/list-eng-office/list-eng-office.component';
// import { ngdirective } from './shared/ngdirective.directive';
// import { AddGrantComponent } from './pages/Grant/add-grant/add-grant.component';
// import { EditGrantComponent } from './pages/Grant/edit-grant/edit-grant.component';
// import { AddGrantlandComponent } from './pages/GrantLands/add-grantland/add-grantland.component';
import { AuthComponent } from './pages/auth/auth.component';
// import { GISComponent } from './pages/gis/gis.component';
// import { AddStrategicGoalComponent } from './pages/StrategicGoals/add-strategic-goal/add-strategic-goal.component';
// import { EditStrategicGoalComponent } from './pages/StrategicGoals/edit-strategic-goal/edit-strategic-goal.component';
// import { ListStrategicGoalComponent } from './pages/StrategicGoals/list-strategic-goal/list-strategic-goal.component';
// import { AddMilestoneComponent } from './pages/Milestones/add-milestone/add-milestone.component';
// import { EditMilestoneComponent } from './pages/Milestones/edit-milestone/edit-milestone.component';
// import { ListMilestoneComponent } from './pages/Milestones/list-milestone/list-milestone.component';
// import { AddDirectiveGoalComponent } from './pages/DirectiveGoals/add-directive-goal/add-directive-goal.component';
// import { EditDirectiveGoalComponent } from './pages/DirectiveGoals/edit-directive-goal/edit-directive-goal.component';
// import { ListDirectiveGoalComponent } from './pages/DirectiveGoals/list-directive-goal/list-directive-goal.component';
// import { AddDepartmentComponent } from './pages/Departments/add-department/add-department.component';
// import { EditDepartmentComponent } from './pages/Departments/edit-department/edit-department.component';
// import { ListDepartmentComponent } from './pages/Departments/list-department/list-department.component';
// import { AddEmployeeComponent } from './pages/Employee/add-employee/add-employee.component';
// import { EditEmployeeComponent } from './pages/Employee/edit-employee/edit-employee.component';
// import { ListEmployeesComponent } from './pages/Employee/list-employees/list-employees.component';
// import { AddJobComponent } from './pages/Jobs/add-job/add-job.component';
// import { EditJobComponent } from './pages/Jobs/edit-job/edit-job.component';
// import { ListJobComponent } from './pages/Jobs/list-job/list-job.component';
// import { AddServiceComponent } from './pages/Services/add-service/add-service.component';
// import { EditServiceComponent } from './pages/Services/edit-service/edit-service.component';
// import { ListServiceComponent } from './pages/Services/list-service/list-service.component';
// import { AddQuestionComponent } from './pages/Questions/add-question/add-question.component';
// import { EditQuestionComponent } from './pages/Questions/edit-question/edit-question.component';
// import { ListQuestionComponent } from './pages/Questions/list-question/list-question.component';
// import { AddSurveyComponent } from './pages/Survey/add-survey/add-survey.component';
// import { EditSurveyComponent } from './pages/Survey/edit-survey/edit-survey.component';
// import { ListSurveyComponent } from './pages/Survey/list-survey/list-survey.component';
// import { SubmitSurveyComponent } from './pages/UserSurvey/submit-survey/submit-survey.component';
// import { ListPrivilagesComponent } from './pages/Roles/list-privilages/list-privilages.component';
// import { ListRoleComponent } from './pages/Roles/list-role/list-role.component';
// import { AddRoleComponent } from './pages/Roles/add-role/add-role.component';
// import { EditRoleComponent } from './pages/Roles/edit-role/edit-role.component';
//import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';

// import { AddLetterTypeComponent } from './pages/LetterTypes/add-letter-type/add-letter-type.component';
// import { AddGrantStepComponent } from './pages/GrantSteps/add-grant-step/add-grant-step.component';
// import { AddLandCaseTypeComponent } from './pages/LandCasesTypes/add-land-case-type/add-land-case-type.component';
// import { EditLandCaseTypeComponent } from './pages/LandCasesTypes/edit-land-case-type/edit-land-case-type.component';
// import { ListLandCaseTypeComponent } from './pages/LandCasesTypes/list-land-case-type/list-land-case-type.component';
// import { AddGrantLandStatusComponent } from './pages/GrantLandStatus/add-grant-land-status/add-grant-land-status.component';
// import { EditGrantLandStatusComponent } from './pages/GrantLandStatus/edit-grant-land-status/edit-grant-land-status.component';
// import { ListGrantLandStatusComponent } from './pages/GrantLandStatus/list-grant-land-status/list-grant-land-status.component';
// import { AddDistrictComponent } from './pages/District/add-district/add-district.component';
// import { EditDistrictComponent } from './pages/District/edit-district/edit-district.component';
// import { ListDistrictComponent } from './pages/District/list-district/list-district.component';
// import { AddPlanComponent } from './pages/Plans/add-plan/add-plan.component';
// import { EditPlanComponent } from './pages/Plans/edit-plan/edit-plan.component';
// import { ListPlanComponent } from './pages/Plans/list-plan/list-plan.component';
export function HttpLoaderFactore(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleDropdownDirective,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactore,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    BrowserAnimationsModule,

    // NbDialogService,
    NbThemeModule.forRoot(
      undefined,
      undefined,
      undefined,
      // undefined
      NbLayoutDirection.RTL
    ),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbInputModule,
    MainModule,
    // AuthModule,
    
    ChartsModule,
    MatIconModule,
    //MatSortModule,
    MatPaginatorModule,
    //MatDialog,
    NbToastrModule.forRoot(),
    StoreModule.forRoot({
      auth: authReducer,
    }),
    NgbModule,
  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],

  // entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule {}
