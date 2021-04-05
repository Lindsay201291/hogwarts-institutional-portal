import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersService } from './services/characters/characters.service';
import { StudentsService } from './services/students/students.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CharactersService,
    StudentsService
  ]
})
export class CoreModule { }
