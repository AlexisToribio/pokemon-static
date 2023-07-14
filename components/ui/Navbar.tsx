import NextLink from 'next/link';
import { useContext } from 'react';
import { Image, Spacer, Text, useTheme, Link } from '@nextui-org/react';
import { FavoriteContext } from '../../context/favoriteContext';

export const Navbar = () => {
  const { theme } = useTheme();
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        minWidth: '320px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 15px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link css={{ alignItems: 'center' }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={50}
            height={50}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color="white" h3 css={{ margin: '0px' }}>
            Favoritos {favoritePokemons.length}
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
