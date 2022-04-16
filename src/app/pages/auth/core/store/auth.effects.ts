import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../../core/libs/firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions,
              private _router: Router) {}

  public login$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.login),
    switchMap(({ email, password }) => {
      return from(signInWithEmailAndPassword(auth, email, password)).pipe(
        map((response) => authActions.loginSuccess({
          accessToken: (response.user as any).accessToken,
          email: response.user.email!
        } )),
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
      return from(this._router.navigate(['auth', 'login']));
    })
  ), { dispatch: false });
}
