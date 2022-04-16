import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../core/store/app.reducer';
import * as authActions from '../core/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public get email() { return this.form.get('email')! }

  constructor(
    private _fb: FormBuilder,
    private _store: Store<fromApp.IAppState>) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [Validators.required])
    });
  }

  public onSubmit() {
    const { value: { email, password } } = this.form;
    this._store.dispatch(authActions.login({ email, password }));
  }
}
