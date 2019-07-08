import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchViewComponent} from './search-view.component';
import {BaseStatsComponent} from './base-stats/base-stats.component';
import {PokedexDataComponent} from './pokedex-data/pokedex-data.component';

const searchViewRoutes: Routes = [
  {
    path: '', component: SearchViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchViewRoutes),
  ],
  declarations: [
    SearchViewComponent,
    BaseStatsComponent,
    PokedexDataComponent
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class SearchViewModule {
}
