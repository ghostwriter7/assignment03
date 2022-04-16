import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DATA } from './data';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IScheme } from '../core/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../../shared/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-schemes-list',
  templateUrl: './schemes-list.component.html',
  styleUrls: ['./schemes-list.component.scss']
})
export class SchemesListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  public data = new MatTableDataSource(DATA);
  public displayedColumns: string[] = ['name', 'description', 'actions'];

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }

  public onDelete(scheme: IScheme, event: MouseEvent): void {
    const target = new ElementRef(event.currentTarget);
    const dialogRef = this._dialog.open(ConfirmationPopupComponent, { data: { trigger: target } });

    dialogRef.afterClosed().subscribe(result => {
      // TODO if yes, dispatch delete action
    });
  }

  public onPreview(scheme: IScheme): void {
    // TODO implement on preview
  }
}
