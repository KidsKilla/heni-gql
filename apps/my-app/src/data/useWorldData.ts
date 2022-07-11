import { useContext, useMemo } from 'react';
import { apiType, useNormalisedData } from '@heni-gql/api';
import { wdContext } from './wdContext';

export const useWorldData = () => {
  const ctx = useContext(wdContext);

  if (!ctx || !ctx.data) {
    throw new Error('Bad usage: no data.');
  }

  const { data } = ctx;

  const cntr = useNormalisedData(data.countries);
  const cont = useNormalisedData(data.continents);
  const lngs = useNormalisedData(data.languages);

  const { langToCoutry, continentToCountry } = useMemo(() => {
    const langMap: Record<
      apiType.Language['code'],
      Array<apiType.Country['code']>
    > = {};

    const contMap: Record<
      apiType.Continent['code'],
      Array<apiType.Country['code']>
    > = {};

    data.countries.forEach((country) => {
      const contId = country.continent.code;
      if (!(contId in contMap)) {
        contMap[contId] = [];
      }
      contMap[contId].push(country.code);

      country.languages.forEach((lang) => {
        if (!langMap[lang.code]) {
          langMap[lang.code] = [];
        }
        langMap[lang.code].push(country.code);
      });
    });
    return {
      langToCoutry: langMap,
      continentToCountry: contMap,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cntr.hash]);

  return {
    data,
    langToCoutry,
    continentToCountry,
    languages: lngs,
    countries: cntr,
    continents: cont,
  };
};
