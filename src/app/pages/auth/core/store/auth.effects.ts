import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../../core/libs/firebase';

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions) {}

  public login$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.login),
    switchMap(({ email, password }) => {
      return from(signInWithEmailAndPassword(getAuth(app), email, password)).pipe(
        tap(console.log),
        map((user) => authActions.loginSuccess({ user })),
        catchError(() => of(authActions.loginFailure()))
      )
    })
  ));




}
