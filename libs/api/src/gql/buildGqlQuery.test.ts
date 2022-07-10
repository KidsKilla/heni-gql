import { buildGqlQuery } from './buildGqlQuery';

describe('buildGqlQuery', () => {
  it('simple', () => {
    expect(buildGqlQuery('myQuery', { a: true })).toMatchInlineSnapshot(`
      "query myQuery {
      a
      }"
    `);
  });
  it('simple', () => {
    expect(buildGqlQuery('myQuery', { a: { b: true }, c: true }))
      .toMatchInlineSnapshot(`
      "query myQuery {
      a {
      b
      }
      c
      }"
    `);
  });
});
