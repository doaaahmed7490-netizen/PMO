import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AttachmentModel } from '../../../models/Attachments/attachment.model';
import { PagnationRequestWithId } from '../../../models/paginationWithId.request';
import { PrivilageModel } from '../../../models/User/Privilage.model';
import { PrivilageCustomModel } from '../../../models/User/privilageCustom.model';
import { PrivilageRoleModel } from '../../../models/User/PrivilageRoleModel';
import { RoleModel } from '../../../models/User/role.model';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { ConfirmDialogComponent } from '../../../shared/components/showcase-dialog/confirm-dialog.component';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  dir = "ltr";

  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService,
    private _detector: ChangeDetectorRef,
private dialogService: NbDialogService,
private role:RoleService,

  ) { if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
  this.router.navigateByUrl('/auth')}
  roleForm: FormGroup;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  totalRecords: number = 0;
 // searchModel: PagnationRequest;
  pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
  submitted = false;
  isSubmitted :boolean= false;
  privilages: PrivilageModel[] = [];

  isLoading = false;
attachment:AttachmentModel;
EverId:number[]=[];
EverId1:number;
AttachmentsssId:string[]=[];
//postFiles: this.formBuilder.array([]),

index:number=0;
privilageID:string[]=[];
OwnersName:string[]=[];

Id: string;
test:boolean=true;
TypeOfGrant:number=0;
@ViewChild(MatSort) sort: MatSort;
   
searchModel: PagnationRequestWithId;

@ViewChild('nameFilter') nameFilter!: ElementRef;

//@ViewChild('hafezaIdFilter') hafezaIdFilter!: ElementRef;
//@ViewChild('nationalIdFilter') nationalIdFilter!: ElementRef;

displayedColumns: string[] = [
  "Name", 
 // "NationalId",
 // "NationalSource",
  //"HafezaId",
  "ischecked",
  "CanAdd",
  "CanUpdate",
  "CanDelete",
///"Check",
  //"HafezaSource",
  //"Phone",

  //"Mobil",
 // "Notes",
 // "createdDate",
//  "actions",
  //"actions1",
];
dataSource: MatTableDataSource<{
  name: string;
  //hafezaId: string;

//  nationalId: number;

 // phone: string;
 // mobil: string;

  sortable: boolean;
 ischecked:boolean;
 canView:boolean;
 canAdd:boolean;
 canUpdate:boolean;
 canDelete:boolean;

}>;
  ngOnInit() {
    this.initForm();

    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getRoleInfoById();

    this.searchModel = {
      id:this.Id,
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };

    
  //this.GetPrivilages();
   this.search();
   /* this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });*/

    //this.Id='83ecc536-d270-4d5f-87c5-f4bcf95ec7d3';
   // this.getRoyalGrantInfoById();
  
   // this._detector.markForCheck()
  //  this.GetPrivilages();

  }
  GetPrivilages() {
    this.role
      .ListAllPrivlages({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.privilages = res.entity.entities;
      });
  }
  getRoleInfoById() {
    this.role.getById(this.Id).subscribe((res) => {
      this.currentRole = res.entity;
 

      this.bindForm();
    });
  }

  currentRole:RoleModel;

  bindForm() {

    this.roleForm.controls["id"].setValue(this.Id);
     this.roleForm.controls["roleName"].setValue(this.currentRole.roleName);
    

 
 
   } 
  SupermeOrderNo:string;
  /*getRoyalGrantInfoById() {
    this.royalGrantService.getById(this.Id).subscribe((res) => {
      this.currentRoyalGrant = res.entity;
    //this.dateGrant=res.entity.SupremeOrderDT;
    this.SupermeOrderNo = this.currentRoyalGrant.supremeOrderNumber;


    });
  }*/
  search(page?: PageEvent) {
    if (page) {
      this.searchModel.id=this.Id;
      this.searchModel.PageNumber = page.pageIndex + 1;
      this.searchModel.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10; 
    }
    else
    {
      this.searchModel.id=this.Id;
 
      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 10; 
    }
   this.role.ListAllPrivlagesFilterByRoleId(this.searchModel).subscribe((res) => {
   //   this.role.ListAllPrivlagesByRoleId(this.searchModel).subscribe((res) => {

      this.privilages = res.entity.entities;
      
      this.totalRecords = res.entity.totalRecords;
    //  this._detector.markForCheck()
    this.totalRecordSelected=res.entity.entities.filter(x=>x.ischecked==true).length
    this.index=this.totalRecordSelected;
    this.dataSource = new MatTableDataSource(this.privilages);

      this._detector.markForCheck()

    });

    this.role.ListAllPrivlagesActionByRoleId(this.searchModel).subscribe((res) => {
      //   this.role.ListAllPrivlagesByRoleId(this.searchModel).subscribe((res) => {
   
         this.privilageRole = res.entity.entities;
         
       /*  this.totalRecords = res.entity.totalRecords;
       //  this._detector.markForCheck()
       this.totalRecordSelected=res.entity.entities.filter(x=>x.ischecked==true).length
       this.index=this.totalRecordSelected;
       this.dataSource = new MatTableDataSource(this.privilages);
   
         this._detector.markForCheck()*/
   
       });
  }
  totalRecordSelected:number;
  //owner: OwnerModel[] = [];
