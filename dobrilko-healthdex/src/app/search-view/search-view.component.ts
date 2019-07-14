import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {
  pokemonTypes: Array<{
    name: String
  }>;
  pokemonList: PokemonBasicInfo[];

  constructor() {
  }

  ngOnInit() {
  }

}
