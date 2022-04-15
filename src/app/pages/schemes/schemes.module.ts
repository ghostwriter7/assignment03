import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemesListComponent } from './schemes-list/schemes-list.component';
import { AddEditSchemeComponent } from './add-edit-scheme/add-edit-scheme.component';
import { SchemesRoutingModule } from './schemes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SchemesListComponent,
    AddEditSchemeComponent
  ],
  imports: [
    CommonModule,
    SchemesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SchemesModule { }
