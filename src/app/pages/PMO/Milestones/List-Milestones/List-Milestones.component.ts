import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { LetterTypeModel } from '../../../../models/LetterTypes/LetterType.model';
import { PagnationRequest } from '../../../../models/pagination.request';
import { ToastrService } from '../../../../services/toastr.service';
//import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { EntityNames } from '../../../../shared/Entity-Names';
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ConfirmDialogComponent } from '../../../../shared/components/showcase-dialog/confirm-dialog.component';
@Component({
  selector: 'app-List-Milestones',
  templateUrl: './List-Milestones.component.html',
  styleUrls: ['./List-Milestones.component.css']
})
export class ListMilestonesComponent implements OnInit {
   tableData = [
    {  type: 'السعودية', notes: 'الفرع الرئيسى' },
     {  type: 'مصر', notes: 'اول فرع خارج السعودية'  }

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
   this.tableData1  = [
    {  type: 'تطوير تطبيق ويب',milestone:'جمع وتحليل المتطلبات (Requirements Analysis)', notes: 'فهم احتياجات العميل/تحديد الصفحات المطلوبةوالخصائص' },
 
    {  type: 'تطوير تطبيق ويب',milestone:'التصيم', notes: 'تصميم الصفحات/اختيار الألوان والخطوط/ مراجعة العميل والموافقة على التصميم' },
    {  type: 'تطوير تطبيق ويب',milestone:'بناء APIs وقاعدة البيانات', notes: 'إنشاء API / تصميم قاعدة البيانات/ ربط النظام بالبيانات' },
    {  type: 'تطوير تطبيق ويب',milestone:'ربط الـ Frontend مع الـ Backend', notes: 'اختبار الاتصال بين الواجهة والسيرفر / التأكد من تدفق البيانات بشكل صحيح' },
    {  type: 'تطوير تطبيق ويب',milestone:'الاختبار (Testing)', notes: 'اختبار الوظائف / إصلاح الأخطاء / التأكد من جودة النظام' },

    {  type: 'تطوير تطبيق ويب',milestone:'إطلاق الموقع على السيرفر(Deployment)', notes: 'رفع المشروع على السيرفر / إعداد الدومين / تشغيل الموقع' },
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


  applyFilter(event: Event) {
    const filterValues = {
      strategicGoal: this.strategicGoalFilter.nativeElement.value.trim(),

      sortable: true

    };

    this.dataSource.filterPredicate = (
      data: { strategicGoalName: string ;sortable: boolean;},
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
    if (data.strategicGoalName == ""
     )
     // if ((data.officeName == ""&& data.contactName=="" && data.phone1=="")  )
      {
        return true; 
      }
      return (
       ( data.strategicGoalName
         .toLowerCase()
          .includes(searchText.strategicGoalName.toLowerCase())
      //     &&
      //  data.planCode
         
      //     .includes(searchText.planCode) 
      //     &&
      //     data.districtName
      //     .toLowerCase()
      //          .includes(searchText.districtName.toLowerCase())
 
       )
        /*  &&
      (data.email
           .toLowerCase()
           .includes(searchText.email)
           ||data.email

           .includes(""))*/
          // &&
          // data.phone1
         //  .includes(searchText.phone1) 
       /* &&
        data.email
           .toLowerCase()
           .includes(searchText.email.toLowerCase())*/

        /* &&
         data.fax
            .toLowerCase()
            .includes(searchText.fax.toLowerCase())
          &&
          data.address
             .includes(searchText.address)
&&
           data.phone1
           .includes(searchText.phone1) 
&&
         data.phone2
       
         .includes(searchText.phone2) 
 */
           
      );
     // console.log("kk"+data);
    };

    this.dataSource.filter = JSON.stringify(filterValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones/list/';



    this.router.navigateByUrl(returnUrl);
  }
  ShowAddGrant(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones/add';



    this.router.navigateByUrl(returnUrl);
  }

  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones/add';

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
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Country/edit/'+id;

    this.router.navigateByUrl(returnUrl);
  }
}
