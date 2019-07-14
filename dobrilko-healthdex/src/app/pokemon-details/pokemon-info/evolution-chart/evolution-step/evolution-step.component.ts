import {Component, Input, OnInit} from '@angular/core';
import {PokemonBasicInfoService} from '../../../../shared/service/pokemon-basic-info.service';

@Component({
  selector: 'app-evolution-step',
  templateUrl: './evolution-step.component.html',
  styleUrls: ['./evolution-step.component.scss']
})
export class EvolutionStepComponent implements OnInit {
  @Input() evolutionChainItem: EvolutionChainItem;
  pokemonBasicInfo: PokemonBasicInfo;

  constructor(private  pokemonBasicInfoService: PokemonBasicInfoService) {
  }

  ngOnInit() {
    this.pokemonBasicInfoService.fetchPokemonBasicInfoByName(this.evolutionChainItem.species.name)
      .subscribe(pokemonBasicInfo => {
        this.pokemonBasicInfo = pokemonBasicInfo;
      });
  }

}
