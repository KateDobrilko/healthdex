import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PokemonBasicInfoService} from '../../shared/service/pokemon-basic-info.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {
  pokemonId: String;
  pokemonBasicInfo: PokemonBasicInfo;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonBasicInfoService: PokemonBasicInfoService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonId = params['pokemonId'];
      this.pokemonBasicInfoService.fetchPokemonBasicInfo(this.pokemonId).subscribe((pokemonBasicInfo) => {
          this.pokemonBasicInfo = pokemonBasicInfo;
        }, () => {
          this.router.navigate(['/404']);
        }
      );
    });
  }

}
