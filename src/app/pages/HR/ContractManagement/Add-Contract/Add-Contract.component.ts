import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from '../../../../services/toastr.service';
@Component({
  selector: 'app-Add-Contract',
  templateUrl: './Add-Contract.component.html',
  styleUrls: ['./Add-Contract.component.css']
})
export class AddContractComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService
  ) {}
  districtForm: FormGroup;
  Types = ["Event", "Knowledge Center"];
  submitted = false;
  isSubmitted :boolean= false;
options=[];
ContractType=[];
  ngOnInit() {
     this.options = [
        { id: 1, label: 'احمد محمد' },
        { id: 2, label: 'محمود محمد' },
        { id: 3, label: 'مالك محمد' }
      ];

       this.ContractType  = [
  {  type: 'عقد محدد المدة', notes: 'عقد يتم تحديد تاريخ بداية ونهاية له، وينتهي بانتهاء المدة المتفق عليها ما لم يتم تجديده وفقاً للنظام.' },
     {  type: 'عقد عمل غير محدد المدة', notes: 'عقد لا يتم تحديد تاريخ نهاية له، ويستمر إلى أن يتم إنهاؤه وفقاً لأحكام نظام العمل.'  },
     {  type: 'عقد لإنجاز عمل محدد', notes: 'عقد يرتبط بتنفيذ مهمة أو عمل محدد، وينتهي عند اكتمال العمل المتفق عليه.'  },
     {  type: 'عقد عمل لبعض الوقت / دوام جزئي', notes: 'يعمل الموظف عدد ساعات اقل من ساعات العمل اليومية المعتادة في الشركة'  },

     {  type: 'عقد مرتبط بمشروع', notes: 'مسؤول عن تنسيق الاجتماعات ومتابعة المهام وتحديث بيانات المشروع.'  },
     {  type: 'عقد العمل المرن', notes: 'نظام تعاقدي يعتمد على العمل بالساعة، وله ضوابط خاصة.'  },

    ];
    this.initForm();
    //this.getDistricts();
  }
 
  initForm() {
    this.districtForm = this.formBuilder.group({
      ContractNo: [""],
      ContractType:[null],
      FromDate:[""],
      ToDate:[""],
       BasicSalary:[null],
HousingAllowance:[null],
TransportationAllowance:[null],
OtherAllowance:[null],
NoticePeriod:[null],

ProbationPeriod:[null],
      notes: [""],
      ContractDoc:[null],
      OtherDoc:[null]

   //   parentId: [""],
    });
  }
  /*
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.districtForm.invalid) {
      return;
    }
    const districtModel = this.districtForm.value;
    let model = {
      name: districtModel.name,
      notes: districtModel.notes,
    
      parentId:
      districtModel.parentId.length < 1 ? null : districtModel.parentId,
    };
  

    this.districtService.addDistrict(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.District);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/District';

        this.router.navigateByUrl(returnUrl);      
      },

     error: (err) => {



      this.toastrService.danger("هذه البيانات تم إضافتها سابقاً","تكرار البيانات");
      this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }
  */
 
   onSubmit()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Contract';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Contract';



    this.router.navigateByUrl(returnUrl);
 }
 
  get fc() {
    return this.districtForm.controls;
  }
}
