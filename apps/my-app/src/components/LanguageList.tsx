import { PaginationByIndex, usePagination } from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';
import { LanguageItem } from './LanguageItem';

export const LanguageList = () => {
  const { langToCoutry, languages, countries } = useWorldData();

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
          const langCountries = langToCoutry[lid]?.map(
            (cid) => countries.byId[cid]
          );
          return (
            <li key={lang.code}>
              <LanguageItem name={lang.name} countries={langCountries} />
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
