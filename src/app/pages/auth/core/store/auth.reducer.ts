import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { User } from 'firebase/auth';

export interface IAuthState {
  isLoggedIn: boolean;
  user?: User;

}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(login, state => initialState),
  on(loginSuccess, (state, { user }) => ({ ...state, isLoggedIn: true, user })),
  on(loginFailure, (state) => initialState)
);
