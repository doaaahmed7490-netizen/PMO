import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { MilestoneModel } from '../../../models/Milestone/Milestone.model';
import { PagnationRequest } from '../../../models/pagination.request';
import { MilestoneService } from '../../../services/milestone.service';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-list-milestone',
  templateUrl: './list-milestone.component.html',
  styleUrls: ['./list-milestone.component.scss']
})
export class ListMilestoneComponent implements OnInit {
   tableData = [
     {  name: 'المشروع الاول', customer: 'احمد محمد', task: 'المهمة الاولى', DocType: 'عقد المشروع', Version: '1',Date: '11/1/2025'  },
     {  name: 'المشروع الاول', customer: 'احمد محمد', task: 'المهمة الاولى', DocType: 'تقرير عن انجاز المشروع', Version: '1',Date: '11/1/2025'  },

     {  name: 'المشروع الثانى', customer: 'محمود احمد', task: '', DocType: 'خطاب ترسية ', Version: '1',Date: '1/1/2026'  }

  ];
 // dir = "ltr";
    dir = "rtl";

  constructor(
   // private dialogService: NbDialogService,
    private toastrService: ToastrService,
    private translate: TranslateService,
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
     {  name: 'المشروع الاول', customer: 'احمد محمد', task: 'المهمة الاولى', DocType: 'عقد المشروع', Version: '1',Date: '11/1/2025'  },
        {  name: 'المشروع الاول', customer: 'احمد محمد', task: 'المهمة الاولى', DocType: 'تقرير عن انجاز المشروع', Version: '1',Date: '11/1/2025'  },

     {  name: 'المشروع الثانى', customer: 'محمود احمد', task: '', DocType: 'خطاب ترسية ', Version: '1',Date: '1/1/2026'  }


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


  compare(a: any, b: any, isAsc: boolean): number {
    if (a < b) {
      return -1 * (isAsc ? 1 : -1);
    } else if (a > b) {
      return 1 * (isAsc ? 1 : -1);
    } else {
      return 0 * (isAsc ? 1 : -1);
    }
  }




  ShowGrants(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments/list/';



    this.router.navigateByUrl(returnUrl);
  }
  ShowAddGrant(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments/add';



    this.router.navigateByUrl(returnUrl);
  }

  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments/add';
    console.log("ReturnURL"+returnUrl)
    this.router.navigateByUrl(returnUrl);
  }
 edit(row: any) {
  /*  console.log('Edit:', row);
  const url = 'assets/files/Project_Progress_Form.pdf';
  window.open(url, '_blank'); // opens in new tab*/
  const link = document.createElement('a');
  link.href = 'assets/Project_Progress_Form.pdf';
  link.download = 'Project_Progress_Form.pdf'; // file name after download
  link.click();
  }
   view(row: any) {
  /*  console.log('Edit:', row);
  const url = 'assets/files/Project_Progress_Form.pdf';
  window.open(url, '_blank'); // opens in new tab*/
  const url = 'assets/Project_Progress_Form.pdf';
  window.open(url, '_blank'); // opens in new tab*/
  }

  delete1(row: any) {
    console.log('Delete:', row);
  }
  ShowEdit(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments/edit/'+id;

    this.router.navigateByUrl(returnUrl);
  }
}
