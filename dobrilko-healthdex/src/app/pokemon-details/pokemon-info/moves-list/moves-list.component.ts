import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MovesListService} from "./moves-list.service";

@Component({
    selector: 'app-moves-list',
    templateUrl: './moves-list.component.html',
    styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit, OnDestroy {
    @Input() metaMoves: PokemonMove[];
    moves: PokemonMoveExtended[];

    constructor(private movesListService: MovesListService) {
    }

    ngOnInit() {
        this.movesListService.movesListMeta = this.metaMoves;
        this.movesListService.fetchMovesList();
        this.movesListService.movesListChanged.subscribe((moves) => {
            this.moves = moves;
        })
    }

    onScroll() {
        this.movesListService.fetchMovesList();
    }

    ngOnDestroy(): void {
        this.movesListService.movesList = [];
        this.movesListService.paginationOffset = 0;
    }

}
