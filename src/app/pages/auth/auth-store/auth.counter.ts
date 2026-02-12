import { createAction, props } from '@ngrx/store';
import { AuthUser } from '../../../models/auth-user.model';

export const login = createAction('[Auth] Login', props<AuthUser>());
