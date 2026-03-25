import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from '../../../../services/toastr.service';
import { DistrictModel } from '../../../../models/District/District.model';
@Component({
  selector: 'app-Add-Milestones',
  templateUrl: './Add-Milestones.component.html',
  styleUrls: ['./Add-Milestones.component.css']
})
export class AddMilestonesComponent implements OnInit {
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
options=[];
   selectedValue=''
   options1=[];

  ngOnInit() {
      this.options = [
    { id: 1, label: 'مشاريع تقنية المعلومات' },
  ];
   this.options1 = [
    { id: 1, label: 'تطوير مواقع إلكترونية' },
    { id: 2, label: 'تطوير انظمة ERP' },
    { id: 3, label: 'تطوير مواقع جيومكانية' }
  ];
    this.initForm();
    //this.getDistricts();
  }
 
  initForm() {
    this.districtForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
            state: ["", [Validators.required, Validators.minLength(3)]],
milestone:["",Validators.required],
      notes: [""]
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
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones';



    this.router.navigateByUrl(returnUrl);
 }
 
  get fc() {
    return this.districtForm.controls;
  }
}
