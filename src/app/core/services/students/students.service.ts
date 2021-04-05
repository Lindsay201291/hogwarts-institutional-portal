import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../../models/character.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents() {
    return this.http.get<Character[]>(`${environment.url_api}/students`);
  }
}
