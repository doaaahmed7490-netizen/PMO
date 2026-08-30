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
@Component({
  selector: 'app-List-Contract',
  templateUrl: './List-Contract.component.html',
  styleUrls: ['./List-Contract.component.css']
})
export class ListContractComponent implements  OnInit {
   tableData = [
    {  Employee: 'أحمد محمد علي',ContractNo:'CNT-2026-001', ContractType: 'عقد محدد المدة',FromDate:'01/01/2026',ToDate:'31/12/2026',BasicSalary:'8000 ريال',HousingAllowance:'1000 ريال',TransportationAllowance:'500 ريال',OtherAllowance:'100 ريال',ProbationPeriod:'90 يوم'
,NoticePeriod:'30 يوم'
 },
       {  Employee: 'محمد عبدالله حسن',ContractNo:'CNT-2026-002', ContractType: 'عقد غير محدد المدة',FromDate:'15/01/2026',ToDate:'-',BasicSalary:'12,000 ريال',HousingAllowance:'3,000 ريال',TransportationAllowance:'1,000 ريال',OtherAllowance:'750 ريال',ProbationPeriod:'90 يوم'
,NoticePeriod:'60 يوم'
 },    {  Employee: 'خالد محمود إبراهيم',ContractNo:'CNT-2026-003', ContractType: 'عقد محدد المدة',FromDate:'01/02/2026',ToDate:'31/01/2027',BasicSalary:'7500 ريال',HousingAllowance:'1875 ريال',TransportationAllowance:'700 ريال',OtherAllowance:'300 ريال',ProbationPeriod:'90 يوم'
,NoticePeriod:'30 يوم'
 }, 
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
    {  Employee: 'أحمد محمد علي',ContractNo:'CNT-2026-001', ContractType: 'عقد محدد المدة',FromDate:'01/01/2026',ToDate:'31/12/2026',BasicSalary:'8000 ريال',HousingAllowance:'1000 ريال',TransportationAllowance:'500 ريال',OtherAllowance:'100 ريال',ProbationPeriod:'90 يوم'
,NoticePeriod:'30 يوم'
 },
    
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
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Department/list/';



    this.router.navigateByUrl(returnUrl);
  }
  ShowAddGrant(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Department/add';



    this.router.navigateByUrl(returnUrl);
  }

  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Contract/add';

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
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Contract/edit/'+id;

    this.router.navigateByUrl(returnUrl);
  }
}
