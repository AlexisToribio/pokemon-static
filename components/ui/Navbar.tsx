import NextLink from 'next/link';
import { Image, Spacer, Text, useTheme, Link } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 50px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link css={{ alignItems: 'center' }}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
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
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
