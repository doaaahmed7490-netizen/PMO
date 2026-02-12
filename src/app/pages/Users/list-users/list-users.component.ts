import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { PagnationRequest } from '../../../models/pagination.request';
import { user } from '../../../models/user.model';
import { UserModel } from '../../../models/User/User.model';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { UserService } from '../../../services/user.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
//import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from '../../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  dir = 'ltr';
  active = true;
  userId: string;
  constructor(
    // private dialogService: NbDialogService,
    private toastrService: ToastrService,
    private translate: TranslateService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _detector: ChangeDetectorRef,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private roleService: RoleService
  ) // private confirmationDialogService: ConfirmationDialogService,
  //  private dialog: MatDialog
  //private dialog: MatDialog

  {
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('token') == ''
    )
      this.router.navigateByUrl('/auth');
    if (translate.currentLang == 'ar') this.dir = 'rtl';
  }
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('nameFilter') nameFilter!: ElementRef;

  @ViewChild('emailFilter') emailFilter!: ElementRef;

  @ViewChild('roleFilter') roleFilter!: ElementRef;

  totalRecords: number = 0;
  searchModel: PagnationRequest;
  pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
  displayedColumns: string[] = [
    'Name',
    // "UserName",
    'Role',

    'Mobil',
    'Phone',
    'Email',

    // "Phone",

    'actions',
    'actions1',

    'Activate',
  ];

  dataSource: MatTableDataSource<{
    name: string;
    roleName: string;

    mobil: string;
    phoneNo: string;
    email: string;
    nationalId: number;
    sortable: boolean;
  }>;
  canAdd: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canView: boolean;
  ngOnInit() {
    //console.log(this.data);
    this.searchModel = {
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };

    this.search();
    this._detector.markForCheck();

    this.roleService
      .getActionByRoleId(localStorage.getItem('RoleId'), 'User')
      .subscribe((res) => {
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
      name: string;
      roleName: string;

      mobil: string;
      phoneNo: string;
      email: string;
      nationalId: number;
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
          case 'Role':
            return this.compare(
              a.roleName.toLowerCase(),
              b.roleName.toLowerCase(),
              isAsc
            );
          case 'Mobil':
            return this.compare(a.mobil, b.mobil, isAsc);
          case 'Phone':
            return this.compare(a.phoneNo, b.phoneNo, isAsc);
          case 'Email':
            return this.compare(
              a.email.toLowerCase(),
              b.email.toLowerCase(),
              isAsc
            );
          case 'nationalId':
            return this.compare(a.nationalId, b.nationalId, isAsc);

          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      name: string;
      roleName: string;
      mobil: string;
      phoneNo: string;
      email: string;
      nationalId: number;
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
      name: this.nameFilter.nativeElement.value.trim(),
      //email: this.emailFilter.nativeElement.value,
      roleName: this.roleFilter.nativeElement.value.trim(),

      sortable: true,
    };

    this.dataSource.filterPredicate = (
      data: { name: string; roleName: string; sortable: boolean },
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
      if (data.name == '' && data.roleName == '') {
        // if ((data.officeName == ""&& data.contactName=="" && data.phone1=="")  )
        return true;
      }
      return (
        data.name.toLowerCase().includes(searchText.name.toLowerCase()) &&
        /* &&
       data.email.toLowerCase()

       .includes(searchText.email.toLowerCase()
       )
     */
        data.roleName
          .toLowerCase()

          .includes(searchText.roleName.toLowerCase())
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
  async deacivate(ref) {
    this.userService.DeActivateUser(this.userId).subscribe((res) => {
      ref.close();

      this.toastr.Deactivate(EntityNames.User);
      this.search();
    });
  }

  viewDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  search(page?: PageEvent) {
    if (page) {
      this.searchModel.PageNumber = page.pageIndex + 1;
      this.searchModel.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10;
    } else {
      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 10;
    }
    this.userService.searchUsers(this.searchModel).subscribe((res) => {
      this.user = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
      this._detector.markForCheck();
      this.dataSource = new MatTableDataSource(this.user);
    });
  }
  user: UserModel[] = [];
  name: string;
  title: string;
  body: string;

  /*public openConfirmationDialog() {
  this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
  .then((confirmed) => console.log('User confirmed:', confirmed))
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
}*/
  //async  delete(id: string, name: string) {
  /* console.log(name);
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }*/
  //let title ='حذف مستخدم';
  // let body = 'هل تريد حذف هذا المستخدم';
  //   let title = await this.translate.get("DeleteTitle", { entity: this.name }).toPromise();
  // let body = await this.translate.get("DeleteMessage", { entity: this.name }).toPromise();
  /*   this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: `${title}`,
          body: `${body}?`,
        },
        closeOnBackdropClick: false,
      }) */
  /* this.title="حذف مستخدم";
      this.body="هل تريد حقا حذذف المستخدم";
      this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: `${this.title}`,
          body: `${this.body}?`,
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((res) => {
        if (res) {
          this.userService.deleteUser(id).subscribe((result) => {
            this.user = this.user.filter((x) => x.id != id);
            this.toastr.Delete(EntityNames.User);
          });
        }
      });*/
  /* this.userService.deleteUser(id).subscribe((result) => {
            this.user = this.user.filter((x) => x.id != id);
            this.search()
            this.toastrService.Delete(EntityNames.User);
          });*/

  //https://stackblitz.com/edit/angular-confirmation-dialog?file=app%2Fconfirmation-dialog%2Fconfirmation-dialog.component.ts
  // }
  onToggleChange(element, dialog) {
    console.log(element.id);
    this.userId = element.id;
    if (element.isActive) {
      element.isActive = false;
      this.userService.ActivateUser(element.id).subscribe((res) => {
        // element.isActive = false;
        this.toastr.Activate(EntityNames.User);
        this.search();
      });
    } else {
      element.isActive = true;

      this.userService.DeActivateUser(element.id).subscribe((res) => {
        //  element.isActive = false;
        this.toastr.Deactivate(EntityNames.User);
        this.search();
      });
      //this.viewDialog(dialog);
    }
    // console.log("user : ", element.id);
  }

  /* openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are You Sure Delete Area',
      disableClose: true,
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(id).subscribe((result) => {
          this.user = this.user.filter((x) => x.id != id);
          this.search()
          this.toastrService.Delete(EntityNames.User);
        });
      }
    })
  }
*/

  /* async delete(id: string, name: string) {
  name = await this.translate.get(name).toPromise();
  let title = await this.translate.get("DeleteTitle", { entity: name }).toPromise();
  let body = await this.translate.get("DeleteMessage", { entity: name }).toPromise();
  this.dialogService
    .open(ConfirmationDialogComponent, {
      context: {
        title: `${title}`,
        body: `${body}?`,
      },
      closeOnBackdropClick: false,
    })
    .onClose.subscribe((res) => {
      if (res) {
        this.userService.deleteUser(id).subscribe((result) => {
          this.user = this.user.filter((x) => x.id != id);
          this.toastr.Delete(EntityNames.User);
        });
      }
    });
} */

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
          this.userService.deleteUser(id).subscribe((result) => {
            this.user = this.user.filter((x) => x.id != id);
            this.search();
            this.toastrService.Delete(EntityNames.User);
          });
        }
      });
  }

  ShowAdd() {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Users/add';

    this.router.navigateByUrl(returnUrl);
  }
  ShowMap() {
    //const returnUrl = 'https://www.google.com/';

    // this.router.navigateByUrl(returnUrl);

    window.open('https://www.google.com/', '_blank');
  }
  ShowMap1() {
    //const returnUrl = 'https://www.google.com/';

    // this.router.navigateByUrl(returnUrl);

    window.open(
      'https://www.arcgis.com/apps/mapviewer/index.html?url=https://geodatastore.jeddah.gov.sa/maps/rest/services/Grants/GrantsParcels/MapServer&source=sd'
    );
  }
  ShowEdit(id: string) {
    const returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/Users/edit/' + id;

    this.router.navigateByUrl(returnUrl);
  }
}
