import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PokemonDetailsLayoutComponent} from './layout/layout.component';
import {PokemonInfoComponent} from './pokemon-info/pokemon-info.component';

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
    RouterModule.forChild(pokemonDetailsRoutes),
  ],
  declarations: [
    PokemonInfoComponent,
    PokemonDetailsLayoutComponent
  ],
  entryComponents: [],
  exports: [],
  providers: []
})
export class PokemonDetailsModule {
}
