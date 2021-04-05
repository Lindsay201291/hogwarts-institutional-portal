import { Component,  Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Character } from './../../../core/models/character.model';
import { CharactersService } from './../../../core/services/characters/characters.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  // character: Character;
  @Input() character: Character;
  characters: Character[] = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.charactersService.getAllCharacters()
    .subscribe(characters => {
      this.characters = characters;
      /*this.router.navigate(['/characters']);
        }, (err) => {
          console.log(err);
        });*/
      });
  }

}
