import { Injectable } from '@angular/core';
import { NbLayoutDirection, NbLayoutDirectionService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = 'ar';
  sidebarRight: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private translate: TranslateService,
    private nbLayoutDirectionService: NbLayoutDirectionService
  ) {
    this.translate.setDefaultLang('ar');
  }

  setLanguage(language: string) {
    if (this.currentLanguage === language) {
      return;
    }

    if (language === 'ar') {
      this.nbLayoutDirectionService.setDirection(NbLayoutDirection.RTL);
      this.sidebarRight.next(true);
    } else {
      this.nbLayoutDirectionService.setDirection(NbLayoutDirection.LTR);
      this.sidebarRight.next(false);
    }

    this.currentLanguage = language;
    this.translate.use(language);
  }
}
