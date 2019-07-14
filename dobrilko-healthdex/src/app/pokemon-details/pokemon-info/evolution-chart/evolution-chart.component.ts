import {Component, Input, OnInit} from '@angular/core';
import {EvolutionChartService} from './evolution-chart.service';
import {PokemonBasicInfoService} from '../../../shared/service/pokemon-basic-info.service';

@Component({
  selector: 'app-evolution-chart',
  templateUrl: './evolution-chart.component.html',
  styleUrls: ['./evolution-chart.component.scss']
})
export class EvolutionChartComponent implements OnInit {
  @Input() pokemonId: string;
  evolutionChainData: EvolutionChain;

  constructor(private  evolutionChartService: EvolutionChartService,
              private pokemonBasicInfoService: PokemonBasicInfoService) {
  }

  ngOnInit() {
    this.pokemonBasicInfoService.fetchPokemonSpeciesInfo(this.pokemonId).subscribe(pokemonSpeciesInfo => {
      this.evolutionChartService.fetchEvolutionData(pokemonSpeciesInfo.evolution_chain.url)
        .subscribe(evolutionChain => {
          this.evolutionChainData = evolutionChain;
        });
    });
  }

}
