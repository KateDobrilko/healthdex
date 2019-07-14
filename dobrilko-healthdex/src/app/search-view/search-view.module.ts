import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchViewComponent} from './search-view.component';
import {BaseStatsComponent} from './search-list/base-stats/base-stats.component';
import {PokedexDataComponent} from './search-list/pokedex-data/pokedex-data.component';
import {SearchViewService} from './search-view.service';
import { SearchListComponent } from './search-list/search-list.component';
import {CommonModule} from '@angular/common';
import {AppNavbarComponent} from '../shared/component/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

const searchViewRoutes: Routes = [
  {
    path: '', component: SearchViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchViewRoutes),
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    SearchViewComponent,
    BaseStatsComponent,
    PokedexDataComponent,
    SearchListComponent
  ],
  entryComponents: [
    AppNavbarComponent
  ],
  exports: [
  ],
  providers: [
    SearchViewService
  ]
})
export class SearchViewModule {
}
