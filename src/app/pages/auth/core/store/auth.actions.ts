import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Firebase] Login Success',
  props<{ token: string, email: string, expiresIn: number }>());
export const loginFailure = createAction('[Firebase] Login Failure');
