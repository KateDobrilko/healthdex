import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonBasicInfoService {
  private BASE_URL: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  fetchPokemonBasicInfo(id: string) {
    return this.http
      .get<PokemonBasicInfo>(
        `${this.BASE_URL}pokemon/${id}/`
      ).pipe(map(pokemonBasicInfo => {
        return pokemonBasicInfo;
      }));
  }

  fetchPokemonSpeciesInfo(id: string) {
    return this.http
      .get<PokemonSpeciesInfo>(
        `${this.BASE_URL}pokemon-species/${id}/`
      ).pipe(map(pokemonSpeciesInfo => {
        return pokemonSpeciesInfo;
      }));
  }

  fetchPokemonList(limit: string, offset: string) {
    const params: HttpParams = new HttpParams();
    return this.http
      .get(
        `${this.BASE_URL}pokemon/?limit=${limit}&offset=${offset}`,
        {params: params}
      ).pipe(map(pokemonBasicInfoWrapper => {
          return pokemonBasicInfoWrapper;
        })
      );
  }

  fetchPokemonBasicInfoByName(name: string) {
    return this.http
      .get<PokemonBasicInfo>(
        `${this.BASE_URL}pokemon/${name}/`
      ).pipe(map(pokemonBasicInfo => {
        return pokemonBasicInfo;
      }));
  }

  fetchPokemonTypes() {
    return this.http
      .get<PokemonBasicInfoWrapper>(
        `${this.BASE_URL}type/`
      ).pipe(map(pokemonBasicInfo => {
        return pokemonBasicInfo;
      }));
  }

  fetchMoveByName(name: string) {
      return this.http
          .get<PokemonMoveExtended>(
              `${this.BASE_URL}move/${name}`
          ).pipe(map(pokemonMove => {
              return pokemonMove;
          }));
  }

  fetchPokemonsByType(id: string) {
    return this.http
      .get<{
        pokemon: Array<{
          pokemon:
            { name: string }
        }>
      }>(
        `${this.BASE_URL}type/${id}`
      ).pipe(map(pokemonBasicInfo => {
        return pokemonBasicInfo.pokemon;
      }));
  }

}
