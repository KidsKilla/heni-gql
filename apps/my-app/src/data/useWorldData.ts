import { useContext, useMemo } from 'react';
import { useNormalisedData } from '@heni-gql/api';
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

  const LNG_TO_COUNTRY = useMemo(() => {
    const lMap: Record<string, string[]> = {};
    cntr.ids.forEach((cntrId) => {
      const coutry = cntr.byId[cntrId];
      coutry.languages.forEach((l) => {
        if (!lMap[l.code]) {
          lMap[l.code] = [];
        }
        lMap[l.code].push(coutry.code);
      });
    });
    return lMap;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cntr.hash]);

  return {
    data,
    langToCoutry: LNG_TO_COUNTRY,
    languages: lngs,
    countries: cntr,
    continents: cont,
  };
};
