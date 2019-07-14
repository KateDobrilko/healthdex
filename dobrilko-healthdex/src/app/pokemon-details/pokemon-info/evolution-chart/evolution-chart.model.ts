interface EvolutionChainItem {
  evolves_to: Array<EvolutionChainItem>;
  is_baby: Boolean;
  species: {
    name: string;
    url: string;
  };
}

interface EvolutionChain {
  chain: EvolutionChainItem;
  id: string;
}
