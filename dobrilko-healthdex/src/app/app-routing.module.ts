import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './search-view/search-view.module#SearchViewModule'
  },
  {
    path: 'pokemon-details',
    loadChildren: './pokemon-details/pokemon-details.module#PokemonDetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
