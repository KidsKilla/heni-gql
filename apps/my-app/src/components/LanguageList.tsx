import { PaginationByIndex, usePagination } from '@heni-gql/ui';
import { Box } from '@mui/material';
import { useWorldData } from '../data/useWorldData';
import { CountriesListCollapse } from './CountriesListCollapse';

export const LanguageList = () => {
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

      <ol start={pages.offsetItems + 1}>
        {pages.pageItems.map((lid) => {
          const lang = languages.byId[lid];
          return (
            <li key={lang.code}>
              <Box sx={{ py: 1 }}>
                <strong>🗣 {lang.name}</strong>{' '}
                {langToCoutry[lid].length === 1 ? (
                  <DisplayCountry code={langToCoutry[lid][0]} />
                ) : (
                  <CountriesListCollapse countryIds={langToCoutry[lid]} />
                )}
              </Box>
            </li>
          );
        })}
      </ol>

      <PaginationByIndex
        current={pages.currentPage}
        total={pages.totalPages}
        onChangeIndex={pages.setPage}
      />
    </>
  );
};

const DisplayCountry = ({ code }: { code: string }) => {
  const { countries, continents } = useWorldData();
  const country = countries.byId[code];
  return (
    <>
      {country.emoji} {country.name} (
      {continents.byId[country.continent.code].name})
    </>
  );
};
