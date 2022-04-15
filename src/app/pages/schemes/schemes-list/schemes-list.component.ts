import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from './data';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-schemes-list',
  templateUrl: './schemes-list.component.html',
  styleUrls: ['./schemes-list.component.scss']
})
export class SchemesListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  public data = new MatTableDataSource(DATA);
  public displayedColumns: string[] = ['name', 'description'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.data.sort = this.sort;
  }

}
