import {Injectable} from '@angular/core';
import {forkJoin, Observable, Subject} from 'rxjs';
import {PokemonBasicInfoService} from '../shared/service/pokemon-basic-info.service';

@Injectable()
export class SearchListService {
  private _paginationOffset: number = 0;
  private PAGE_SIZE: number = 5;
  private _pokemonList: PokemonBasicInfo[] = [];
  private _selectedType: string;
  pokemonListChanged = new Subject<PokemonBasicInfo[]>();

  constructor(private pokemonService: PokemonBasicInfoService) {
  }

  set selectedType(selectedType) {
    this._selectedType = selectedType;
    this.paginationOffset = 0;
    this.pokemonList = [];
    this.fetchPokemonList();
  }

  get selectedType() {
    return this._selectedType;
  }

  set paginationOffset(paginationOffset: number) {
    this._paginationOffset = paginationOffset;
  }

  set pokemonList(pokemonList: PokemonBasicInfo[]) {
    this._pokemonList = pokemonList;
    this.pokemonListChanged.next(this._pokemonList);
  }

  get pokemonList() {
    return this._pokemonList;
  }

  fetchPokemonList() {
    if (this.selectedType) {
      this.pokemonService.fetchPokemonsByType(this.selectedType).subscribe(
        (pokemonsMetaData) => {
          const pokemonMetaDataSliced = pokemonsMetaData.slice(this._paginationOffset, this._paginationOffset + this.PAGE_SIZE);
          const pokemonBasicInfoObservables = [];

          pokemonMetaDataSliced.forEach(pokemonMetaDataItem => {
            pokemonBasicInfoObservables.push(this.pokemonService.fetchPokemonBasicInfoByName(pokemonMetaDataItem.pokemon.name));
          });
          forkJoin(pokemonBasicInfoObservables).subscribe((results) => {
            this.pokemonList = this.pokemonList.concat((results as any) as PokemonBasicInfo[]);
            this._paginationOffset += this.PAGE_SIZE;
          });
        }
      );
    } else {
      this.pokemonService.fetchPokemonList(this.PAGE_SIZE.toString(), this._paginationOffset.toString())
        .subscribe((pokemonBasicInfoWrapper: PokemonBasicInfoWrapper) => {
            const pokemonBasicInfoObservables = [];

            pokemonBasicInfoWrapper.results.forEach(pokemonMetaDataItem => {
              pokemonBasicInfoObservables.push(this.pokemonService.fetchPokemonBasicInfoByName(pokemonMetaDataItem.name));
            });
            forkJoin(pokemonBasicInfoObservables).subscribe((results) => {
              this.pokemonList = this.pokemonList.concat((results as any) as PokemonBasicInfo[]);
              this._paginationOffset += this.PAGE_SIZE;
            });
          }
        );
    }
  }

}
