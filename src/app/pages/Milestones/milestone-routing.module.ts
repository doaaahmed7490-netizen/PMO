import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddMilestoneComponent } from './add-milestone/add-milestone.component';
import { EditMilestoneComponent } from './edit-milestone/edit-milestone.component';
import { ListMilestoneComponent } from './list-milestone/list-milestone.component';




const routes: Routes = [
  {
    path: '',
    component: ListMilestoneComponent,
  },
 
 {
    path: 'add',
    component: AddMilestoneComponent,
  },
  {
    path: 'edit/:id',
    component: EditMilestoneComponent,
  }
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilestoneRoutingModule { }
