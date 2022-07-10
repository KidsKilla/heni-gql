import { gql, useQuery } from '@apollo/client';
import { QueryListsSchema } from '../gql/apiTypes';
import { buildGqlQuery } from '../gql/buildGqlQuery';
import { ApplyGQLFilter, GQLFilter } from '../gql/GQLFilter';

export const useAllCountries = <Q extends GQLFilter<QueryListsSchema>>(
  query: Q
) =>
  useQuery<ApplyGQLFilter<QueryListsSchema, Q>>(
    gql(buildGqlQuery('GetCountriesData', query))
  );
