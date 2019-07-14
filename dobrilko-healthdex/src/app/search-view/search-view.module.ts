import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchViewComponent} from './search-view.component';
import {BaseStatsComponent} from './search-list/base-stats/base-stats.component';
import {PokedexDataComponent} from './search-list/pokedex-data/pokedex-data.component';
import {SearchViewService} from "./search-view.service";
import { SearchListComponent } from './search-list/search-list.component';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

const searchViewRoutes: Routes = [
  {
    path: '', component: SearchViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchViewRoutes),
    CommonModule
  ],
  declarations: [
    SearchViewComponent,
    BaseStatsComponent,
    PokedexDataComponent,
    SearchListComponent
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
    SearchViewService
  ]
})
export class SearchViewModule {
}
