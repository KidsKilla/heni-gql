import type { ReactNode } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';

export const mainTheme = createTheme();
export const cssCache = createCache({
  key: 'css',
  prepend: true,
});

export const AppWrapper = (props: { children: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={cssCache}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
