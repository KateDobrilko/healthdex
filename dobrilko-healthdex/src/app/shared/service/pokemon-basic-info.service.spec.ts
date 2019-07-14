import { TestBed } from '@angular/core/testing';

import { PokemonBasicInfoService } from './pokemon-basic-info.service';

describe('PokemonBasicInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonBasicInfoService = TestBed.get(PokemonBasicInfoService);
    expect(service).toBeTruthy();
  });
});
