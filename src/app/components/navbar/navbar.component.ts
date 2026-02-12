import { SidebarService } from './sidebar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeModeService } from './theme-mode.service';
import { Subject, Subscription } from 'rxjs';
import { LanguageService } from './language.service';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { MenuModel } from '../../models/User/menu.model';
import { MenuClassModel } from '../../models/User/menuclass.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  translateSub: Subscription;
  ThemeSubscription: Subscription;
  currentTheme: string;
  menu: NbMenuItem[] = [];
  sidebarSubscription: Subscription;
  menuClickSubscription: Subscription;
  MenuLst: MenuModel[] = [];
  mmLst: MenuClassModel[] = [];
  lang:string;
  public menuSubject: Subject<NbMenuItem[]> = new Subject<NbMenuItem[]>();

  constructor(
    private themeModeService: ThemeModeService,
    private languageService: LanguageService,
    private router: Router,
    private sidebarService: SidebarService,
    private nbMenuService: NbMenuService,
    private roleservice:RoleService,
   private translate: TranslateService,

  ) {}

  ngOnInit(): void {
    this.lang=this.languageService.currentLanguage;
console.log("Current Language="+this.languageService.currentLanguage);
/*
  this.roleservice
    .loadmenu(localStorage.getItem('RoleId'), 'ar')
    .subscribe((res) => {
      //this.MenuLst = res;
      this.mmLst = res;
    
      console.log('LoadMenu_AppComponent' + res);
      this.menu = this.mmLst;
    });
    
    */
    this.ThemeSubscription = this.themeModeService.themeMode.subscribe(
      (theme) => {
        this.currentTheme = theme;
      }
    );

    this.sidebarSubscription = this.sidebarService.menuSubject.subscribe(
      (menu) => {
        this.menu = menu;
      }
    );

    this.menuClickSubscription = this.nbMenuService
      .onItemClick()
      .subscribe(() => {
        this.toggleMenu();
      });
  }

  setTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'dark' : 'default';
    this.themeModeService.setThemeMode(this.currentTheme);
  }

  setLanguage(language: string) {
this.lang=language;
    this.languageService.setLanguage(language);
    console.log("Current Language="+this.languageService.currentLanguage);
  //this.loadmenu1();
    if(this.lang=="ar")
    this.roleservice
    .loadmenu(localStorage.getItem('RoleId'), 'ar')
    .subscribe((res) => {
      //this.MenuLst = res;
      this.mmLst = res;
    
      console.log('LoadMenu_AppComponent' + res);
      this.menu = this.mmLst;
    });
    else
    this.roleservice
    .loadmenu(localStorage.getItem('RoleId'), 'en')
    .subscribe((res) => {
      //this.MenuLst = res;
      this.mmLst = res;
    
      console.log('LoadMenu_AppComponent' + res);
      this.menu = this.mmLst;
    });

  }

  toggleMenu() {
   // this.menu=[];
   // this.sidebarService.toggleMenu();

    if (this.menu.length === 0) {
      this.loadmenu1();
    } else {
      this.menu = [];
    }
    this.menuSubject.next(this.menu.slice());
    this.sidebarService.toggleSidebar();

  }
  loadmenu1(){
    /*
  this.roleservice
  .loadmenu(localStorage.getItem('RoleId'), this.lang)
  .subscribe((res) => {
    this.mmLst = res;
  
    console.log('LoadMenu_AppComponent' + res);
    this.menu = this.mmLst;
  });
  */
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
                //link: '/StrategicGoals',
                link: '/Projects',

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
          }
        /*
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
            
            
            ],
          },
        */
   
          
        ];
}


  ngOnDestroy(): void {
    this.ThemeSubscription.unsubscribe();
    this.translateSub.unsubscribe();
    this.menuClickSubscription.unsubscribe();
  }

  logout() {
    //alert('Your session expired')
   // localStorage.clear();
    //  this.IsLogin=true;

    // this.auth.IsLogged()=false;
    this.router.navigateByUrl('/');
  }
}
