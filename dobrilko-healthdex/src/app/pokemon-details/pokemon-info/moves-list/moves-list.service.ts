import {Injectable} from '@angular/core';
import {forkJoin, Subject} from "rxjs";
import {PokemonBasicInfoService} from "../../../shared/service/pokemon-basic-info.service";

@Injectable()
export class MovesListService {
    private _paginationOffset: number = 0;
    private PAGE_SIZE: number = 15;
    private _movesList: PokemonMoveExtended[] = [];
    private _movesListMeta: PokemonMove[] = [];
    movesListChanged = new Subject<PokemonMoveExtended[]>();

    constructor(private pokemonService: PokemonBasicInfoService) {
    }

    set paginationOffset(paginationOffset: number) {
        this._paginationOffset = paginationOffset;
    }

    get paginationOffset() {
        return this._paginationOffset;
    }

    set movesList(movesList: PokemonMoveExtended[]) {
        this._movesList = movesList;
        this.movesListChanged.next(this._movesList);
    }

    get movesList() {
        return this._movesList;
    }

    set movesListMeta(movesListMeta: PokemonMove[]) {
        this._movesListMeta = movesListMeta;
    }

    get movesListMeta() {
        return this._movesListMeta;
    }

    fetchMovesList() {
        const pokemonMetaDataSliced = this.movesListMeta.slice(this._paginationOffset, this._paginationOffset + this.PAGE_SIZE);
        const pokemonMovesObservables = [];

        pokemonMetaDataSliced.forEach(pokemonMetaDataItem => {
            pokemonMovesObservables.push(this.pokemonService.fetchMoveByName(pokemonMetaDataItem.move.name));
        });
        forkJoin(pokemonMovesObservables).subscribe((results) => {
            this.movesList = this.movesList.concat((results as any) as PokemonMoveExtended[]);
            this._paginationOffset += this.PAGE_SIZE;
        });

    }
}
