interface EvolutionChainItem {
  evolves_to: Array<EvolutionChainItem>;
  is_baby: Boolean;
  species: {
    name: String;
    url: String;
  };
}

interface EvolutionChain {
  chain: EvolutionChainItem;
  id: String;
}
