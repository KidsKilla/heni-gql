import React from 'react';
import { ApolloProvider, client } from '@heni-gql/api';
import { AppWrapper } from '@heni-gql/ui';
import { WDCtxProvider } from './data/wdContext';
// import reportWebVitals from './reportWebVitals';

export const AppContext = ({ children }: { children: React.ReactNode }) => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <WDCtxProvider>
        <AppWrapper>{children}</AppWrapper>
      </WDCtxProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
