import { Injectable } from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonBasicInfoService {
  private BASE_URL: String = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  fetchPokemonBasicInfo (id: String) {
    return this.http
      .get<PokemonBasicInfo>(
        `${this.BASE_URL}pokemon/${id}`
      ).pipe(map(pokemonBasicInfo => {
          return pokemonBasicInfo;
        }));
  }
}
