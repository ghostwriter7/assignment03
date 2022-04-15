import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemesListComponent } from './schemes-list/schemes-list.component';
import { AddEditSchemeComponent } from './add-edit-scheme/add-edit-scheme.component';

const routes: Routes = [
  { path: 'list', component: SchemesListComponent },
  { path: 'add', component: AddEditSchemeComponent },
  { path: 'edit/:id', component: AddEditSchemeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemesRoutingModule {}
