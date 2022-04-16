import { createSelector } from '@ngrx/store';
import { IAuthState } from './auth.reducer';
import * as fromApp from '../../../../core/store/app.reducer';

export const selectAuthState = createSelector(
  (state: fromApp.IAppState) => state.auth,
  (state: IAuthState) => state.isLoggedIn
);

export const selectIsLoading = createSelector(
  (state: fromApp.IAppState) => state.auth,
  (state: IAuthState) => state.isLoading
);
