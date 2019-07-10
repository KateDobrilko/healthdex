export class Ability {
  is_hidden: Boolean;
  slot: String;
  ability: {
    name: String,
    url: String;
  };
}

export class PokemonStatShort {
  base_stat: Number;
  effort: Number;
  stat: {
    name: String;
    url: String;
  };
}

export class PokemonBasicInfo {
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
}

