interface Ability {
  is_hidden: Boolean;
  slot: String;
  ability: {
    name: String,
    url: String;
  };
}

interface PokemonStatShort {
  base_stat: Number;
  effort: Number;
  stat: {
    name: String;
    url: String;
  };
}

interface PokemonMove {
  move: {
    name: String;
    url: String;
  };
}

interface PokemonBasicInfo {
  id: String;
  name: String;
  base_experience: Number;
  height: Number;
  weight: Number;
  abilities: Array<Ability>;
  sprites: {
    back_default: String;
    front_default: String;
  };
  stats: Array<PokemonStatShort>;
  moves: Array<PokemonMove>;
}

