import {Component, Input, OnInit} from '@angular/core';
import {PokemonBasicInfoService} from '../../shared/service/pokemon-basic-info.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() pokemonSearchList: PokemonBasicInfo[];


  constructor(private pokemonBasicInfoService: PokemonBasicInfoService) {
  }

  ngOnInit() {

  }

}
