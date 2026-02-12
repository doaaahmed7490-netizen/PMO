import { createReducer, on } from '@ngrx/store';
import { AuthUser } from '../../../models/auth-user.model';
import { login } from './auth.counter';

//const initialState = null;
 const initialState: AuthUser = {
   token: 'this is a dummy token',
   username: 'username',
 };

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return {
      ...state,
      token: action.token,
      username: action.username,
    };
  })
);
