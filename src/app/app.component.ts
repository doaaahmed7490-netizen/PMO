/* import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NbMenuItem, NbThemeService, NbToastrService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';

import { ThemeModeService } from './components/navbar/theme-mode.service';
import { Store } from '@ngrx/store';
import { AuthUser } from './models/auth-user.model';
import { LanguageService } from './components/navbar/language.service';
import { SidebarService } from './components/navbar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems: NbMenuItem[] = [
    {
      title: 'E-commerce',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'IoT Dashboard',
      link: '/pages/iot-dashboard',
    },
    {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'Layout',
      children: [
        {
          title: 'Stepper',
          link: '/pages/layout/stepper',
        },
        {
          title: 'List',
          link: '/pages/layout/list',
        },
        {
          title: 'Infinite List',
          link: '/pages/layout/infinite-list',
        },
        {
          title: 'Accordion',
          link: '/pages/layout/accordion',
        },
        {
          title: 'Tabs',
          pathMatch: 'prefix',
          link: '/pages/layout/tabs',
        },
      ],
    },
    {
      title: 'Forms',
      children: [
        {
          title: 'Form Inputs',
          link: '/pages/forms/inputs',
        },
        {
          title: 'Form Layouts',
          link: '/pages/forms/layouts',
        },
        {
          title: 'Buttons',
          link: '/pages/forms/buttons',
        },
        {
          title: 'Datepicker',
          link: '/pages/forms/datepicker',
        },
      ],
    },
    {
      title: 'UI Features',
      link: '/pages/ui-features',
      children: [
        {
          title: 'Grid',
          link: '/pages/ui-features/grid',
        },
        {
          title: 'Icons',
          link: '/pages/ui-features/icons',
        },
        {
          title: 'Typography',
          link: '/pages/ui-features/typography',
        },
        {
          title: 'Animated Searches',
          link: '/pages/ui-features/search-fields',
        },
      ],
    },
    {
      title: 'Modal & Overlays',
      children: [
        {
          title: 'Dialog',
          link: '/pages/modal-overlays/dialog',
        },
        {
          title: 'Window',
          link: '/pages/modal-overlays/window',
        },
        {
          title: 'Popover',
          link: '/pages/modal-overlays/popover',
        },
        {
          title: 'Toastr',
          link: '/pages/modal-overlays/toastr',
        },
        {
          title: 'Tooltip',
          link: '/pages/modal-overlays/tooltip',
        },
      ],
    },
    {
      title: 'Extra Components',
      children: [
        {
          title: 'Calendar',
          link: '/pages/extra-components/calendar',
        },
        {
          title: 'Progress Bar',
          link: '/pages/extra-components/progress-bar',
        },
        {
          title: 'Spinner',
          link: '/pages/extra-components/spinner',
        },
        {
          title: 'Alert',
          link: '/pages/extra-components/alert',
        },
        {
          title: 'Calendar Kit',
          link: '/pages/extra-components/calendar-kit',
        },
        {
          title: 'Chat',
          link: '/pages/extra-components/chat',
        },
      ],
    },
    {
      title: 'Maps',
      children: [
        {
          title: 'Google Maps',
          link: '/pages/maps/gmaps',
        },
        {
          title: 'Leaflet Maps',
          link: '/pages/maps/leaflet',
        },
        {
          title: 'Bubble Maps',
          link: '/pages/maps/bubble',
        },
        {
          title: 'Search Maps',
          link: '/pages/maps/searchmap',
        },
      ],
    },
    {
      title: 'Charts',
      children: [
        {
          title: 'Echarts',
          link: '/pages/charts/echarts',
        },
        {
          title: 'Charts.js',
          link: '/pages/charts/chartjs',
        },
        {
          title: 'D3',
          link: '/pages/charts/d3',
        },
      ],
    },
    {
      title: 'Editors',
      children: [
        {
          title: 'TinyMCE',
          link: '/pages/editors/tinymce',
        },
        {
          title: 'CKEditor',
          link: '/pages/editors/ckeditor',
        },
      ],
    },
    {
      title: 'Tables & Data',
      children: [
        {
          title: 'Smart Table',
          link: '/pages/tables/smart-table',
        },
        {
          title: 'Tree Grid',
          link: '/pages/tables/tree-grid',
        },
      ],
    },
    {
      title: 'Miscellaneous',
      children: [
        {
          title: '404',
          link: '/pages/miscellaneous/404',
        },
      ],
    },
    {
      title: 'Auth',
      children: [
        {
          title: 'Login',
          link: '/auth/login',
        },
        {
          title: 'Register',
          link: '/auth/register',
        },
        {
          title: 'Request Password',
          link: '/auth/request-password',
        },
        {
          title: 'Reset Password',
          link: '/auth/reset-password',
        },
      ],
    },
  ];
  ThemeSubscription: Subscription;
  auth$: Observable<AuthUser>;
  authStoreSub: Subscription;
  showSidebar: boolean;
  sidebarRight: boolean;
  sidebarSub: Subscription;
  sidebarCollapseSub: Subscription;
  sidebarCollapse: boolean;

  constructor(
    private NbThemeService: NbThemeService,
    private themeModeService: ThemeModeService,
    private store: Store<{ auth: AuthUser }>,
    private languageService: LanguageService,
    private sidebarService: SidebarService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.toastrService.show('this is a toastr', 'title', {
      status: 'success',
    });

    this.ThemeSubscription = this.themeModeService.themeMode.subscribe(
      (theme) => {
        this.NbThemeService.changeTheme(theme);
      }
    );

    this.sidebarSub = this.languageService.sidebarRight.subscribe(
      (rightDirection: boolean) => {
        this.sidebarRight = rightDirection;
      }
    );

    this.sidebarCollapseSub = this.sidebarService.sidebarSubject.subscribe(
      (collapse: boolean) => {
        this.sidebarCollapse = collapse;
      }
    );

    this.auth$ = this.store.select('auth');

    this.authStoreSub = this.auth$.subscribe((user) => {
      if (user) {
        this.showSidebar = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.ThemeSubscription.unsubscribe();
    this.sidebarCollapseSub.unsubscribe();
    this.sidebarSub.unsubscribe();
    this.authStoreSub.unsubscribe();
  }
}
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';
import { Observable, Subscription } from 'rxjs';

import { ThemeModeService } from './components/navbar/theme-mode.service';
import { Store } from '@ngrx/store';
import { AuthUser } from './models/auth-user.model';
import { SidebarService } from './components/navbar/sidebar.service';
import { NavigationEnd, Router } from '@angular/router';
import { MenuModel } from './models/User/menu.model';
import { RoleService } from './services/role.service';
import { MenuClassModel } from './models/User/menuclass.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  //, OnDestroy {
  ThemeSubscription: Subscription;
  auth$: Observable<AuthUser>;
  // authStoreSub: Subscription;
  // showSidebar: boolean;
  // sidebarRight: boolean;
  // sidebarSub: Subscription;
  // sidebarCollapseSub: Subscription;
  // sidebarCollapse: boolean;
  menu: NbMenuItem[] = [];
  MenuLst: MenuModel[] = [];
  mmLst: MenuClassModel[] = [];
  lang: string;
  blur: boolean = false;
  menuSub: Subscription;
  isAuthRoute: boolean;

  constructor(
    private NbThemeService: NbThemeService,
    private themeModeService: ThemeModeService,
    private store: Store<{ auth: AuthUser }>,
    // private languageService: LanguageService,
    private sidebarService: SidebarService,
    // private translate: TranslateService,
    private route: Router,
    private roleservice: RoleService,
    private cd: ChangeDetectorRef
  ) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is '/auth'
        this.isAuthRoute = this.route.url === '/auth';
      }
    });
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  ngOnInit(): void {
    /*  this.toastrService.show('this is a toastr', 'title', {
      status: 'success',
    });
    console.log("In ngOnInit")*/

    this.ThemeSubscription = this.themeModeService.themeMode.subscribe(
      (theme) => {
        this.NbThemeService.changeTheme(theme);
      }
    );

    // this.sidebarSub = this.languageService.sidebarRight.subscribe(
    //   (rightDirection: boolean) => {
    //     this.sidebarRight = rightDirection;
    //   }
    // );

    this.menuSub = this.sidebarService.menuSubject.subscribe((menu) => {
      menu.length > 0 ? (this.blur = true) : (this.blur = false);
    });
  this.menu = [
           {
            title: 'لوحة التحكم',
            link: '/dashboard',
          },
          {
            title: 'المشاريع',
            children: [
              {
                title:'بيانات المشاريع',
                link: '/StrategicGoals',
              },
              {
                title: 'مرفقات المشاريع',
                link: '/ProjectDocuments',
              },
        
           {
            title:'البيانات الاساسية',
            children: [
              {
                title: 'انواع المرفقات',
                link: '/DocumentsTypes',
              },
             
            
            
            ],
          },    
            
            ],
          },
        
          {
            title: 'الادارات',
            link: '/Departments',
          },
          {
            title:'البيانات الاساسية',
            children: [
              {
                title: 'الوظائف',
                link: '/Jobs',
              },
              {
                title: 'الموظفيين',
                link: '/Employee',
              },
              /*{
                title: 'الخدمات',
                link: '/Services',
              }*/
            
            
            ],
          },
        
   
          
        ];
    /*  if(!this.auth.IsLogged())
{
  this.showSidebar = false;

/*this.showSidebar = true;
this.loadMenuTranslations();
console.log("HHHHHHHHHHHello");
  if(this.languageService.currentLanguage=="ar")

*/

    //}*/
    //this.roleservice.loadmenu(localStorage.getItem("RoleId"),this.languageService.currentLanguage).subscribe((res) => {
    //if(this.auth.IsLogged())
    /*
    if (this.route.url != '/auth')
      if (
        localStorage.getItem('RoleId') != null &&
        localStorage.getItem('RoleId') != ''
      ) {
        this.IsLogin == true;
        console.log('AppRole' + localStorage.getItem('RoleId'));
        this.roleservice
          .loadmenu(localStorage.getItem('RoleId'), 'ar')
          .subscribe((res) => {
            this.mmLst = res;
          
              
            console.log('LoadMenu_AppComponent' + res);
            this.menu = this.mmLst;
            this.cd.detectChanges();
          });
        this.cd.detectChanges();
      } else {
        this.menu = [];
        this.IsLogin = false;
      }
    this.auth$ = this.store.select('auth');
    */

    //  this.authStoreSub = this.auth$.subscribe((user) => {
    // if (user)
    /*  if(localStorage.getItem("token")!=null){
        this.showSidebar = true;

      //  this.loadMenuTranslations();
        this.roleservice.loadmenu(localStorage.getItem("RoleId"),"ar").subscribe((res) => {
          this.menu=res;
          this.MenuLst=res;

        });
      }
 */
    //    });

    /*if (this.route.url == '/auth') {
  this.showSidebar = false
}
 else

 //{
  this.showSidebar=true;*/

    /* this.auth$ = this.store.select('auth');

    this.authStoreSub = this.auth$.subscribe((user) => {
      if (user) {
        this.showSidebar = true;
        this.loadMenuTranslations();
      }

    });*/

    //else
    //this.showSidebar = false;
    /*
    this.loadMenuTranslations();
*/
    // Subscribe to language changes
    /* this.translate.onLangChange.subscribe(() => {
      if(this.languageService.currentLanguage=="ar")
      this.lang="ar";
else
this.lang="en";
this.roleservice.loadmenu(localStorage.getItem("RoleId"),this.translate.currentLang).subscribe((res) => {
        this.MenuLst = res;
        this.menu=this.MenuLst

      });
        });
    */
  }

  closeMenu(): void {
    this.sidebarService.toggleMenu();
  }

  IsLogin: boolean;
  hideNavBar: boolean = false;
  ngDoCheck(): void {
    if (
      this.route.url == '/auth' ||
      this.route.url.includes('UserSurvey/SubmitSurvey')
    ) {
      // this.showSidebar = false;
      this.hideNavBar = true;
      this.menu = [];
    } else {
      this.hideNavBar = false;

      // this.showSidebar = true;
      /* this.roleservice.loadmenu(localStorage.getItem("RoleId"),"ar").subscribe((res) => {

    this.MenuLst = res;
      console.log("LoadMenu"+res);
      this.menu=this.MenuLst;
      //this.loadMenuTranslations();

    });*/
      this.ThemeSubscription = this.themeModeService.themeMode.subscribe(
        (theme) => {
          this.NbThemeService.changeTheme(theme);
        }
      );

      // this.sidebarSub = this.languageService.sidebarRight.subscribe(
      //   (rightDirection: boolean) => {
      //     this.sidebarRight = rightDirection;
      //   }
      // );
    }
    /* this.auth$ = this.store.select('auth');

     this.authStoreSub = this.auth$.subscribe((user) => {
       if (user) {
         this.showSidebar = true;
         this.loadMenuTranslations();
       }

     });*/

    //else
    //this.showSidebar = false;
    //this.loadMenuTranslations();

    // Subscribe to language changes
    /*  this.translate.onLangChange.subscribe(() => {
       this.loadMenuTranslations();
     });
   }
   this.ThemeSubscription = this.themeModeService.themeMode.subscribe(
    (theme) => {
      this.NbThemeService.changeTheme(theme);
    }
  );*/
    /* else {
    this.showSidebar = true
    this.loadMenuTranslations();
    this.sidebarSub = this.languageService.sidebarRight.subscribe(
      (rightDirection: boolean) => {
        this.sidebarRight = rightDirection;
      }
    );

    this.sidebarCollapseSub = this.sidebarService.sidebarSubject.subscribe(
      (collapse: boolean) => {
        this.sidebarCollapse = collapse;
      }
    );
    this.translate.onLangChange.subscribe(() => {
      this.loadMenuTranslations();
    });

  }*/
  }
  // TOKEN: string;
  //   loadMenuTranslations(): void {
  //     this.translate
  //       .get([
  //         'plans',
  //         'Plan',
  //         'Parts',
  //         'Districts',
  //         'Blocks',
  //         'Parcel',
  //         'dashboard',
  //         'Grants',
  //         'Owner',
  //         'Royal-Grant',
  //         'Grant Land Status',
  //         'Grant Steps',
  //         'LetterType',
  //         'Land Cases Types',
  //         'Users',
  //         'Permissions',
  //         'Reports',
  //         'LetterExchange',
  //         'Report2',
  //         'Grant-Work-Flow',
  //         'Assign Land To Grant',
  //         'Assign Land To Grant From Map',
  //         'map',
  //         'Letters',
  //         'GrantLetter',
  //         'Not-Granted-Parcels',
  //         'Reports-Letters',
  //         'GrantedParcels',
  //         'DuplicateGrantedParcels',
  //         'ParcelsUnderProcess',
  //         'MAP-GIS',
  //         'Roles',
  //         'Grants-Data',
  //         'Grant-Cycles',
  //         'Grant Work Flow',
  //         'Basic Data',
  //         'Plans Basic Data',
  //         'Grants Basic Data',
  //         'Parcels',
  //         'Engineering-Offices',
  //         'SupremeOrderRpt',
  //         'ParcelsNotHasSaakInSupremeRpt',
  //         'Statistics-on-the-number-of-parcels-allocated-in-the-plan',
  //         'ParcelsAllocatedAndHaveSakInSupreme',
  //         'ParcelsAllocatedAndNotAllocatedInSupreme',
  //         'GetListOfSaakLettersInPeriod',
  //       ])
  //       .subscribe(() => {
  //         this.menu = this.MenuLst;
  //         /*this.menu = [  translations
  //           {
  //             title: translations['dashboard'],
  //             link: '/dashboard',
  //           },

  //           {
  //             title: translations['MAP-GIS'],
  //             link: '/gis',
  //           },
  //           {
  //             title: translations['Grants'],
  //             children: [
  //               {
  //                 title: translations['Owner'],
  //                 link: '/Owners',
  //               },
  //               {
  //                 title: translations['Royal-Grant'],
  //                 link: '/RoyalGrant',
  //               },
  //               {
  //                 title: translations['Grants-Data'],
  //                 link: '/Grant',
  //               },

  //               {
  //                 title: translations['Grant Work Flow'],
  //                 children: [
  //                   {
  //                     title: translations['Grant-Cycles'],
  //                     link: '/grantworkflow',
  //                   },
  //                   {
  //                     title: translations['Assign Land To Grant'],
  //                     link: '/GrantLands',
  //                   },
  //                   {
  //                     title: translations['Assign Land To Grant From Map'],
  //                     link: '/AssignLandToGrantFromMap',
  //                   },

  //                 ],

  //               },

  //             ],
  //           },
  //           {
  // title:translations["Basic Data"],
  // children:[
  //   {
  //     title: translations['Plans Basic Data'],
  //     children: [
  //       {
  //         title: translations['Districts'],
  //         link: '/District',
  //       },
  //       {
  //         title: translations['plans'],
  //         link: '/Plans',
  //       },
  //       {
  //         title: translations['Parts'],
  //         link: '/Parts',
  //       },

  //       {
  //         title: translations['Blocks'],
  //         link: '/Blocks',
  //       },
  //       {
  //         title: translations['Parcels'],
  //         link: '/Parcels',
  //       },
  //       {
  //         title: translations['Engineering-Offices'],
  //         link: '/EngineeringOffice',
  //       },
  //     ],

  //   },
  //   {
  //     title: translations['Grants Basic Data'],
  //     children: [
  //       {
  //         title: translations['Grant Land Status'],
  //         link: '/GrantLandStatus',
  //       },
  //       {
  //         title: translations['Grant Steps'],
  //         link: '/GrantSteps',
  //       },
  //       {
  //         title: translations['map'],
  //         link: '/map',
  //       },
  //       {
  //         title: translations['LetterType'],
  //         link: '/LetterType',
  //       },
  //       {
  //         title: translations['Land Cases Types'],
  //         link: '/LandCasesTypes',
  //       },
  //     ],
  //   },

  // ],

  //           },

  //           {
  //             title: translations['Users'],
  //             children: [
  //               {
  //                 title: translations['Users'],
  //                 link: '/Users',
  //               },
  //               {
  //                 title: translations['Permissions'],
  //                 link: '/Roles/Permissions',

  //               },
  //               {
  //                 title: translations['Roles'],
  //                 link: '/Roles',
  //               },
  //             ],
  //           },
  //           {
  //             title: translations['Reports-Letters'],
  //             children: [
  //               {
  //                 title: translations['Letters'],
  //                 children: [
  //                   {
  //                     title: translations['GrantLetter'],
  //                     link: '/grant-letter',
  //                   },

  //                   {
  //                     //title: translations['Report1'],
  //                     title: translations['LetterExchange'],
  //                    //link: '/test-report',
  //                    link: '/table',

  //                   },
  //                 ],
  //               },

  //               {
  //                 title: translations['Reports'],

  //                children: [
  //                 {
  //                   title: translations['Not-Granted-Parcels'],
  //                   link: '/parcel-not-granted',
  //                 },
  //                 {
  //                   title: translations['GrantedParcels'],
  //                   link: 'parcel-not-granted/GrantedParcels',
  //                 },
  //                 {
  //                   title: translations['DuplicateGrantedParcels'],
  //                   link: 'parcel-not-granted/DuplicateGrantedParcels',
  //                 },
  //                 {
  //                   title: translations['ParcelsUnderProcess'],
  //                   link: 'parcel-not-granted/ParcelsUnderProcess',
  //                 },
  //                 {
  //                   title: translations['SupremeOrderRpt'],
  //                   link: 'parcel-not-granted/SupremeOrderRpt',
  //                 },
  //                 {
  //                   title: translations['ParcelsNotHasSaakInSupremeRpt'],
  //                   link: 'parcel-not-granted/ParcelsNotHasSaakInSupremeRpt',
  //                 },
  //                 {
  //                   title: translations['ParcelsAllocatedAndHaveSakInSupreme'],
  //                   link: 'parcel-not-granted/ParcelsAllocatedAndHaveSakInSupreme',
  //                 },
  //                 {
  //                   title: translations['Statistics-on-the-number-of-parcels-allocated-in-the-plan'],
  //                   link: 'parcel-not-granted/ParcelsStasticsInPlanRpt',
  //                 },
  //                 {
  //                   title: translations['ParcelsAllocatedAndNotAllocatedInSupreme'],
  //                   link: 'parcel-not-granted/ParcelsAllocatedAndParcelsNotAllocatedRPT',
  //                 },
  //                 {
  //                   title: translations['GetListOfSaakLettersInPeriod'],
  //                   link: 'parcel-not-granted/GetListOfSaakLettersInPeriod',
  //                 },
  //               ],
  //               },
  //             ],

  //           },
  //         ];
  //         */
  //       });
  //   }

  //Statistics-on-the-number-of-parcels-allocated-in-the-plan
  // ngAfterViewInit(): void {
  //   console.log(this.translate.instant('username'));
  //   this.menu = [
  //     {
  //       title: this.translate.instant('plans'),
  //       children: [
  //         {
  //           title: this.translate.instant('Plan'),
  //           link: '/pages/layout/stepper',
  //         },
  //         {
  //           title: 'List',
  //           link: '/pages/layout/list',
  //         },
  //         {
  //           title: 'Infinite List',
  //           link: '/pages/layout/infinite-list',
  //         },
  //         {
  //           title: 'Accordion',
  //           link: '/pages/layout/accordion',
  //         },
  //         {
  //           title: 'Tabs',
  //           pathMatch: 'prefix',
  //           link: '/pages/layout/tabs',
  //         },
  //       ],
  //     },
  //   ];
  // }
  logout() {
    alert('Your session expired');
    localStorage.clear();
    this.route.navigateByUrl('/auth');
  }
  ngOnDestroy(): void {
    this.ThemeSubscription.unsubscribe();
    this.menuSub.unsubscribe();
    /*this.ThemeSubscription.unsubscribe();
    this.sidebarCollapseSub.unsubscribe();
    this.sidebarSub.unsubscribe();
    this.authStoreSub.unsubscribe();*/
  }
}
