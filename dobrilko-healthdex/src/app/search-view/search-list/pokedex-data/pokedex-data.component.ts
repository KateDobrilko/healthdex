import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokedex-data',
  templateUrl: './pokedex-data.component.html',
  styleUrls: ['./pokedex-data.component.scss']
})
export class PokedexDataComponent implements OnInit {
  @Input() pokemonInfo: PokemonBasicInfo;

  constructor() { }

  ngOnInit() {
  }

}
