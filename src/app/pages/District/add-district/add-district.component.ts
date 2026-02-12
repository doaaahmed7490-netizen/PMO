import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DistrictModel } from '../../../models/District/District.model';
import { DistrictService } from '../../../services/district.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.scss']
})
export class AddDistrictComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private districtService: DistrictService,
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

  ngOnInit() {
    this.initForm();
    this.getDistricts();
  }
  getDistricts() {
    this.districtService
      .searchDistrict({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.districts = res.entity.entities;
      });
  }
  initForm() {
    this.districtForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
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
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/DocumentsTypes';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/DocumentsTypes';



    this.router.navigateByUrl(returnUrl);
 }
 
  get fc() {
    return this.districtForm.controls;
  }
}
