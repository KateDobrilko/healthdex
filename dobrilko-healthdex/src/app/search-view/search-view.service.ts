import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {PokemonBasicInfo} from './pokemon-basic-info.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class SearchViewService {
  pokemonBasicInfoList: PokemonBasicInfo[];
  pokemonListChanged = new Subject<PokemonBasicInfo[]>();

  constructor(private http: HttpClient) {
  }

  setPokemonBasicInfoList(pokemonBasicInfoList: PokemonBasicInfo[]) {
    this.pokemonBasicInfoList = pokemonBasicInfoList;
    this.pokemonListChanged.next(this.pokemonBasicInfoList.slice());
  }

  getPokemonBasicInfoList() {
    return this.pokemonBasicInfoList.slice();
  }

  getPokemonBasicInfoElement(index: number) {
    return this.pokemonBasicInfoList[index];
  }

  fetchPokemonList(limit?: string, offset?: string) {
    const params: HttpParams = new HttpParams();
    if (limit) {
      params.append('limit', limit);
    }
    if (offset) {
      params.append('offset', offset);
    }
    return this.http
      .get<PokemonBasicInfo[]>(
        'https://pokeapi.co/api/v2/pokemon',
        {
          params
        }
      ).pipe(map(pokemonBasicInfoList => {
          return pokemonBasicInfoList;
        }),
        tap(pokemonBasicInfoList => {
          this.setPokemonBasicInfoList(pokemonBasicInfoList);
        })
      );
  }
}
