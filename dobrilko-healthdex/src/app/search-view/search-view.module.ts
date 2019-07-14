import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchViewComponent} from './search-view.component';
import {BaseStatsComponent} from './search-list/base-stats/base-stats.component';
import {PokedexDataComponent} from './search-list/pokedex-data/pokedex-data.component';
import { SearchListComponent } from './search-list/search-list.component';
import {CommonModule} from '@angular/common';
import {AppNavbarComponent} from '../shared/component/navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchListService} from './search-list.service';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

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
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
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
    SearchListService
  ]
})
export class SearchViewModule {
}
