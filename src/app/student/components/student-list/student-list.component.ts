import { Component, Input, OnInit } from '@angular/core';

import { Character } from './../../../core/models/character.model';
import { StudentsService } from './../../../core/services/students/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // @Input() character: Character;
  students: Character[] = [];

  constructor(
    private studentsService: StudentsService,
  ) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentsService.getAllStudents()
    .subscribe(students => {
      this.students = students;
      });
  }

}
