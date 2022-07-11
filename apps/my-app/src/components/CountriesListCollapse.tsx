import { ChipAndCollapse } from '@heni-gql/ui';
import { apiType } from '@heni-gql/api';
import { useWorldData } from '../data/useWorldData';

export const CountriesListCollapse = ({
  countryIds,
}: {
  countryIds: Array<apiType.Country['code']>;
}) => {
  const { countries } = useWorldData();
  return (
    <ChipAndCollapse
      ids={countryIds}
      label={`${countryIds.length} coutrues`}
      renderItem={(cid) => (
        <>
          {countries.byId[cid].emoji} {countries.byId[cid].name}
        </>
      )}
    />
  );
};
