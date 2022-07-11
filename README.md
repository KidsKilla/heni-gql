# heni-gql

1. Using the endpoint at https://countries.trevorblades.com/, connect using GraphQL and display a list of Countries.
2. Please utilise MaterialUI, TypeScript and Apollo Client in your response.
3. Please display the use of pagination.
4. Show the use of React Hooks.
5. Commit your code for the client to GitHub and provide us with the url to the repository.

## About

### Running

- `yarn start` starts dev server and open browser at `http://localhost:3000/`
- `yarn build` builds deployable artifacts at `./dist/` location
- `yarn lint` runs eslint over the code
- `yarn test` runs unit tests with Jest

### CI

![workflow status](https://github.com/KidsKilla/heni-gql/actions/workflows/universal.yml/badge.svg)

GHA is used as CI. Runs basic sanity checks: `yarn build`, `yarn lint`, `yarn test`.

## Implementation details

This is an example of "simple" usage of apollo. Here I use one "one big" query. Approximately same data is needed anywhere.

Also there is no `next.js` or any other routing alternatives, so data management is relatively simple.

That allowed to enforce type-safety for API, keep code flexible and easy to update, while keeping it DRY.

### Implementation alternavives

It could've be written using queries in-place, like `useQueryAllCountries` + `useNormalisedData`.

Or for example use query like the following.

```graphql
# To fetch data for Coutries list
query CountryList {
  countries {
    ...CountryBasicProps
  }
}
# To fetch all detailed data for one country.
query OneCountryDetailed {
  country(code: "NL") {
    ...CountryBasicProps
    native
    phone
    states {
      code
      name
    }
    languages {
      code
    }
  }
}
fragment CountryBasicProps on Country {
  code
  name
  emoji
  capital
  currency
}
```

### Testing

There is no `e2e` tests implemented, although easiest way would be to use `cypress`.

Unit tests are not exhaustive at all, since the main purpose of the repo is to show the approaches: pure unit tests / react component / react hooks. These tests are more like an examples. In real codebase most of the files would have a relevant `*.test.ts` file next to it.

### create-react-app

App is based on [create-react-app](./README_CRA.md).

### NX

[This tool](./README_NX.md) was chosen just to speed-up and simplify configuration for "libraries". And just to try.
Most of the confuguration is generated and never changed manually.
Summary: nice tool, helps a bit, but it seems a bit too magical when using full-scale. Cannot say I'm a big fan.
