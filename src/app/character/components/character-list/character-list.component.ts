import { Component,  Input, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, Params } from '@angular/router';

import { Character } from './../../../core/models/character.model';
import { CharactersService } from './../../../core/services/characters/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  // character: Character;
  // @Input() character: Character;
  characters: Character[] = [];
  houses = ['GRYFFINDOR', 'SLYTHERIN', 'RAVENCLAW', 'HUFFLEPUFF'];
  selected = 'GRYFFINDOR';

  constructor(
    private charactersService: CharactersService,
    // private router: Router
  ) { }

  ngOnInit() {
    this.fetchGryffindorCharacters();
  }

  fetchGryffindorCharacters() {
    this.charactersService.getGryffindorCharacters()
    .subscribe(characters => {
      this.characters = characters;
      });
  }

  fetchSlytherinCharacters() {
    this.charactersService.getSlytherinCharacters()
    .subscribe(characters => {
      this.characters = characters;
      });
  }

  fetchRavenclawCharacters() {
    this.charactersService.getRavenclawCharacters()
    .subscribe(characters => {
      this.characters = characters;
      });
  }

  fetcHufflepuffCharacters() {
    this.charactersService.getHufflepuffCharacters()
    .subscribe(characters => {
      this.characters = characters;
      });
  }

  onSelect(val) {

    switch (val) {
      case 'GRYFFINDOR':
        this.fetchGryffindorCharacters();
        break;
      case 'SLYTHERIN':
        this.fetchSlytherinCharacters();
        break;
      case 'RAVENCLAW':
        this.fetchRavenclawCharacters();
        break;
      case 'HUFFLEPUFF':
        this.fetcHufflepuffCharacters();
        break;
    }
  }

}
