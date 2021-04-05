import { Component, OnInit } from '@angular/core';

import { Character } from './../../../core/models/character.model';
import { ProfessorsService } from './../../../core/services/professors/professors.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professors: Character[] = [];

  constructor(
    private professorsService: ProfessorsService,
  ) { }

  ngOnInit() {
    this.fetchProfessors();
  }

  fetchProfessors() {
    this.professorsService.getAllProfessors()
    .subscribe(professors => {
      this.professors = professors;
      });
  }

}
