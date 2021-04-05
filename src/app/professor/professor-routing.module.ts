import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorListComponent } from './components/professor-list/professor-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
