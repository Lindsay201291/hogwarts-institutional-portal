import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../../models/character.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  /* getAllCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/gryffindor`);
  } */

  getGryffindorCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/gryffindor`);
  }

  getSlytherinCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/slytherin`);
  }

  getRavenclawCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/ravenclaw`);
  }

  getHufflepuffCharacters() {
    return this.http.get<Character[]>(`${environment.url_api}/house/hufflepuff`);
  }
}
