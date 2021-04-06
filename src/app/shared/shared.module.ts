import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgePipe } from './pipes/age/age.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AgePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
