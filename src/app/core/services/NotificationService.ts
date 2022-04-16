import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private _notify: MatSnackBar) {}

  public onError(message: string): void {
    this._notify.open(message, undefined, { duration: 3000, panelClass: 'error' });
  }

  public onSuccess(message: string) : void {
    this._notify.open(message, undefined, { duration: 3000, panelClass: 'success' });
  }
}
