import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../../models/character.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProfessors() {
    return this.http.get<Character[]>(`${environment.url_api}/staff`);
  }
}
