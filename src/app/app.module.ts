import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';

/*import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CharacterListComponent } from './character/components/character-list/character-list.component';
import { ProfessorListComponent } from './professor/components/professor-list/professor-list.component';
import { StudentListComponent } from './student/components/student-list/student-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';*/

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
    /*HeaderComponent,
    FooterComponent,
    CharacterListComponent,
    ProfessorListComponent,
    StudentListComponent,
    HomeComponent,
    PageNotFoundComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
