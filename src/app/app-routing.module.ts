import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './guards/auth-activate.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
 //  canActivate: [AuthGuard],
  redirectTo: 'auth',

  },
  {
    path: 'auth',
   // canActivate: [AuthGuard],
    redirectTo: 'auth',
   // redirectTo: 'auth',

  },
  {
    path: 'dashboard',
   // canActivate: [AuthGuard],
    redirectTo: 'dashboard',
  },
 /* {
    path: 'form',
    loadChildren: () =>
      import('./pages/main/main.module').then((mod) => mod.MainModule),
      canActivate: [AuthGuard],
    },*/
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((mod) => mod.AuthModule),
    //  canActivate: [AuthGuard],

  },
 

 


  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/charts/charts.module').then((mod) => mod.ChartsModule),
    },
 /*   {
      path: 'dashboardRpt',
      loadChildren: () =>
        import('./pages/charts-report/chartsReport.module').then((mod) => mod.ChartsReportModule),
      },
 



  {
    path: 'District',
    loadChildren: () =>
      import('./pages/District/district.module').then(
        (mod) => mod.DistrictModule
      ),
    },

*/


/*
 
  {
    path: 'Users',
    loadChildren: () =>
      import('./pages/Users/user.module').then((mod) => mod.UserModule),

  },
*/

 
  {
    path: 'Projects',
    loadChildren: () =>
      import('./pages/StrategicGoals/strategicGoal.module').then((mod) => mod.StrategicGoalModule),
      //canActivate: [AuthGuard],

  },
  {
    path: 'ProjectDocuments',
    loadChildren: () =>
      import('./pages/Milestones/milestone.module').then((mod) => mod.MilestoneModule),
      //canActivate: [AuthGuard],
    },
      {
    path: 'DocumentsTypes',
    loadChildren: () =>
      import('./pages/District/district.module').then((mod) => mod.DistrictModule),
    },   {
    path: 'Customers',
    loadChildren: () =>
      import('./pages/Services/Service.module').then((mod) => mod.ServiceModule),
    },
    ,   {
    path: 'Jobs',
    loadChildren: () =>
      import('./pages/Departments/department.module').then((mod) => mod.DepartmentModule),
    },
    {
    path: 'Employees',
    loadChildren: () =>
      import('./pages/Employee/Emp.module').then((mod) => mod.EmpModule),
    },
      {
    path: 'Country',
    loadChildren: () =>
      import('./pages/PMO/County/country.module').then((mod) => mod.CountryModule),
    },
     {
    path: 'State',
    loadChildren: () =>
      import('./pages/PMO/State/state.module').then((mod) => mod.StateModule),
    },
      {
    path: 'District',
    loadChildren: () =>
      import('./pages/PMO/District/district.module').then((mod) => mod.DistrictModule),
    },
        {
    path: 'ProjectCategory',
    loadChildren: () =>
      import('./pages/PMO/ProjectCategory/projectcategory.module').then((mod) => mod.ProjectCategoryModule),
    },
            {
    path: 'ProjectType',
    loadChildren: () =>
      import('./pages/PMO/ProjectType/projecttype.module').then((mod) => mod.ProjectTypeModule),
    },
            {
    path: 'Currency',
    loadChildren: () =>
      import('./pages/PMO/Currency/currency.module').then((mod) => mod.CurrencyModule),
    },
         {
    path: 'CurrencyPricing',
    loadChildren: () =>
      import('./pages/PMO/CurrencyPricing/CurrencyPricing.module').then((mod) => mod.CurrencyPricingModule),
    },
       {
    path: 'IndependentTasks',
    loadChildren: () =>
      import('./pages/PMO/Transactions/Transaction.module').then((mod) => mod.TransactionModule),
    },
         {
    path: 'Milestones',
    loadChildren: () =>
      import('./pages/PMO/Milestones/Milestones.module').then((mod) => mod.MilestonesModule),
    },
      {
    path: 'ProjectMilestones',
    loadChildren: () =>
      import('./pages/PMO/ProjectMilestones/ProjectMilestone.module').then((mod) => mod.ProjectMilestonesModule),
    },
       {
    path: 'ProjectTasks',
    loadChildren: () =>
      import('./pages/PMO/Tasks/Tasks.module').then((mod) => mod.TasksModule),
    },
      {
    path: 'Bids',
    loadChildren: () =>
      import('./pages/BidManagment/Bid/bid.module').then((mod) => mod.BidModule),
    },
     {
    path: 'BidTasks',
    loadChildren: () =>
      import('./pages/BidManagment/BidTasks/bidTasks.module').then((mod) => mod.BidTasksModule),
    },
    {
    path: 'BidTasksWorkflow',
    loadChildren: () =>
      import('./pages/BidManagment/BidTasksWorkFlow/bidTasksWorkFlow.module').then((mod) => mod.BidTasksWorkFlowModule),
    },
     {
    path: 'ReAssign',
    loadChildren: () =>
      import('./pages/BidManagment/ReAssignEmployeeTask/ReAssignEmployeeTask.module').then((mod) => mod.ReAssignEmployeeTaskModule),
    },
    {
    path: 'BidChangeStatus',
    loadChildren: () =>
      import('./pages/BidManagment/BidChangeStatus/BidChangeStatus.module').then((mod) => mod.BidChangeStatusModule),
    },
 /* {
    path: 'DirectiveGoals',
    loadChildren: () =>
      import('./pages/DirectiveGoals/directiveGoal.module').then((mod) => mod.DirectiveGoalModule),
    },
  {
    path: 'Departments',
    loadChildren: () =>
      import('./pages/Departments/department.module').then((mod) => mod.DepartmentModule),
    },*/

 /* {
    path: 'Jobs',
    loadChildren: () =>
      import('./pages/Jobs/Job.module').then((mod) => mod.JobModule),

  },*/
  /*{
    path: 'Employee',
    loadChildren: () =>
      import('./pages/Employee/Emp.module').then((mod) => mod.EmpModule),

  },
  {
    path: 'Services',
    loadChildren: () =>
      import('./pages/Services/Service.module').then((mod) => mod.ServiceModule),

  },
  {
    path: 'Questions',
    loadChildren: () =>
      import('./pages/Questions/Question.module').then((mod) => mod.QuestionModule),

  },
  {
    path: 'Survey',
    loadChildren: () =>
      import('./pages/Survey/Survey.module').then((mod) => mod.SurveyModule),

  },
  {
    path: 'UserSurvey/SubmitSurvey/:id',
    loadChildren: () =>
      import('./pages/UserSurvey/UserSurvey.module').then((mod) => mod.UserSurveyModule),
  }, 
  {
    path: 'Roles',
    loadChildren: () =>
      import('./pages/Roles/role.module').then((mod) => mod.RoleModule),
   

  },*/
  /*{
    path: 'UserSurvey2',
    loadChildren: () =>
      import('./pages/UserSurvey2/UserSurvey2.module').then((mod) => mod.UserSurveyModule2),
  },
  {
    path: 'ActiveSurveyList',
    loadChildren: () =>
      import('./pages/ActiveSurveyList/ActiveSurvey.module').then((mod) => mod.ActiveSurveyModule),
  }, */
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
