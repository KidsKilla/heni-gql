import { enableFetchMocks } from 'jest-fetch-mock';
import { ApolloClient } from '@apollo/client';
import { client } from './client';

beforeAll(() => enableFetchMocks());

describe('client', () => {
  it('should work', () => {
    expect(client).toBeInstanceOf(ApolloClient);
  });
});
