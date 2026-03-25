import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Add-Transaction',
  templateUrl: './Add-Transaction.component.html',
  styleUrls: ['./Add-Transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  StrategicGoalsForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
    //  private startegicGoalService: StartegicGoalService,
    //  private toastrService: ToastrService

  ) {
    //if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
  //this.router.navigateByUrl('/auth');

   }
   options=[];
      options1=[];
Country=[];
Districts=[];
State=[];
custs=[];
emps=[];
   selectedValue=''
     customers = [
    { id: 1, name: 'امانة جدة' },
    { id: 2, name: 'شركة اسار' },
  ];
  ngOnInit(){
    
     this.selectedValue = '';
  this.options = [
    { id: 1, label: 'رخص البناء' },
    { id: 2, label: 'القررات المساحية'}
  ];
   this.options1 = [
    { id: 1, label:'تطوير مواقع' },
    { id: 2, label:'تطوير أنظمة ERP أو CRM'},
    { id: 3, label: 'إنشاء طرق' },
        { id: 4, label:'إنشاء مباني سكنية' }
  ];
     this.Country = [
    { id: 1, label: 'السعودية' },
    { id: 2, label: 'مصر' },
    { id: 3, label: 'الامارات العربية المتحدة' }
  ];
   this.State = [
    { id: 1, label: 'الرياض' },
    { id: 2, label: 'جدة' },
    { id: 3, label: 'الطائف' }
  ];
    this.Districts = [
    { id: 1, label: 'حى الحمراء' },
    { id: 2, label: 'حى الصفاء' },
        { id: 3, label: 'حى الروضة' },

    { id: 3, label: 'ابحر الشمالية' }

  ];
  
     this.custs = [
    { id: 1, label: 'امانة جدة' },
    { id: 2, label: 'جامعة دار الحكمة' },
    { id: 3, label: 'شركة اسار' }
  ];
     this.emps = [
    { id: 1, label: 'محمود احمد' },
    { id: 2, label: 'محمد احمد' },
    { id: 3, label: 'مالك محمد' }
  ];
    this.initForm();
  }
 
  isCustomer(): boolean {
    return this.StrategicGoalsForm.get('agencyType')?.value === 'customer';
  }

  isAgency(): boolean {
    return this.StrategicGoalsForm.get('agencyType')?.value === 'agency';
  }
  isCitizen(): boolean {
    return this.StrategicGoalsForm.get('agencyType')?.value === 'Citizen';
  }
  initForm() {
      this.StrategicGoalsForm = this.formBuilder.group({
        TranNo: ['', Validators.required],
        TranDesc:['', Validators.required],
        categId:['', Validators.required],
 agencyType: ['', Validators.required],
      customerId: [''],
      AgencyName: [''],
      
            citizenName: [''],

      nationalId: [''],
          //    Desc:[''],
          goalDesc: [''],
          empId:[''],
          projectCost:[''],
          fromDate:[null],
          toDate:[null],
          state:[''],
          district:[''],



      });
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.StrategicGoalsForm.controls; }



/*
  save() {
    const model1 = this.StrategicGoalsForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
    if (this.StrategicGoalsForm.invalid) {
      return;
    }
    this.startegicGoalService.addStartegicGoal(model1).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
         this.router.navigate(["./table"]);
      },
      error: (e) => console.error(e)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.StrategicGoalsForm.invalid) {
      return;
    }
    this.loading=true;
    const model1 = this.StrategicGoalsForm.value;
 

    let model = {
      strategicGoalName: model1.strategicGoal,
      strategicGoalDesc: model1.goalDesc

      
    };
    const isWhitespaceString = str => !/\S/.test(str)
   if( isWhitespaceString(model.strategicGoalName)==true)
   this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
   else
   {
    this.startegicGoalService.addStartegicGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.StrategicGoal);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/StrategicGoals';

        this.router.navigateByUrl(returnUrl);      
      },
     
     error: (err) => {


      this.toastrService.danger(err.error.error,"خطأ");
      this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }
  }
  */
 onSubmit()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/IndependentTasks';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/IndependentTasks';



    this.router.navigateByUrl(returnUrl);
 }
  get fc() { return this.StrategicGoalsForm.controls; }

}
