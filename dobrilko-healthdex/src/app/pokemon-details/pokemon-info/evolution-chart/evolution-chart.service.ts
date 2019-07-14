import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvolutionChartService {
  constructor(private http: HttpClient) {
  }

  fetchEvolutionData(url: string) {
    const params: HttpParams = new HttpParams();
    return this.http
      .get<EvolutionChain>(
        url,
        {
          params
        }
      ).pipe(map(evolutionChain => {
          return evolutionChain;
        })
      );
  }
}
