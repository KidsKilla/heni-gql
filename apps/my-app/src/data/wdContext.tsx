import { createContext, ReactNode } from 'react';
import { useAllCountries } from '@heni-gql/api';

const useAPI = () =>
  useAllCountries({
    continents: {
      code: true,
      name: true,
      // Left out just to show how to connect country -> continent
      // countries: { code: true },
    },
    languages: {
      code: true,
      native: true,
      rtl: true,
      name: true,
    },
    countries: {
      code: true,
      name: true,
      emoji: true,
      capital: true,
      currency: true,
      continent: { code: true },
      languages: { code: true },
    },
  });

export const wdContext = createContext<null | ReturnType<typeof useAPI>>(null);

export const WDCtxConsumer = wdContext.Consumer;

export const WDCtxProvider = ({ children }: { children: ReactNode }) => {
  const worldData = useAPI();
  return <wdContext.Provider value={worldData}>{children}</wdContext.Provider>;
};
