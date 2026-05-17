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
    isMenuOpen = false;

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
     /*this.nbMenuService.onItemClick().subscribe((event) => {
    const clickedItem = event.item;

    this.closeOtherSubmenus(this.menu,clickedItem);
  });*/

    //this.isMenuOpen=false;
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

   /* this.menuClickSubscription = this.nbMenuService
      .onItemClick()
      .subscribe((event) => {
          const clickedItem = event.item;

    this.closeOtherSubmenus(this.menu, clickedItem);
      });*/
/*this.menuClickSubscription = this.nbMenuService
  .onItemClick()
  .subscribe((event) => {
    const clickedItem = event.item;

    setTimeout(() => {
      this.closeOtherSubmenus(this.menu, clickedItem);
    });
  });
  */
  }

  setTheme() {
    this.currentTheme = this.currentTheme === 'default' ? 'dark' : 'default';
    this.themeModeService.setThemeMode(this.currentTheme);
  }
/*closeOtherSubmenus(selectedItem: any) {
  this.menu.forEach(item => {
    if (item !== selectedItem && item.children) {
      item.expanded = false; 
    }
  });
}
closeOtherSubmenus(selectedItem: any) {
  this.menu.forEach(item => {
    if (item.children) {
      item.expanded = (item === selectedItem);
    }
  });
}
closeOtherSubmenus(menu: NbMenuItem[], selectedItem: NbMenuItem) {
  menu.forEach(item => {

    if (!this.isParentOrSelf(item, selectedItem)) {
      item.expanded = false;
    }

    if (item.children) {
      this.closeOtherSubmenus(item.children, selectedItem);
    }
  });
}
isParentOrSelf(parent: NbMenuItem, child: NbMenuItem): boolean {
  if (parent === child) return true;

  if (!parent.children) return false;

  return parent.children.some(c => this.isParentOrSelf(c, child));
}*/
closeOtherSubmenus(menu: NbMenuItem[], selectedItem: NbMenuItem) {
  // Step 1: close all
  this.collapseAll(menu);

  // Step 2: open selected path
  this.expandPath(menu, selectedItem);
    // 🔥 IMPORTANT: trigger change detection
  this.menu = [...this.menu];
}


collapseAll(menu: NbMenuItem[]) {
  menu.forEach(item => {
    item.expanded = false;
    if (item.children) {
      this.collapseAll(item.children);
    }
  });
}
expandPath(menu: NbMenuItem[], selectedItem: NbMenuItem): boolean {
  for (let item of menu) {
    if (item === selectedItem) {
      item.expanded = true;
      return true;
    }

    if (item.children) {
      const found = this.expandPath(item.children, selectedItem);
      if (found) {
        item.expanded = true;
        return true;
      }
    }
  }
  return false;
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
  this.isMenuOpen = !this.isMenuOpen;

  if (this.menu.length === 0) {
    this.loadmenu1();
  }
}
  /*toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

  

    if (this.menu.length === 0) {
      this.loadmenu1();
    } else {
      this.menu = [];
    }
    this.menuSubject.next(this.menu.slice());
    this.sidebarService.toggleSidebar();

  }
  */
    closeMenu(): void {
    this.isMenuOpen = false;
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
          /*{
            title: 'المشاريع',
            children: [
         

               {
                title: 'المعاملات المستقلة',
                link: '/IndependentTasks',
              }, 
               {
                title: 'مراحل المشاريع',
                link: '/ProjectMilestones',
              }, 
               {
                title: 'المهام',
   children: [
         
                {
                title: 'إدارة المهام',
                link: '/ProjectTasks',
              },
            ],              }, 
         
        
                 {
            title:'البيانات الاساسية',
            children: [
             
            
                {
                title: 'المراحل الرئسية',
                link: '/Milestones',
              },
            ],
          },    
            
            
            ],
          },*/
          /* {
            title: 'المنافسات',
            link: '/Bids',
          },*/
            {
            title: 'إدارة المنافسات',
            children: [
              {
             title: 'المنافسات',
            link: '/Bids',
              },
            {
             title: 'مهام المنافسات',
            link: '/BidTasks',
              },
             {
             title: 'سير عمل المهام',
            link: '/BidTasksWorkflow',
              },
               {
             title: 'إعادة تعيين مسؤل عن مهمة',
            link: '/ReAssign',
              },
               {
             title: 'تغيير حالة المنافسة',
            link: '/BidChangeStatus',
              }
            ]},
            /*BidChangeStatus
          {
            title: 'المرفقات',
            children: [
              {
                title:'المرفقات',
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
            title: 'إعدادات النظام',
            children: [
              {
                title:'إدارة المواقع',
                 
            children: [
              {
                title: 'الدول',
                link: '/Country',
              },
             {
                title: 'المحافظة/المدينة',
                link: '/State',
              },
               {
                title: 'المناطق/الاحياء',
                link: '/District',
              }
            ],
          },    
            
             {
                title:'إدارة العملات',
                //link: '/StrategicGoals',
                 
            children: [
              {
                title: 'العملات',
                link: '/Currency',
              },
             {
                title: 'أسعار العملات',
                link: '/CurrencyPricing',
              }
            ],
          },    
           
        
          
            
            
            ],
            
            
          }

          */

          
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
