import { useState } from 'react';

export const usePagination = <In, Out>({
  list,
  pageSize,
}: {
  list: In[];
  pageSize: number;
}) => {
  if (pageSize !== pageSize) {
    throw new Error('[usePagination] pageSize is NaN');
  }
  if (pageSize < 1) {
    throw new Error('[usePagination] pageSize < 1');
  }
  const [currentPage, setPage] = useState(0);
  const totalPages = Math.ceil(list.length / pageSize);
  const offsetItems = currentPage * pageSize;
  const pageItems = list.slice(offsetItems, offsetItems + pageSize);

  return {
    pageItems,
    currentPage,
    totalPages,
    totalItems: list.length,
    pageSize,
    offsetItems,
    setPage,
  };
};
