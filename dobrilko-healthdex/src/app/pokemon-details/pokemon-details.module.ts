import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PokemonDetailsLayoutComponent} from './layout/layout.component';
import {PokemonInfoComponent} from './pokemon-info/pokemon-info.component';
import {EvolutionChartComponent} from './pokemon-info/evolution-chart/evolution-chart.component';
import {EvolutionStepComponent} from './pokemon-info/evolution-chart/evolution-step/evolution-step.component';
import {MovesListComponent} from './pokemon-info/moves-list/moves-list.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {EvolutionChartService} from './pokemon-info/evolution-chart/evolution-chart.service';
import {MovesListService} from "./pokemon-info/moves-list/moves-list.service";
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { NameTransformPipe } from './pokemon-info/moves-list/name-transform.pipe';


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
        CommonModule,
        RouterModule.forChild(pokemonDetailsRoutes),
        SharedModule,
        InfiniteScrollModule
    ],
    declarations: [
        PokemonInfoComponent,
        PokemonDetailsLayoutComponent,
        EvolutionChartComponent,
        EvolutionStepComponent,
        MovesListComponent,
        NameTransformPipe
    ],
    entryComponents: [],
    exports: [],
    providers: [
        EvolutionChartService,
        MovesListService
    ]
})
export class PokemonDetailsModule {
}
