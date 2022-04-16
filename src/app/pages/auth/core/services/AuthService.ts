import { Injectable } from '@angular/core';
import { StorageService } from '../../../../core/services/StorageService';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as fromAuth from '../../core/store/auth.actions';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _storageService: StorageService,
              private _store: Store<fromApp.IAppState>) {}

  public getUserFromStorage(): void {
    const user: IUser | null = this._storageService.getItem('auth');

    if (user) {
      Date.now() < user.expirationDate!
        ? this._store.dispatch(fromAuth.loginSuccess(user))
        : this._storageService.removeItem('auth');
    }
  }
}
