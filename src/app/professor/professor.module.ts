import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorListComponent } from './components/professor-list/professor-list.component';

import { ProfessorRoutingModule } from './professor-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ProfessorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
