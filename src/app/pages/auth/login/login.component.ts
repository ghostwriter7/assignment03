import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public get email() { return this.form.get('email')! }
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [Validators.required])
    });
  }

  public onSubmit() {
    console.log('test');
  }
}
