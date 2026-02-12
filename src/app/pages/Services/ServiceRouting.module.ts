import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddServiceComponent } from './add-service/add-service.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { ListServiceComponent } from './list-service/list-service.component';



const routes: Routes = [
  {
    path: '',
    component: ListServiceComponent,
  },
 
 {
    path: 'add',
    component: AddServiceComponent,
  },
  {
    path: 'edit/:id',
    component: EditServiceComponent,
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
export class ServiceRoutingModule { }
