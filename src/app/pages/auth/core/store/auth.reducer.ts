import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';

export interface IAuthState {
  isLoggedIn: boolean;
  email?: string;
  token?: string;
  expiresIn?: number;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  email: undefined,
  token: undefined,
  expiresIn: undefined
};

export const authReducer = createReducer(
  initialState,
  on(login, state => initialState),
  on(loginSuccess, (state, { email, token, expiresIn}) => ({ ...state, isLoggedIn: true, email, token, expiresIn })),
  on(loginFailure, (state) => initialState)
);
