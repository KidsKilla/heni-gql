import { GQLFilter } from './GQLFilter';

const stringifyFilter = <T extends object>(req: GQLFilter<T>): string => {
  const keys = (Object.keys(req) as Array<keyof T>).map((k) => {
    const val = req[k];
    if (!val) {
      return '';
    }
    if (val === true) {
      return k;
    }
    return [k, stringifyFilter(val)].join(' ');
  });
  return `{\n${keys.join('\n')}\n}`;
};

export const buildGqlQuery = <T>(queryName: string, req: GQLFilter<T>) => {
  return `query ${queryName} ${stringifyFilter(req)}`;
};