//  ownersFilteredLst: OwnerCustomModel[] = [];
privilagesFilteredLst: PrivilageCustomModel[] = [];
  initForm() {
    this.roleForm = this.formBuilder.group({
      id:[null],
      roleName: ["", [Validators.required]],
   
      privilage: this.formBuilder.array([]),

     
    });
  }
  CustomSearchFn(term:string,item)
  {
    item.name=item.name.replace(',','');
    term=term.toLocaleLowerCase();
    return item.name.toLocaleLowerCase().indexOf(term)>-1;

  }
 
  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // Connect sort after view initialization
  }

  sortData(sort: MatSort): void {
    const data: Array<{
      name: string;
 

      sortable: boolean;
      ischecked:boolean;
      canView:boolean;
      canAdd:boolean;
      canUpdate:boolean;
      canDelete:boolean;

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
        /*  case 'HafezaId':
            return this.compare(
              a.hafezaId.toLowerCase(),
              b.hafezaId.toLowerCase(),
              isAsc
            );*/

            
          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      name: string;
  
      sortable: boolean;
      ischecked:boolean;
      canView:boolean;
      canAdd:boolean;
      canUpdate:boolean;
      canDelete:boolean;

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
      name: this.nameFilter.nativeElement.value,
   

   
      sortable: true,
    ischecked:false
 

    };
   // this.dataSource.data=  this.dataSource.data.filter(x=>x.nationalId!=257125366)

    this.dataSource.filterPredicate = (
      data: { name: string;

        sortable: boolean;
        ischecked:false;
        canView:boolean;
        canAdd:boolean;
        canUpdate:boolean;
        canDelete:boolean;

      },
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
     if (data.name == "")
 
      {
        return true; 
      }
      return (
       ( data.name
         .toLowerCase()
          .includes(searchText.name.toLowerCase())
       /*  &&
      ( data.hafezaId||'')
   
          .includes(searchText.hafezaId) 
        
          &&
         ( data.nationalId||'').toString()
               .includes(searchText.nationalId)*/
      
       
               )
             
               
               );

    };
  //this.dataSource.data=  this.dataSource.data.filter(x=>x.ischecked==false)

    this.dataSource.filter = JSON.stringify(filterValues);

   if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  checkedrow:boolean;
  checkedrows:boolean[]=[];

 /* check(values,id,name)
  {
    let o=new  PrivilageCustomModel();

    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;

console.log(this.index);
o.id=id;
o.name=name;

o.ischecked=true;
o.sortable=true;
this.privilagesFilteredLst.push(o);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);

this.returnValueByelementid(id)==true;

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);


  
      this.index--;

  console.log(this.index);
  o.id=id;
  o.name=name;

  this.privilagesFilteredLst.pop();
  this.privilageID.pop();

  console.log("Privilage Id is "+this.privilageID);
  
  console.log(o);

  console.log("Privilage Id is222 "+this.privilageID);
  this.returnValueByelementid(id)==false;

      } 

    
  }*/
  returnValueByelementid(id)
  {
if(
  (this.privilageRole.find(x=>x==id&&x.view==true))||
  (this.privilages.find(x=>x.id==id&&x.ischecked==true)))


return true;
else
return false;
  }

  check(values,id,name)
  {
    //this.owner[id].ischecked=true;
   let o=new  PrivilageCustomModel();
    let o1=new PrivilageRoleModel();


    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.name=name;
//o.hafezaId=hafezaId;
//o.nationalId=nationalId;
o.ischecked=true;
o.sortable=true;

o1.id=id;
o1.view=true;
//o1.add=false;
//o1.update=false;
//o1.delete=false;
if(this.privilageRole.find(item => item.id == id)!=null)
this.privilageRole.find(item => item.id == id).view =true;
else
this.privilageRole.push(o1);

this.privilagesFilteredLst.push(o);



//this.OwnersName.push(o.name);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);
console.log(this.privilageRole);

console.log("o1 is= "+o1);

//console.log(this.ownersFilteredLst);
//this.dataSource = new MatTableDataSource(this.ownersFilteredLst);

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);

      //this.submitted = true;
      //this.isSubmitted =false;
  
      this.index--;
  //this.OwnerId=id;
  //this.search();
  console.log(this.index);
  o.id=id;
  o.name=name;
  o1.id=id;
  o1.view=false;
o.ischecked=false;
 /* o.hafezaId=hafezaId;
  o.nationalId=nationalId;*/
  this.privilagesFilteredLst.pop();


  if(this.privilageRole.find(item => item.id == id)!=null)
this.privilageRole.find(item => item.id == id).view =false;
if(this.privilageRole.find(item => item.id == id&&item.add==false&&item.delete==false
  &&item.update==false&&item.view==false)!=null)
  this.privilageRole.pop();

  this.privilageID.pop();
  //this.OwnersName.pop();

  console.log("Privilage Id is "+this.privilageID);
  
  console.log(o);
 // console.log(this.ownersFilteredLst);

  console.log("Privilage Id is222 "+this.privilageID);

      } 
      //this.OwnersName.join('\n');

    
  }
 /* returnValueByelementid(id)
  {
if(this.privilagesFilteredLst.find(x=>x.id==id&&x.ischecked==true))
return true;
else
return false;
  }
*/
  privilageRole:PrivilageRoleModel[]=[];
   //o1=new PrivilageRoleModel();
 //o: PrivilageCustomModel;
  check1(values,id,name)
  {
    let o1=new PrivilageRoleModel();
let o=new PrivilageCustomModel();
    //this.owner[id].ischecked=true;
  
  //privilageRole:PrivilageRoleModel[]=[];

    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.name=name;
//o.hafezaId=hafezaId;
//o.nationalId=nationalId;
//o.ischecked=true;
o.sortable=true;
o.CanAdd=true;
o1.id=id;
o1.add=true;

if(this.privilageRole.find(item => item.id == id)!=null)
this.privilageRole.find(item => item.id == id).add =true;
else
this.privilageRole.push(o1);
//this.o1.add=2;
//this.privilageRole.push(o1);
this.privilagesFilteredLst.push(o);
//this.OwnersName.push(o.name);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);
console.log("o1="+o1);

//console.log(this.ownersFilteredLst);
//this.dataSource = new MatTableDataSource(this.ownersFilteredLst);

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);

      //this.submitted = true;
      //this.isSubmitted =false;
  
      this.index--;
  //this.OwnerId=id;
  //this.search();
  console.log(this.index);
  o.id=id;
  o.name=name;
 /* o.hafezaId=hafezaId;
  o.nationalId=nationalId;*/
  o1.id=id;
  if(this.privilageRole.find(item => item.id == id)!=null)
  this.privilageRole.find(item => item.id == id).add =false;
  if(this.privilageRole.find(item => item.id == id&&item.add==false&&item.delete==false
    &&item.update==false&&item.view==false)!=null)
    this.privilageRole.pop();
  this.privilagesFilteredLst.pop();
  this.privilageID.pop();
  //this.OwnersName.pop();

  console.log("Privilage Id is "+this.privilageID);
  
  console.log(o);
 // console.log(this.ownersFilteredLst);

  console.log("Privilage Id is222 "+this.privilageID);

      } 
      //this.OwnersName.join('\n');

    
  }
  returnValueByelementid1(id)
  {
//if(this.privilagesFilteredLst.find(x=>x.id==id&&x.CanAdd==true))

if(
  //(this.privilagesFilteredLst.find(x=>x.id==id&&x.CanAdd==true))

//||
(this.privilageRole.find(x=>x==id&&x.add==true))
||
  (this.privilages.find(x=>x.id==id&&x.canAdd==true)))
return true;
else
return false;
  }

  check2(values,id,name)
  {
    let o1=new PrivilageRoleModel();
let o=new PrivilageCustomModel();
    //this.owner[id].ischecked=true;
  
  //privilageRole:PrivilageRoleModel[]=[];

    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.name=name;
//o.hafezaId=hafezaId;
//o.nationalId=nationalId;
//o.ischecked=true;
o.sortable=true;
//o.CanAdd=true;
o1.id=id;
o1.update=true;
o1.view=true;
o.ischecked=true;

if(this.privilageRole.find(item => item.id == id)!=null)
{
this.privilageRole.find(item => item.id == id).update =true;

this.privilageRole.find(item => item.id == id).view =true;
}
else
this.privilageRole.push(o1);
//this.o1.add=2;
//this.privilageRole.push(o1);
this.privilagesFilteredLst.push(o);
//this.OwnersName.push(o.name);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);
console.log("o1="+o1);

//console.log(this.ownersFilteredLst);
//this.dataSource = new MatTableDataSource(this.ownersFilteredLst);

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);

      //this.submitted = true;
      //this.isSubmitted =false;
  
      this.index--;
  //this.OwnerId=id;
  //this.search();
  console.log(this.index);
  o.id=id;
  o.name=name;
 /* o.hafezaId=hafezaId;
  o.nationalId=nationalId;*/
  o1.id=id;
  if(this.privilageRole.find(item => item.id == id)!=null)
  this.privilageRole.find(item => item.id == id).update =false;
  if(this.privilageRole.find(item => item.id == id&&item.add==false&&item.delete==false
    &&item.update==false&&item.view==false)!=null)
    this.privilageRole.pop();
  this.privilagesFilteredLst.pop();
  this.privilageID.pop();
  //this.OwnersName.pop();

  console.log("Privilage Id is "+this.privilageID);
  
  console.log(o);
 // console.log(this.ownersFilteredLst);

  console.log("Privilage Id is222 "+this.privilageID);

      } 
      //this.OwnersName.join('\n');

    
  }
  returnValueByelementid2(id)
  {
if(this.privilagesFilteredLst.find(x=>x.id==id&&x.CanUpdate==true)

||(this.privilageRole.find(x=>x==id&&x.update==true))
||
  (this.privilages.find(x=>x.id==id&&x.canUpdate==true)))
return true;
else
return false;
  }

  check3(values,id,name)
  {
    let o1=new PrivilageRoleModel();
let o=new PrivilageCustomModel();
    //this.owner[id].ischecked=true;
  
  //privilageRole:PrivilageRoleModel[]=[];

    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.name=name;
//o.hafezaId=hafezaId;
//o.nationalId=nationalId;
//o.ischecked=true;
o.sortable=true;
//o.CanAdd=true;
o1.id=id;
o1.delete=true;
o1.view=true;
o.ischecked=true;
if(this.privilageRole.find(item => item.id == id)!=null)
{
this.privilageRole.find(item => item.id == id).delete =true;

this.privilageRole.find(item => item.id == id).view =true;
}
else
this.privilageRole.push(o1);
//this.o1.add=2;
//this.privilageRole.push(o1);
this.privilagesFilteredLst.push(o);
//this.OwnersName.push(o.name);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);
console.log("o1="+o1);

//console.log(this.ownersFilteredLst);
//this.dataSource = new MatTableDataSource(this.ownersFilteredLst);

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);

      //this.submitted = true;
      //this.isSubmitted =false;
  
      this.index--;
  //this.OwnerId=id;
  //this.search();
  console.log(this.index);
  o.id=id;
  o.name=name;
 /* o.hafezaId=hafezaId;
  o.nationalId=nationalId;*/
  o1.id=id;
  if(this.privilageRole.find(item => item.id == id)!=null)
  this.privilageRole.find(item => item.id == id).delete =false;
  if(this.privilageRole.find(item => item.id == id&&item.add==false&&item.delete==false
    &&item.update==false&&item.view==false)!=null)
    this.privilageRole.pop();
  this.privilagesFilteredLst.pop();
  this.privilageID.pop();
  //this.OwnersName.pop();

  console.log("Privilage Id is "+this.privilageID);
  
  console.log(o);
 // console.log(this.ownersFilteredLst);

  console.log("Privilage Id is222 "+this.privilageID);

      } 
      //this.OwnersName.join('\n');

    
  }
  returnValueByelementid3(id)
  {
    if(this.privilagesFilteredLst.find(x=>x.id==id&&x.CanDelete==true)

    ||(this.privilageRole.find(x=>x==id&&x.delete==true))
    ||
      (this.privilages.find(x=>x.id==id&&x.canDelete==true)))
      return true;
else
return false;
  }
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.roleForm.invalid) {
      return;
    }
    const rolModel = this.roleForm.value;
    let model = {
      id:this.Id,
      roleName: rolModel.roleName,

     // privilage:rolModel.privilage,
privilage:this.privilageRole
      
    };

