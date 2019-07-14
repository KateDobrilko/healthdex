import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BaseStatsService} from './base-stats.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.scss']
})
export class BaseStatsComponent implements OnInit, AfterViewInit {
  @Input() pokemonStats: PokemonStatShort[];
  @ViewChild('tableElement') tableElement: ElementRef;
  baseStatCodeToName = {
    'speed': 'Speed',
    'special-defense': 'Sp. Def',
    'special-attack': 'Sp. Atk',
    'defense': 'Defense',
    'attack' : 'Attack',
    'hp': 'HP'
  };

  constructor(private baseStatsService: BaseStatsService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.pokemonStats.forEach(value => {
      value.width = new BehaviorSubject<string>('');
    });
  }

  getPercentStripeClass(percent: Number) {
    return this.baseStatsService.getPercentStripeClass(percent);
  }

  ngAfterViewInit(): void {
    this.pokemonStats.forEach(value => {
      value.width.next(this.baseStatsService.getPercentStripeWidth(this.tableElement, value.base_stat));
      this.cdRef.detectChanges();
    });
  }


}
