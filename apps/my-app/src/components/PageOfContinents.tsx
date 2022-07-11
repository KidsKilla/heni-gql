import { OrderedList } from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';
import { CountriesListCollapse } from './CountriesListCollapse';

export const PageOfContinents = () => {
  const { continents, continentToCountry } = useWorldData();

  return (
    <OrderedList
      ids={continents.ids}
      renderItem={(contId) => (
        <>
          <strong>{continents.byId[contId].name}</strong>{' '}
          <CountriesListCollapse countryIds={continentToCountry[contId]} />
        </>
      )}
    />
  );
};
