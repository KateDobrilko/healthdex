import {Component, Input, OnInit} from '@angular/core';
import {PokemonBasicInfoService} from '../../shared/service/pokemon-basic-info.service';
import {Router} from "@angular/router";
import {SearchListService} from "../search-list.service";


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() pokemonSearchList: PokemonBasicInfo[];


  constructor(
    private searchListService: SearchListService,
    private pokemonBasicInfoService: PokemonBasicInfoService,
    private router: Router) {
  }

  goToPokemonDetails(id: string) {
    this.searchListService.selectedType = '';
    this.router.navigate([`pokemon-details/${id}`]);
  }

  ngOnInit() {

  }

}
