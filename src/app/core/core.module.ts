import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './services/characters/characters.service';
import { StudentsService } from './services/students/students.service';
import { ProfessorsService } from './services/professors/professors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CharactersService,
    StudentsService,
    ProfessorsService
  ]
})
export class CoreModule { }
