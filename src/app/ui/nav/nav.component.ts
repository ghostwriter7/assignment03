import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import * as fromAuth from '../../pages/auth/core/store/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public showNav$!: Observable<boolean>;

  constructor(private _store: Store<fromApp.IAppState>) { }

  ngOnInit(): void {
    this.showNav$ = this._store.select(fromAuth.selectAuthState);
  }

}
