import '../styles/globals.css'
import type { AppProps } from 'next/app'
import createEmotionCache from '../src/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import darkTheme from '../src/darkTheme';
import lightTheme from '../src/lightTheme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>(useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const resposiveTheme = responsiveFontSizes(mode === 'dark' ? darkTheme : lightTheme, { breakpoints: ['sm', 'md', 'lg', 'xl'], factor: 2 });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>NTNUI Svømming</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='theme-color' content={resposiveTheme.palette.background.default} />
        <meta name='msapplication-navbutton-color' content={resposiveTheme.palette.background.default} />
        <meta name='apple-mobile-web-app-status-bar-style' content={resposiveTheme.palette.background.default} />
        <link rel='icon' href='/ntnui-svomming.ico' />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={resposiveTheme}>
          <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

export default MyApp;
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
