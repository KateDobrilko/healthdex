import {Component, OnInit} from '@angular/core';
import {SearchListService} from './search-list.service';
import {PokemonBasicInfoService} from '../shared/service/pokemon-basic-info.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {
  pokemonTypes: Array<{
    name: string
  }>;
  pokemonList: PokemonBasicInfo[];
  selectedType: string = null;

  constructor(private searchListService: SearchListService, private pokemonBasicInfoService: PokemonBasicInfoService) {
  }

  onChange(value) {
    this.searchListService.selectedType = value;
  }
  onScroll() {
    this.searchListService.fetchPokemonList();
  }

  ngOnInit() {
    this.searchListService.paginationOffset = 0;
    this.pokemonBasicInfoService.fetchPokemonTypes()
      .subscribe((pokemonBasicInfoWrapper: PokemonBasicInfoWrapper) => {
        this.pokemonTypes = pokemonBasicInfoWrapper.results;
      });
    this.searchListService.pokemonListChanged.subscribe(pokemonList => {
      this.pokemonList = pokemonList;
    });
    this.searchListService.fetchPokemonList();
  }

}
