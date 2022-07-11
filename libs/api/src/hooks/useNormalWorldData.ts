import { useMemo } from 'react';
import { isDefined } from '../lib/isDefined';

export const useNormalisedData = <T extends WithCode>(data: T[]) => {
  const itms = wrapItemsList(data);
  return useMemo(
    () =>
      ({
        hash: itms.hash,
        ...itms.getNormalised(),
      } as const),
    [itms.hash]
  );
};

export interface WithCode<T = string> {
  code: T;
}

const getCode = (itm: WithCode) => itm.code;

const wrapItemsList = <T extends WithCode>(arr: Array<T>) => {
  const filtered = arr.filter(isDefined);
  const hash = filtered.map(getCode).sort().join(',');
  return getWrappedAPI(filtered, hash);
};

const getWrappedAPI = <T extends WithCode>(arr: T[], hash: string) => ({
  hash,
  getNormalised: () => getNormalMap(arr, getCode),
});

const getNormalMap = <T extends WithCode>(
  arr: T[],
  getId: (itm: T) => string
) => {
  const map: Record<string, T> = {};
  arr.forEach((itm) => {
    map[getId(itm)] = itm;
  });
  return {
    ids: arr.map((itm) => itm.code),
    byId: map,
  };
};
