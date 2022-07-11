import { useState } from 'react';
import { PaginationByIndex, usePagination } from '@heni-gql/ui';
import { List } from '@mui/material';
import { useWorldData } from '../data/useWorldData';
import { CountryDialog } from './CountryDialog';
import { CoutryItem } from './CountryItem';

export const CountryList = () => {
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

      <List sx={{ bgcolor: 'background.paper' }}>
        {pages.pageItems.map((cid, i) => {
          const country = countries.byId[cid];
          return (
            <CoutryItem
              key={cid}
              onSelect={() => setOpenCid(cid)}
              flag={country.emoji}
              name={country.name}
              capital={country.capital}
              currency={country.currency}
            />
          );
        })}
      </List>

      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />
    </>
  );
};
