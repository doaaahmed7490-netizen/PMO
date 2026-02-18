import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { employee } from '../../../models/Employee/Employee.model';
import { PagnationRequest } from '../../../models/pagination.request';
import { ServiceModel } from '../../../models/Service/Service.model';
import { EmployeeService } from '../../../services/employee.service';
import { RoleService } from '../../../services/role.service';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {
   tableData = [
    
      {  name: 'امانة جدة',clientType:'حكومة', mobil: '0564801300', email: '', contactPersomNm1: 'احمد محمد', ContactPerson1Mobil: '0554852666',ContactPerson1Email: 'a.ahmed@jeddah.gov.sa' },
      {  name: 'شركة1111',clientType:'شركة', mobil: '0564801391', email: 'm.nnn@gmail.com', contactPersomNm1: 'محمد احمد سيد', ContactPerson1Mobil: '0504401891',ContactPerson1Email: 'm.ahmed@yahoo.com' },
      {  name: 'دعاء احمد',clientType:'فرد', mobil: '0564801391', email: 'doaa.ahmed74@yahoo.com', contactPersomNm1: '', ContactPerson1Mobil: '',ContactPerson1Email: '' }

  
    ];
   // dir = "ltr";
      dir = "rtl";
  
    constructor(
     // private dialogService: NbDialogService,
      private toastrService: ToastrService,
      private translate: TranslateService,
  //    private startegicGoalService: StartegicGoalService,
      private router: Router,
      private route: ActivatedRoute,
      private _detector: ChangeDetectorRef,
      private dialogService: NbDialogService,
    //  private roleService:RoleService
  
  
  
  
    ) {
      //if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
      //this.router.navigateByUrl('/auth')
      if (translate.currentLang == "ar") this.dir = "rtl";
    }
     @ViewChild(MatSort) sort: MatSort;
     
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    @ViewChild('strategicGoalFilter') strategicGoalFilter!: ElementRef;
  
  
  
    totalRecords: number = 0;
    searchModel: PagnationRequest;
    pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
    displayedColumns: string[] = [
      "strategicGoalName",
      "GoalCode",
      "GoalDesc",
  
    
     // "actions",
      
      "actions1",
      "actions2"
    ];
  
    dataSource: MatTableDataSource<{
      strategicGoalName:string;
      goalCode: number;
    //  goalDesc: string;
  
      sortable: boolean;
  
    }>;
    canAdd:boolean;
    canEdit:boolean;
    canDelete:boolean;
    canView:boolean;
    tableData1=[]
    ngOnInit(){
    this.tableData1 = [
  /*     {  name: 'امانة جدة',clientType:'حكومة', mobil: '0564801300', email: '', contactPersomNm1: 'احمد محمد', ContactPerson1Mobil: '0554852666',ContactPerson1Email: 'a.ahmed@jeddah.gov.sa',contactPersomNm2: 'مالك محمد',ContactPerson1Mobi2: '0544812391',ContactPerson1Emai2:'m.mohamed@jeddah.gov.sa' },
      {  name: 'شركة1111',clientType:'شركة', mobil: '0564801391', email: 'm.nnn@gmail.com', contactPersomNm1: 'محمد احمد سيد', ContactPerson1Mobil: '0504401891',ContactPerson1Email: 'm.ahmed@yahoo.com',contactPersomNm2: '',ContactPerson1Mobi2: '',ContactPerson1Emai2:'' },
      {  name: 'دعاء احمد',clientType:'فرد', mobil: '0564801391', email: 'doaa.ahmed74@yahoo.com', contactPersomNm1: '', ContactPerson1Mobil: '',ContactPerson1Email: '',contactPersomNm2: '',ContactPerson1Mobi2: '',ContactPerson1Emai2:'' }
 */
  {  name: 'امانة جدة',clientType:'حكومة', mobil: '0564801300', email: '', contactPersomNm1: 'احمد محمد', ContactPerson1Mobil: '0554852666',ContactPerson1Email: 'a.ahmed@jeddah.gov.sa' },
      {  name: 'شركة1111',clientType:'شركة', mobil: '0564801391', email: 'm.nnn@gmail.com', contactPersomNm1: 'محمد احمد سيد', ContactPerson1Mobil: '0504401891',ContactPerson1Email: 'm.ahmed@yahoo.com' },
      {  name: 'دعاء احمد',clientType:'فرد', mobil: '0564801391', email: 'doaa.ahmed74@yahoo.com', contactPersomNm1: '', ContactPerson1Mobil: '',ContactPerson1Email: '' }

  
    ];
  //console.log(this.data);
  /*
      this.searchModel = {
        PageNumber: 1,
        PageSize: environment.DEFAULT_PAGE_SIZE,
      };*/
    /*
  
      this.search();
      //this._detector.markForCheck()
      this.roleService.getActionByRoleId(localStorage.getItem("RoleId"),"Strategic-Goals").subscribe((res) => {
        this.canAdd = res.entity.add;
        this.canEdit = res.entity.update;
        this.canDelete = res.entity.delete;
    
      });
  
  */
  
    }
    ngAfterViewInit() {
    //  this.dataSource.sort = this.sort; // Connect sort after view initialization
    }
  
    sortData(sort: MatSort): void {
      const data: Array<{
        strategicGoalName:string;
        goalCode: number;
      //  goalDesc: string;
    
        sortable: boolean;
      }> = this.dataSource.data.slice();
  
      if (!sort.active || sort.direction === '') {
        this.dataSource.data = data;
        return;
      }
  
      this.dataSource.data = data.sort((a, b) => {
        if (!a.sortable || !b.sortable) {
          return 1;
        } else {
          let isAsc: boolean = sort.direction === 'asc';
          switch (sort.active) {
            case 'strategicGoalName':
              return this.compare(
                a.strategicGoalName.toLowerCase(),
                b.strategicGoalName.toLowerCase(),
                isAsc
              );
            case 'GoalCode':
              return this.compare(
                a.goalCode.toString(),
                b.goalCode.toString(),
                isAsc
              );
          
              
            default:
              return 0;
          }
        }
      });
  
      this.dataSource = new MatTableDataSource<{
        strategicGoalName: string;
        goalCode: number;
    
        sortable: boolean;
      }>(this.dataSource.data);
    }
  
    compare(a: any, b: any, isAsc: boolean): number {
      if (a < b) {
        return -1 * (isAsc ? 1 : -1);
      } else if (a > b) {
        return 1 * (isAsc ? 1 : -1);
      } else {
        return 0 * (isAsc ? 1 : -1);
      }
    }
  

  

   /* async delete(id: string) {
    {
            this.planService.deletePlan(id).subscribe((result) => {
              this.plan = this.plan.filter((x) => x.id != id);
              this.search()
              this.toastrService.Delete(EntityNames.Plans);
            });
        
        }
    }
  */

    ShowGrants(id:string)
    {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/StrategicGoals/list/';
  
  
  
      this.router.navigateByUrl(returnUrl);
    }
    ShowAddGrant(id:string)
    {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Projects/add';
  
  
  
      this.router.navigateByUrl(returnUrl);
    }
  
    ShowAdd()
    {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Customers/add';
  
      this.router.navigateByUrl(returnUrl);
    }
   edit(row: any) {
      console.log('Edit:', row);
    }
  
    delete1(row: any) {
      console.log('Delete:', row);
    }
    ShowEdit(id:string)
    {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/StrategicGoals/edit/'+id;
  
      this.router.navigateByUrl(returnUrl);
    }
  }
  