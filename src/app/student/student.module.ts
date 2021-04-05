import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListComponent } from './components/student-list/student-list.component';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