//fdfdf

//dfdf
model.id=this.Id;
//model.privilage=this.privilageRole;
const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.roleName)==true)
this.toastrService.danger("يجب إدخال بيانات الدور لإتمام عملية الحفظ","خطأ");
else
{
    this.role.updateRole(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Role);
      // console.log("planfile"+this.EverId);
       // console.log("pppp"+this.AttachmentsssId);

console.log("dsd", this.privilageID);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Roles';

       this.router.navigateByUrl(returnUrl);   
         },
         error: (err) => {


          this.toastrService.danger(err.error.error,"خطأ");
          this.submitted=false;
          this.isSubmitted=false;
             
          }
    });
  }
}
 attachmentId1:number;


 // currentselectedOwner:OwnerCustomModel;
OwnerId:string;
  addToGrant(id:string,name:string,nationalId:number,hafezaId:string)
  {
    this.submitted = true;
    this.isSubmitted =false;
    let o=new  PrivilageCustomModel();

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.name=name;
//o.hafezaId=hafezaId;
/*o.nationalId=nationalId;*/
this.privilagesFilteredLst.push(o);
this.privilageID.push(o.id);
console.log("Privilage Id is "+this.privilageID);

console.log(o);
//console.log(this.ownersFilteredLst);


/*o.id="";
o.name="";
o.hafezaId="";
o.nationalId=0;*/

/*o.name='doaa'
o.hafezaId='doaa1'
o.nationalId=2
this.ownersFilteredLst.push(o);
console.log(o);
o.name=""
o.hafezaId=""
o.nationalId=0*/

//    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Owners/edit/'+id;

  //  this.router.navigateByUrl(returnUrl);
  }
  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/PlanParts/add/'+22;


    this.router.navigateByUrl(returnUrl);
  }
  get fc() {
    return this.roleForm.controls;
  }

  get grantFiles() {
    return this.grantFiles.controls["grantFiles"] as FormArray;
  }
  name:string;
  showOwners() {
    this.name = 'Grant Owners are ';
    let title =  this.translate.get("Owners", { entity: name }).toPromise();
    let body =  this.translate.get("DeleteMessage", { entity: name }).toPromise();
    
    this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: `${title}`,
          body: `${body}?`,
        },
      })
   
  }
  get privilage() {
    return this.privilage.controls["privilage"] as FormArray;
  }
}
