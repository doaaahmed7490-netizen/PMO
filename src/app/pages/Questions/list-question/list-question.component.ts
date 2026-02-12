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
import { QuestionModel } from '../../../models/Quest/Question.model';
import { QuestionService } from '../../../services/Quest.service';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss'],
})
export class ListQuestionComponent implements OnInit {
  dir = 'ltr';
  constructor(
    // private dialogService: NbDialogService,
    private toastrService: ToastrService,
    private translate: TranslateService,
    private questService: QuestionService,
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

  @ViewChild('questFilter') questFilter!: ElementRef;

  //  @ViewChild('AnswetFilter') empFilter!: ElementRef;
  //@ViewChild('maindeptNameFilter') maindeptNameFilter!: ElementRef;

  totalRecords: number = 0;
  searchModel: PagnationRequest;
  pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
  displayedColumns: string[] = [

    "Question",
    "QuestionWeight",
    "QuestDesc",
    "AnswerType",
    "Service",


    'actions2',
    'actions1',
  ];

  dataSource: MatTableDataSource<{
    questText: string;
    answerType: string;
    questDesc: string;
    serviceNames: string[];

    //  goalDesc: string;

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
    this.roleService.getActionByRoleId(localStorage.getItem("RoleId"),"Questions").subscribe((res) => {
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
      questText: string;
      answerType: string;
      questDesc: string;
      serviceNames: string[];
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
          case 'Question':
            return this.compare(
              a.questText.toLowerCase(),
              b.questText.toLowerCase(),
              isAsc
            );
          case 'QuestDesc':
            return this.compare(
              a.questDesc.toString(),
              b.questDesc.toString(),
              isAsc
            );
          case 'AnswerType':
            return this.compare(
              a.answerType.toString(),
              b.answerType.toString(),
              isAsc
            );
          case 'Service':
            return this.compare(
              a.serviceNames.toString(),
              b.serviceNames.toString(),
              isAsc
            );
          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      questText: string;
      answerType: string;
      questDesc: string;
      serviceNames: string[];

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
      questText: this.questFilter.nativeElement.value.trim(),

      //   name: this.empFilter.nativeElement.value,
      // departmentName: this.deptFilter.nativeElement.value,
      //  mainDeptName: this.maindeptNameFilter.nativeElement.value,
      sortable: true,
    };

    this.dataSource.filterPredicate = (
      data: { questText: string; sortable: boolean },
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
      if (data.questText == '') {
        // if ((data.officeName == ""&& data.contactName=="" && data.phone1=="")  )
        return true;
      }
      return data.questText
        .toLowerCase()
        .includes(searchText.questText.toLowerCase());

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
    this.questService.searchQuestions(this.searchModel).subscribe((res) => {
      this.questModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
      this.dataSource = new MatTableDataSource(this.questModel);
    });
  }
  questModel: QuestionModel[] = [];
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
          this.questService.deleteQuestion(id).subscribe((result) => {
            this.questModel = this.questModel.filter((x) => x.id != id);
            this.search();
            this.toastrService.Delete(EntityNames.Questions);
          });
        }
      });
  }
  ShowGrants(id: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Questions/';

    this.router.navigateByUrl(returnUrl);
  }
  ShowAdd() {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Questions/add';

    this.router.navigateByUrl(returnUrl);
  }

  ShowEdit(id: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Questions/edit/' + id;

    this.router.navigateByUrl(returnUrl);
  }
}
