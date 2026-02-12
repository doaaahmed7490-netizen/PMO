import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';

export const AuthGaurd: CanActivateFn = ():
  | Observable<boolean>
  | Promise<boolean>
  | boolean => {
  const router = inject(Router);
  return inject(Store)
    .select('auth')
    .pipe(
      take(1),
      map((user: AuthUser) => {
        if (user) {
          return true;
        } else {
          router.navigate(['/auth']);
          return false;
        }
      })
    );
};
