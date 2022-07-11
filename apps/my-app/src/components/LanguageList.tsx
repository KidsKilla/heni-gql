import { usePagination } from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';
import { LanguageItem } from './LanguageItem';

export const LanguageList = () => {
  const { langToCoutry, languages, countries } = useWorldData();

  const langsPages = usePagination({
    list: languages.ids ?? [],
    pageSize: 10,
  });

  return (
    <>
      {langsPages.renderPager()}
      <ol start={langsPages.offsetItems + 1}>
        {langsPages.pageItems.map((lid) => {
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
      {langsPages.renderPager()}
    </>
  );
};
