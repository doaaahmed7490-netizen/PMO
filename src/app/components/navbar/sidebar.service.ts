import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MenuModel } from '../../models/User/menu.model';
import { RoleService } from '../../services/role.service';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private menu: NbMenuItem[] = [];
  public translateSub: Subscription;
  private http: HttpClient;
private roleService:RoleService;
  public menuSubject: Subject<NbMenuItem[]> = new Subject<NbMenuItem[]>();

  constructor(private translate: TranslateService) {
    this.translateSub = this.translate.onLangChange.subscribe(() => {
      if (this.menu.length > 0) {
        this.loadMenuTranslations();
        this.menuSubject.next(this.menu.slice());
      }
    });
  }
  loadmenu(Id: string, lang: string) {
  /*  .loadmenu(localStorage.getItem('RoleId'), 'ar')
    .subscribe((res) => {
      //this.MenuLst = res;
      this.mmLst = res; */
    const apiUrl = environment.apiUrl + 'Role/LoadMenu?Id=' + Id + '&&lang=ar';
    //this.languageService.currentLangua//ge;

    return this.http.get<MenuModel[]>(apiUrl);


  }

  public loadMenuTranslations(): void {
    /*
    this.translate
      .get([
        'plans',
        'Plan',
        'Parts',
        'Districts',
        'Blocks',
        'Parcel',
        'dashboard',
        'Grants',
        'Owner',
        'Royal-Grant',
        'Grant Land Status',
        'Grant Steps',
        'LetterType',
        'Land Cases Types',
        'Users',
        'Permissions',
        'Reports',
        'Report1',
        'Report2',
        'Grant-Work-Flow',
        'Assign Land To Grant',
        'Assign Land To Grant From Map',
        'map',
        'StrategicGoals',

        'Milestones',
        'DirectiveGoals',
        'Goals',

        'Departments',
        'BasicData',
        'Jobs',
        'Employees',
        'Services',
        'Survey',
        'Questions',
        'Voting',
        'logout',
        'login',
      ])
      .subscribe((translations) => {
        this.menu = 
        [
         
          {
            title: translations['Goals'],
            children: [
              {
                title: translations['StrategicGoals'],
                link: '/StrategicGoals',
              },
              {
                title: translations['Milestones'],
                link: '/Milestones',
              },
              {
                title: translations['DirectiveGoals'],
                link: '/DirectiveGoals',
              },
            ],
          },
          {
            title: translations['dashboard'],
            link: '/dashboard',
          },
          {
            title: translations['Departments'],
            link: '/Departments',
          },
          {
            title: translations['BasicData'],
            children: [
              {
                title: translations['Jobs'],
                link: '/Jobs',
              },
              {
                title: translations['Employees'],
                link: '/Employee',
              },
              {
                title: translations['Services'],
                link: '/Services',
              },
            ],
          },
          {
            title: translations['Survey'],
            children: [
              {
                title: translations['Questions'],
                link: '/Questions',
              },
              {
                title: translations['Survey'],
                link: '/Survey',
              },
           
            ],
          },
          {
            title: translations['Voting'],
            link: '/UserSurvey',
          },
          
          {
            title: translations['Users'],
            children: [
              {
                title: translations['Users'],
                link: '/Users',
              },
              {
                title: translations['Permissions'],
                link: '/Permissions',
              },
            ],
          },
          {
            title: translations['Reports'],
            children: [
              {
                title: translations['Report1'],
              },
              {
                title: translations['Report2'],
              },
            ],
          },
          {
            title:
              localStorage.getItem('RoleId').length > 0
                ? translations['logout']
                : translations['login'],
            link: '/auth',
          },
        ];
      });

      */
this.loadmenu(localStorage.getItem('RoleId'), 'ar')
.subscribe((res) => {

  this.menu=res;
});
      

    /*  this.roleService.loadmenu(localStorage.getItem('RoleId'), 'ar')
      .subscribe((res) => {
        //this.MenuLst = res;
        this.menu = res;
      });
      */
    }

  toggleMenu() {
  
 
   if (this.menu.length === 0) {
      this.loadMenuTranslations();
    } else {
      this.menu = [];
    }
    this.menuSubject.next(this.menu.slice());
  }
    private sidebarCollapsed: boolean = false;
  sidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
   toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sidebarSubject.next(this.sidebarCollapsed);
  }
}
