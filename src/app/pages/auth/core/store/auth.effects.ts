import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../../core/libs/firebase';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services/StorageService';
import { IUser } from '../interfaces';

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions,
              private _router: Router,
              private _storage: StorageService) {}

  public login$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.login),
    switchMap(({ email, password }) => {
      return from(signInWithEmailAndPassword(auth, email, password)).pipe(
        map((response) => {
          const user: IUser = {
            accessToken: (response.user as any).accessToken,
            email: response.user.email!,
            expirationDate: new Date().setTime(Date.now() + 60 * 60 * 1000)
          };

          this._storage.setItem('auth', JSON.stringify(user));

          return authActions.loginSuccess(user);
        }),
        catchError(() => of(authActions.loginFailure()))
      )
    })
  ));

  public loginSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.loginSuccess),
    switchMap(() => {
      return from(this._router.navigate(['schemes', 'list']));
    })
  ), { dispatch: false });

  public logout$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.logout),
    switchMap(() => {
      return from(signOut(auth)).pipe(
        map(() => authActions.logoutSuccess()),
        catchError(() => of(authActions.logoutFailure()))
      )
    })
  ));

  public logoutSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.logoutSuccess),
    switchMap(() => {
      this._storage.removeItem('auth');
      return from(this._router.navigate(['auth', 'login']));
    })
  ), { dispatch: false });
}
