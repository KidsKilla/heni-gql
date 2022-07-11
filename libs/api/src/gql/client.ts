import { ApolloClient, InMemoryCache } from '@apollo/client';
import cfg from './config.json';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    canonizeResults: true,
  }),
  uri: cfg.endpoint,
});
