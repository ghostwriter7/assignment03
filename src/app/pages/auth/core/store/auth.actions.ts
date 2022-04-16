import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Firebase] Login Success',
  props<{ accessToken: string, email: string }>());
export const loginFailure = createAction('[Firebase] Login Failure');

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Firebase] Logout Success');
export const logoutFailure = createAction('[Firebase] Logout Failure');
