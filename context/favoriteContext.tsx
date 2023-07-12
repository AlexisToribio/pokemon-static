import { useState, useEffect, createContext, ReactNode } from 'react';
import { localFavorites } from '../utils';

interface FavoriteType {
  favoritePokemons: number[];
  setFavoritePokemons: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FavoriteContext = createContext<FavoriteType>({
  favoritePokemons: [],
  setFavoritePokemons: () => {},
});

type Props = {
  children: ReactNode;
};

export const FavoriteProvider = ({ children }: Props) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <FavoriteContext.Provider value={{ favoritePokemons, setFavoritePokemons }}>
      {children}
    </FavoriteContext.Provider>
  );
};
