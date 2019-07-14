import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.scss']
})
export class BaseStatsComponent implements OnInit {
  @Input() pokemonStats: PokemonStatShort[];

  constructor() { }

  ngOnInit() {
  }

}
