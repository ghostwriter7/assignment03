import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../../core/libs/firebase';

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions) {}

  public login$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.login),
    switchMap(({ email, password }) => {
      return from(signInWithEmailAndPassword(auth, email, password)).pipe(
        tap(console.log),
        map((response) => authActions.loginSuccess({
          accessToken: response.user.accessToken,
          email: response.user.email } )),
        catchError(() => of(authActions.loginFailure()))
      )
    })
  ));

  public logout$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.logout),
    switchMap(() => {
      return from(signOut(auth)).pipe(
        map(() => authActions.logoutSuccess()),
        catchError(() => of(authActions.logoutFailure()))
      )
    })
  ));


}
