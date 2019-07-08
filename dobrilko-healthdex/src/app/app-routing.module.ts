import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchViewModule} from './search-view/search-view.module';
import {PokemonDetailsModule} from './pokemon-details/pokemon-details.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./search-view/search-view.module').then(mod => mod.SearchViewModule)
  },
  {
    path: 'pokemon-details',
    loadChildren: () => import('./pokemon-details/pokemon-details.module').then(mod => mod.PokemonDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
