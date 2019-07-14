import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PokemonDetailsLayoutComponent} from './layout/layout.component';
import {PokemonInfoComponent} from './pokemon-info/pokemon-info.component';
import { EvolutionChartComponent } from './pokemon-info/evolution-chart/evolution-chart.component';
import { EvolutionStepComponent } from './pokemon-info/evolution-chart/evolution-step/evolution-step.component';
import { MovesListComponent } from './pokemon-info/moves-list/moves-list.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

const pokemonDetailsRoutes: Routes = [
  {
    path: '', component: PokemonDetailsLayoutComponent, children: [
      {
        path: ':pokemonId', component: PokemonInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonDetailsRoutes),
    SharedModule
  ],
  declarations: [
    PokemonInfoComponent,
    PokemonDetailsLayoutComponent,
    EvolutionChartComponent,
    EvolutionStepComponent,
    MovesListComponent
  ],
  entryComponents: [
  ],
  exports: [],
  providers: []
})
export class PokemonDetailsModule {
}
