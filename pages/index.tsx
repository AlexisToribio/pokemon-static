import { ChangeEvent, useState } from 'react';

import { NextPage, GetStaticProps } from 'next';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { FormElement, Grid, Input } from '@nextui-org/react';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const handleChange = (e: ChangeEvent<FormElement>) => {
    setSearchPokemon(e.currentTarget.value);
  };

  const results = !searchPokemon
    ? pokemons
    : pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
      );

  return (
    <Layout title="Listado de Pokemons">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input
          labelPlaceholder="Busca un pokemon"
          value={searchPokemon}
          width="500px"
          placeholder="Busca un pokemon"
          css={{ marginTop: '45px', marginBottom: '18px' }}
          onChange={handleChange}
        />
      </div>

      <Grid.Container gap={2} justify="flex-start">
        {results.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
