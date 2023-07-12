import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import { darkTheme } from '../themes';
import { FavoriteProvider } from '../context/favoriteContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoriteProvider>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </FavoriteProvider>
  );
}

export default MyApp;
