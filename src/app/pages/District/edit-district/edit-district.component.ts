import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DistrictModel } from '../../../models/District/District.model';
import { DistrictService } from '../../../services/district.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-district',
  templateUrl: './edit-district.component.html',
  styleUrls: ['./edit-district.component.scss']
})
export class EditDistrictComponent implements OnInit {
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
  Id: string;
  currentDistrict:DistrictModel;
  selectedItems :string;
  ngOnInit() {
    this.initForm();
    this.getDistricts();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getDistrictInfoById();
  }

  getDistrictInfoById() {
    this.districtService.getDistrictById(this.Id).subscribe((res) => {
      this.currentDistrict = res.entity;
      this.bindForm();
    });
  }
  bindForm() {
  //if(this.currentDistrict.parentId==null)
//this.selectedItems=this.currentDistrict.parentName;
    this.districtForm.controls["Id"].setValue(this.currentDistrict.id);
    this.districtForm.controls["name"].setValue(this.currentDistrict.name);
    this.districtForm.controls["notes"].setValue(this.currentDistrict.notes);
    this.districtForm.controls["parentId"].setValue(this.currentDistrict.parentId);
    //this.districtForm.controls["parentName"].setValue(this.currentDistrict.parentName == null? '' : this.currentDistrict.parentName);
   // this.districtForm.controls["parentId"].setValue(this.currentDistrict.parentId == null? '' : this.currentDistrict.parentId);

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
      Id: [""],
      name: ["", [Validators.required, Validators.minLength(3)]],
      notes: [""],
      parentId: [""],
    });
  }
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.districtForm.invalid) {
      return;
    }
    const districtModel = this.districtForm.value;
    let model = {
    id:this.Id,
      name: districtModel.name,
      notes: districtModel.notes,
    
      parentId:
      districtModel.parentId.length < 1 ? null : districtModel.parentId,
    };
    model.id=this.Id;
    this.districtService.updateDistrict(model).subscribe((res) => {
      if (res.status == 200) {
        this.toastrService.Update(EntityNames.District);
        this.getDistricts();

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/District';

        this.router.navigateByUrl(returnUrl);      }
    });
  }
 
 
  get fc() {
    return this.districtForm.controls;
  }
}
