import { gql, useQuery } from '@apollo/client';
import { QueryListsSchema } from '../gql/apiType';
import { buildGqlQuery } from '../gql/buildGqlQuery';
import { ApplyGQLFilter, GQLFilter } from '../gql/GQLFilter';

export type WorldDataFilter = GQLFilter<QueryListsSchema>;
export const useQueryAllCountries = <Q extends WorldDataFilter>(query: Q) =>
  useQuery<ApplyGQLFilter<QueryListsSchema, Q>>(
    gql(buildGqlQuery('GetCountriesData', query))
  );
