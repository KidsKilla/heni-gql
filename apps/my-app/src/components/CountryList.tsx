import { useState } from 'react';
import { usePagination } from '@heni-gql/ui';
import { List } from '@mui/material';
import { useWorldData } from '../data/useWorldData';
import { CountryDialog } from './CountryDialog';
import { CoutryItem } from './CountryItem';

export const CountryList = () => {
  const { countries } = useWorldData();

  const countryPages = usePagination({
    list: countries.ids ?? [],
    pageSize: 10,
  });

  const [cid, setOpenCid] = useState<null | string>(null);
  return (
    <>
      <CountryDialog coutryId={cid} onClose={() => setOpenCid(null)} />

      {countryPages.renderPager()}
      {/* <ol start={countryPages.offsetItems + 1}>
      </ol> */}
      <List sx={{ bgcolor: 'background.paper' }}>
        {countryPages.pageItems.map((cid, i) => {
          const country = countries.byId[cid];
          return (
            <CoutryItem
              key={cid}
              onSelect={() => setOpenCid(cid)}
              flag={country.emoji}
              name={country.name}
              capital={country.capital}
              currency={country.currency}
              // langs={country.languages.map((lng) => languages.byId[lng.code])}
            />
          );
        })}
      </List>
      {countryPages.renderPager()}
    </>
  );
};
