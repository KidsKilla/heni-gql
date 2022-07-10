import { ApolloClient } from '@apollo/client';
import { client } from './client';

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('client', () => {
  it('should work', () => {
    expect(client).toBeInstanceOf(ApolloClient);
  });
});
