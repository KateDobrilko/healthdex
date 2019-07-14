interface Ability {
  is_hidden: Boolean;
  slot: string;
  ability: {
    name: string,
    url: string;
  };
}

interface PokemonStatShort {
  base_stat: Number;
  effort: Number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
}

interface PokemonType {
  slot: string;
  type: {
    name: string;
    url: string
  };
}

interface PokemonBasicInfo {
  id: string;
  name: string;
  base_experience: Number;
  height: Number;
  weight: Number;
  abilities: Array<Ability>;
  sprites: {
    back_default: string;
    front_default: string;
  };
  stats: Array<PokemonStatShort>;
  moves: Array<PokemonMove>;
  types: Array<PokemonType>;
}

interface PokemonBasicInfoWrapper {
  count: number;
  next: string;
  previous: string;
  results: Array<{
    name: string;
    url: string;
  }>;
}

interface PokemonSpeciesInfo {
  id: string;
  evolution_chain: {
    url: string
  };
}

