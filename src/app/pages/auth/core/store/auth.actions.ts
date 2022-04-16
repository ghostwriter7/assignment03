import { createAction, props } from '@ngrx/store';
import { User } from 'firebase/auth';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Firebase] Login Success',
  props<{ user: User }>());
export const loginFailure = createAction('[Firebase] Login Failure');
