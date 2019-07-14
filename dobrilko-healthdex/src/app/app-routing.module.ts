import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './search-view/search-view.module#SearchViewModule'
  },
  {
    path: 'pokemon-details',
    loadChildren: './pokemon-details/pokemon-details.module#PokemonDetailsModule'
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
