import { createAction, props } from '@ngrx/store';
import { IUser } from '../interfaces';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Firebase] Login Success', props<IUser>());
export const loginFailure = createAction('[Firebase] Login Failure', props<{ error: any}>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Firebase] Logout Success');
export const logoutFailure = createAction('[Firebase] Logout Failure');
