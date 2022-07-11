import { OrderedList, PaginationByIndex, usePagination } from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';
import { CountriesListCollapse } from './CountriesListCollapse';

export const PageOfLanguages = () => {
  const { langToCoutry, languages } = useWorldData();

  const pages = usePagination({
    list: languages.ids ?? [],
    pageSize: 10,
  });

  return (
    <>
      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />

      <OrderedList
        ids={pages.pageItems}
        renderItem={(lid) => (
          <>
            <strong>🗣 {languages.byId[lid].name}</strong>{' '}
            {langToCoutry[lid].length === 1 ? (
              <DisplayOneCountry code={langToCoutry[lid][0]} />
            ) : (
              <CountriesListCollapse countryIds={langToCoutry[lid]} />
            )}
          </>
        )}
      />

      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />
    </>
  );
};

const DisplayOneCountry = ({ code }: { code: string }) => {
  const { countries, continents } = useWorldData();
  const country = countries.byId[code];
  return (
    <>
      {country.emoji} {country.name} (
      {continents.byId[country.continent.code].name})
    </>
  );
};
