import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { PagnationRequest } from '../../../models/pagination.request';
import { SurveyModel } from '../../../models/Survey/Survey.model';
import { RoleService } from '../../../services/role.service';
import { SurveyService } from '../../../services/Survey.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';
import { ChartsDialogComponent } from '../charts-dialog/charts-dialog.component';
import { QrCodeDialogComponent } from '../qr-code-dialog/qr-code-dialog.component';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.scss'],
})
export class ListSurveyComponent implements OnInit {
  dir = 'ltr';
  constructor(
    // private dialogService: NbDialogService,
    private toastrService: ToastrService,
    private translate: TranslateService,
    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute,
    private _detector: ChangeDetectorRef,
    private dialogService: NbDialogService,
    private roleService:RoleService

  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth')

    if (translate.currentLang == 'ar') this.dir = 'rtl';
  }
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('surveyFilter') surveyFilter!: ElementRef;

  //  @ViewChild('AnswetFilter') empFilter!: ElementRef;
  //@ViewChild('maindeptNameFilter') maindeptNameFilter!: ElementRef;

  totalRecords: number = 0;
  searchModel: PagnationRequest;
  pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
  displayedColumns: string[] = [
    'Survey',
    'FromDate',
    'ToDate',
    //"Department",

    //   "actions",

    'actions2',
    'actions1',
    'showCharts',
    //"actions3",
    "showQrCode"
  ];

  dataSource: MatTableDataSource<{
    surveyName: string;
    fromDateStr: string;
    toDateStr: string;

    sortable: boolean;
  }>;
  canAdd:boolean;
  canEdit:boolean;
  canDelete:boolean;
  canView:boolean;
  ngOnInit() {
    //console.log(this.data);
    this.searchModel = {
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };

    this.search();
    this._detector.markForCheck();
    this.roleService.getActionByRoleId(localStorage.getItem("RoleId"),"Survey").subscribe((res) => {
      this.canAdd = res.entity.add;
      this.canEdit = res.entity.update;
      this.canDelete = res.entity.delete;
  
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // Connect sort after view initialization
  }

  sortData(sort: MatSort): void {
    const data: Array<{
      surveyName: string;
      fromDateStr: string;
      toDateStr: string;
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
          case 'Survey':
            return this.compare(
              a.surveyName.toLowerCase(),
              b.surveyName.toLowerCase(),
              isAsc
            );
          case 'FromDate':
            return this.compare(
              a.fromDateStr.toString(),
              b.fromDateStr.toString(),
              isAsc
            );
          case 'ToDate':
            return this.compare(
              a.toDateStr.toString(),
              b.toDateStr.toString(),
              isAsc
            );

          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      surveyName: string;
      fromDateStr: string;
      toDateStr: string;

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
      surveyName: this.surveyFilter.nativeElement.value.trim(),

      //   name: this.empFilter.nativeElement.value,
      // departmentName: this.deptFilter.nativeElement.value,
      //  mainDeptName: this.maindeptNameFilter.nativeElement.value,
      sortable: true,
    };

    this.dataSource.filterPredicate = (
      data: { surveyName: string; sortable: boolean },
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
      if (data.surveyName == '') {
        // if ((data.officeName == ""&& data.contactName=="" && data.phone1=="")  )
        return true;
      }
      return data.surveyName
        .toLowerCase()
        .includes(searchText.surveyName.toLowerCase());

      //     &&
      //   data.mainDeptName.toLowerCase().includes(searchText.mainDeptName.toLowerCase())

      //     .includes(searchText.planCode)
      //     &&
      //     data.districtName
      //     .toLowerCase()
      //          .includes(searchText.districtName.toLowerCase())
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
      // console.log("kk"+data);
    };

    this.dataSource.filter = JSON.stringify(filterValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async search(page?: PageEvent) {
    if (page) {
      this.searchModel.PageNumber = page.pageIndex + 1;
      this.searchModel.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10;
    } else {
      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 10;
    }
    this.surveyService.searchSurveys(this.searchModel).subscribe((res) => {
      this.surveyModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
      this.dataSource = new MatTableDataSource(this.surveyModel);
    });
  }
  surveyModel: SurveyModel[] = [];
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
    let title = await this.translate
      .get('DeleteTitle', { entity: name })
      .toPromise();
    let body = await this.translate
      .get('DeleteMessage', { entity: name })
      .toPromise();
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
          this.surveyService.deleteSurvey(id).subscribe((result) => {
            this.surveyModel = this.surveyModel.filter((x) => x.id != id);
            this.search();
            this.toastrService.Delete(EntityNames.Survey);
          });
        }
      });
  }
  ShowGrants(id: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Survey/';

    this.router.navigateByUrl(returnUrl);
  }
  ShowAdd() {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Survey/add';

    this.router.navigateByUrl(returnUrl);
  }

  ShowEdit(id: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Survey/edit/' + id;

    this.router.navigateByUrl(returnUrl);
  }

  ShowCharts(element: string[]) {
    // This is where we trigger the charts dialog
    this.dialogService.open(ChartsDialogComponent, {
      context: {
        chartQuestions: element,
      },
    });
  }

  ShowCharts1(element: string) {
    // This is where we trigger the charts dialog
    this.dialogService.open(ChartsDialogComponent, {
      context: {
        chartSurvey: element,
      },
    });
  }

  ShowQrCode(surveyName:string,element: string) {
    // This is where we trigger the charts dialog
    this.dialogService.open(QrCodeDialogComponent, {
      context: {
        QrCode: element,
        SurveyTitle:surveyName

      },
    });
  }
}
