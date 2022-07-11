import { useState } from 'react';
import {
  PaginationByIndex,
  usePagination,
  CountryList,
  CountryListItem,
} from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';
import { CountryDialog } from './CountryDialog';

export const PageOfCountries = () => {
  const { countries } = useWorldData();

  const pages = usePagination({
    list: countries.ids ?? [],
    pageSize: 10,
  });

  const [cid, setOpenCid] = useState<null | string>(null);
  return (
    <>
      <CountryDialog coutryId={cid} onClose={() => setOpenCid(null)} />

      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />

      <CountryList>
        {pages.pageItems.map((cid, i) => {
          const country = countries.byId[cid];
          return (
            <CountryListItem
              key={cid}
              onSelect={() => setOpenCid(cid)}
              flag={country.emoji}
              name={country.name}
              capital={country.capital}
              currency={country.currency}
            />
          );
        })}
      </CountryList>

      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />
    </>
  );
};
