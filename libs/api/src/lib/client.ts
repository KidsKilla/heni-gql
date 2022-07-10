import { ApolloClient, InMemoryCache, NormalizedCache } from '@apollo/client';
import cfg from '../gql/config.json';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    canonizeResults: true,
  }),
  uri: cfg.endpoint,
});
