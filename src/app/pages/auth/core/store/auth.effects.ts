import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from './auth.actions';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../../core/libs/firebase';
import { Router } from '@angular/router';
import { StorageService } from '../../../../core/services/StorageService';
import { IUser } from '../interfaces';
import { NotificationService } from '../../../../core/services/NotificationService';

@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions,
              private _router: Router,
              private _storage: StorageService,
              private _notify: NotificationService) {}

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
        catchError((error) => of(authActions.loginFailure({ error })))
      )
    })
  ));

  public loginSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.loginSuccess),
    switchMap(() => {
      return from(this._router.navigate(['schemes', 'list'])).pipe(
        tap(() => this._notify.onSuccess(`You've logged in successfully!`))
      );
    })
  ), { dispatch: false });

  public loginFailure$ = createEffect(() => this._actions$.pipe(
    ofType(authActions.loginFailure),
    tap(({ error }) => {
      let message = 'Oops, something went wrong!';
      switch (error.code) {
        case 'auth/wrong-password': {
          message = 'Invalid credentials!';
          break;
        }
        case 'auth/user-not-found': {
          message = 'User does not exist!';
          break;
        }
      }
      this._notify.onError(message);
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
      return from(this._router.navigate(['auth', 'login'])).pipe(
        tap(() => this._notify.onSuccess(`You've logged out successfully!`))
      );
    })
  ), { dispatch: false });
}
