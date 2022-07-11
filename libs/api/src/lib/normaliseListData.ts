export const normaliseListData = <T>(arr: T[], getId: (itm: T) => string) => {
  const map: Record<string, T> = {};
  arr.forEach((itm) => {
    map[getId(itm)] = itm;
  });
  return {
    ids: arr.map(getId),
    byId: map,
  };
};
