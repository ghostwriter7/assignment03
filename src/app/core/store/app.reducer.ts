import * as fromAuth from '../../pages/auth/core/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
  auth: fromAuth.IAuthState
}

export const appReducer: ActionReducerMap<IAppState> = {
  auth: fromAuth.authReducer
};
