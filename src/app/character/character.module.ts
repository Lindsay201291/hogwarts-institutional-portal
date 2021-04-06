import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CharacterListComponent } from './components/character-list/character-list.component';

import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule,
    FormsModule
  ]
})
export class CharacterModule { }
