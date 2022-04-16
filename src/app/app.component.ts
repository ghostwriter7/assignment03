import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './core/store/app.reducer';
import * as fromAuth from './pages/auth/core/store/auth.selectors';
import { Observable } from 'rxjs';
import { AuthService } from './pages/auth/core/services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading$!: Observable<boolean>;

  constructor(private _store: Store<fromApp.IAppState>,
              private _authService: AuthService) {}

  ngOnInit() {
    this.isLoading$ = this._store.select(fromAuth.selectIsLoading);
    this._authService.getUserFromStorage();
  }
}
