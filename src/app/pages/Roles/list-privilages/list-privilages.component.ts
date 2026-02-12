import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { PagnationRequest } from '../../../models/pagination.request';
import { PagnationRequestWithId } from '../../../models/paginationWithId.request';
import { PrivilageModel } from '../../../models/User/Privilage.model';
import { RoleModel } from '../../../models/User/role.model';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-privilages',
  templateUrl: './list-privilages.component.html',
  styleUrls: ['./list-privilages.component.scss']
})
export class ListPrivilagesComponent implements OnInit {
  dir = "ltr";
  constructor(
   // private dialogService: NbDialogService,
    private toastrService: ToastrService,
    private translate: TranslateService,
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,
    private _detector: ChangeDetectorRef,
    private dialogService: NbDialogService,



  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth')
    if (translate.currentLang == "ar") this.dir = "rtl";
  }
   @ViewChild(MatSort) sort: MatSort;
   
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('nameFilter') nameFilter!: ElementRef;



  totalRecords: number = 0;
  searchModel: PagnationRequest;
  searchModelWithId: PagnationRequestWithId;

  pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
  displayedColumns: string[] = [
    "Name",
    //"SupremeOrderDate",
    //"SupremeOrderDetails",

  
    /*"actions",
    
    "actions1",
    "actions2"*/
  ];

  dataSource: MatTableDataSource<{
    name: string;
   // supremeOrderDate: string;

    sortable: boolean;

  }>;
  ngOnInit(){
    this.getRoles();

    this.route.params.subscribe((params) => {
      this.roleId = params["id"];
     // this.searchForRoyalGrant();
     
    
    });
    if(this.roleId!=null)
    {
      this.searchWithId();
    }

//console.log(this.data);
    this.searchModel = {
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };
    this.searchModelWithId = {
      id:this.roleId,
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };

    this.search();
    this._detector.markForCheck()




  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // Connect sort after view initialization
  }

  getRoles() {
    console.log("PlanService")
    this.roleService
      .ListRoles({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.roleModel = res.entity.entities;
      });
  }
  roleModel:RoleModel[]=[];


  roleId:string;
  selectChangeHandler(value: any) { 
    this.roleId = value.target.value; 
    console.log("This.RoleId="+this.roleId);
    this.searchWithId();
 
 

  } 
  sortData(sort: MatSort): void {
    const data: Array<{
      name: string;
  
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
          case 'Name':
            return this.compare(
              a.name.toLowerCase(),
              b.name.toLowerCase(),
              isAsc
            );
         /* case 'SupremeOrderDate':
            return this.compare(
              a.supremeOrderDate.toString(),
              b.supremeOrderDate.toString(),
              isAsc
            );
        */
            
          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      name: string;
  
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
      roleName: this.nameFilter.nativeElement.value.trim(),

      sortable: true

    };

    this.dataSource.filterPredicate = (
      data: { name: string ;sortable: boolean;},
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
    if (data.name == ""
     )
     // if ((data.officeName == ""&& data.contactName=="" && data.phone1=="")  )
      {
        return true; 
      }
      return (
       ( data.name
         .toLowerCase()
          .includes(searchText.name.toLowerCase())
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

async  search(page?: PageEvent) {
    if (page) {
      this.searchModel.PageNumber = page.pageIndex + 1;
      this.searchModel.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10; 
    }
    else
    {
      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 10; 
    }
    this.roleService.ListAllPrivlages(this.searchModel).subscribe((res) => {
    
      this.privalageModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
      this._detector.markForCheck()
      this.dataSource = new MatTableDataSource(this.privalageModel);


      
    });
  }

  async  searchWithId(page?: PageEvent) {
    if (page) {
      this.searchModelWithId.id=this.roleId
      this.searchModelWithId.PageNumber = page.pageIndex + 1;
      this.searchModelWithId.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10; 
    }
    else
    {
      this.searchModelWithId.id=this.roleId

      this.searchModelWithId.PageNumber = 1;
      this.searchModelWithId.PageSize = 10; 
    }
    this.roleService.ListAllPrivlagesByRoleId(this.searchModelWithId).subscribe((res) => {
    
      this.privalageModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
      this._detector.markForCheck()
      this.dataSource = new MatTableDataSource(this.privalageModel);


      
    });
  }
  privalageModel: PrivilageModel[] = [];
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

  async delete(id: string, name: string) {
    name = await this.translate.get(name).toPromise();
    let title = await this.translate.get("DeleteTitle", { entity: name }).toPromise();
    let body = await this.translate.get("DeleteMessage", { entity: name }).toPromise();
    this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: `${title}`,
          body: `${body}?`,
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((res) => {
        if (res) {
         /* this.royalGrantService.deleteRoyalGrant(id).subscribe((result) => {
            this.royalGrantModel = this.royalGrantModel.filter((x) => x.id != id);
            this.search()
            this.toastrService.Delete(EntityNames.RoyalGrant);
          });*/
      
      }
      });
  }
  ShowPrivilage(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Grant/list/'+id;



    this.router.navigateByUrl(returnUrl);
  }
  ShowAddGrant(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Roles/add/';



    this.router.navigateByUrl(returnUrl);
  }

  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Roles/add';

    this.router.navigateByUrl(returnUrl);
  }

  ShowEdit(id:string)
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Roles/edit/'+id;

    this.router.navigateByUrl(returnUrl);
  }
}
