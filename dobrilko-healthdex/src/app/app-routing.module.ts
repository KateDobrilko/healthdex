import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchViewModule} from './search-view/search-view.module';
import {PokemonDetailsModule} from './pokemon-details/pokemon-details.module';

const routes: Routes = [
  {path: '', loadChildren: './search-view/search-view.module#SearchViewModule'},
  {path: 'pokemon-details', loadChildren: './pokemon-details/pokemon-details.module#PokemonDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SearchViewModule,
    PokemonDetailsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
