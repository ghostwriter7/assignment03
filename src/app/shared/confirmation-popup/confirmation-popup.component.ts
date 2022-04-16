import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  private readonly _triggerRef: ElementRef;

  constructor(
    private _matDialogRef: MatDialogRef<ConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef }) {
    this._triggerRef = data.trigger;
  }

  ngOnInit() {
    const matDialogConfig = new MatDialogConfig();
    const { left, top } = this._triggerRef.nativeElement.getBoundingClientRect();
    matDialogConfig.width = '200px';
    matDialogConfig.position = { left: `${left - parseInt(matDialogConfig.width) / 2}px`, top: `${top}px` };
    this._matDialogRef.updatePosition(matDialogConfig.position);
    this._matDialogRef.updateSize(matDialogConfig.width);
  }
}
