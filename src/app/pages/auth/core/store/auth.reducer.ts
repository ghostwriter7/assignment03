import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logoutSuccess, logout } from './auth.actions';
import { IUser } from '../interfaces';

export interface IAuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: IUser

}

const initialState: IAuthState = {
  isLoading: false,
  isLoggedIn: false,
  user: {
    accessToken: null,
    email: null,
    expirationDate: null
  }
};

export const authReducer = createReducer(
  initialState,
  on(login, state => ({ ...initialState, isLoading: true })),
  on(loginSuccess, (state, { accessToken, email, expirationDate }) => ({ ...state, isLoggedIn: true, user: { accessToken, email, expirationDate }, isLoading: false })),
  on(loginFailure, (state) => initialState),
  on(logout, (state) => ({ ...state, isLoading: true })),
  on(logoutSuccess, (state) => initialState),
  on(loginFailure, (state) => ({...state, isLoading: false }))
);
