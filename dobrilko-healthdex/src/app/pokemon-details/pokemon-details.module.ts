import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PokemonDetailsComponent} from './pokemon-details.component';

const pokemonDetailsRoutes: Routes = [
  {
    path: ':pokemonId', component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonDetailsRoutes),
  ],
  declarations: [
    PokemonDetailsComponent
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class PokemonDetailsModule {
}
