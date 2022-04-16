import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logoutSuccess } from './auth.actions';
import { User } from 'firebase/auth';

export interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  email: string | null;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  accessToken: null,
  email: null
};

export const authReducer = createReducer(
  initialState,
  on(login, state => initialState),
  on(loginSuccess, (state, { accessToken, email }) => ({ ...state, isLoggedIn: true,  accessToken, email })),
  on(loginFailure, (state) => initialState),
  on(logoutSuccess, (state) => ({ ...state, isLoggedIn: false, user: undefined }))
);
