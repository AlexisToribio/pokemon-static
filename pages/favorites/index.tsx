import { useState, useEffect, useContext } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';
import { FavoriteContext } from '../../context/favoriteContext';

const FavoritesPage: NextPage = () => {
  // const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  // useEffect(() => {
  //   setFavoritePokemons(localFavorites.pokemons());
  // }, []);
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
