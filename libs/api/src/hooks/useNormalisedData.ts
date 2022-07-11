import { useMemo } from 'react';
import { isDefined } from '../lib/isDefined';
import { normaliseListData } from '../lib/normaliseListData';

export type WithCode = { code: string };
const getCode = (itm: WithCode) => itm.code;
export const useNormalisedData = <T extends WithCode>(data: T[]) => {
  const filtered = data.filter(isDefined);
  const hash = filtered.map(getCode).sort().join(',');
  return useMemo(
    () =>
      ({
        hash,
        ...normaliseListData(filtered, getCode),
      } as const),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hash]
  );
};
