import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemesListComponent } from './schemes-list/schemes-list.component';
import { AddEditSchemeComponent } from './add-edit-scheme/add-edit-scheme.component';
import { SchemesRoutingModule } from './schemes-routing.module';



@NgModule({
  declarations: [
    SchemesListComponent,
    AddEditSchemeComponent
  ],
  imports: [
    CommonModule,
    SchemesRoutingModule
  ]
})
export class SchemesModule { }
