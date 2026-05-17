import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from '../../../../services/toastr.service';
import { DistrictModel } from '../../../../models/District/District.model';
@Component({
  selector: 'app-Add-Bid',
  templateUrl: './Add-Bid.component.html',
  styleUrls: ['./Add-Bid.component.css']
})
export class AddBidComponent implements  OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService
  ) {}
  districtForm: FormGroup;
  districts: DistrictModel[] = [];
  Types = ["Event", "Knowledge Center"];
  submitted = false;
  isSubmitted :boolean= false;
Entities=[];
Country=[];
City=[];
Region=[];
BidSources=[];
OfferMethods=[];
Managers=[];
  ngOnInit() {
    this.initForm();
    //this.getDistricts();
    this.BidSources = [
    { id: 1, label: 'البريد الإلكتروني' },
    { id: 2, label: 'الموقع الرسمي للشركة' },
    { id: 3, label: 'المنصة الحكومية الرسمية' },
    { id: 4, label: 'دعوة مباشرة' },
        { id: 5, label: ' عميل حالي' },
     { id: 6, label: 'وسائل التواصل الاجتماعي' },
      { id: 7, label: 'شركة وسيطة' },

      { id: 8, label: 'اخرى' },



  ];
    this.OfferMethods = [
    { id: 1, label: ' البريد الإلكتروني' },
    { id: 2, label: ' الموقع الرسمي للشركة' },
    { id: 3, label: 'المنصة  الحكومية الرسمية' },
    { id: 4, label: 'يدوى' }



  ];

  this.Managers = [
    { id: 1, label: 'م/شريف علاء' },
    { id: 2, label: 'م/ محمد احمد' },
    { id: 3, label: 'م/محود احمد' }


  ];
       this.Entities = [
    { id: 1, label: 'امانة جدة' },
    { id: 2, label: 'امانة تبوك' },
    { id: 3, label: 'امانة المدينة' }
  ];

       this.Country = [
    { id: 1, label: 'السعودية' },
    { id: 2, label: 'مصر' },
    { id: 3, label: 'الامارات العربية المتحدة' }
  ];
   this.City = [
    { id: 1, label: 'الرياض' },
    { id: 2, label: 'جدة' },
    { id: 3, label: 'الطائف' }
  ];
   this.Region = [
    { id: 1, label: 'حى الحمراء' },
    { id: 2, label: 'حى الصفا' },
    { id: 3, label: 'حى المروة' }
  ];
  }
 
  initForm() {
    this.districtForm = this.formBuilder.group({
      BidName: ["", [Validators.required, Validators.minLength(3)]],
      ReferenceNo: [""],
     EntityName: [""],
     BidAnnouncementType:[""],
     BidSource:[""],
     BidTarget:[""],
     PublishDate:[""],
     Country:[""],
     City:[""],
     District:[""],
     Address:[""],
     InquiryDate:[""],
     //OfferDate:[""],
     DeadlineSubmittingDate:[""],
     CategRequired:[""],
     BidDocValue:[null],
     InitialGuaranteeType:[''],
     InitialGuaranteeVal:[null],
     OfferMethod:[null],
     ContractPeriod:[''],
     ContactPhone:[''],
     ContactEmail:[''],
     Manager:['']





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
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Country';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Country';



    this.router.navigateByUrl(returnUrl);
 }
 
  get fc() {
    return this.districtForm.controls;
  }
}
