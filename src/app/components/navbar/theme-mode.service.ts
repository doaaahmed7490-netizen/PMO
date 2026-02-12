import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  themeMode: Subject<string> = new BehaviorSubject<string>('default');

  setThemeMode(mode: string) {
    this.themeMode.next(mode);
  }
}
