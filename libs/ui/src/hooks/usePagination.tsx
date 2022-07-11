import { Pagination } from '@mui/material';
import { useState } from 'react';

export const usePagination = <In, Out>(props: {
  list: In[];
  pageSize: number;
}) => {
  const [currentPage, setPage] = useState(0);
  const maxPages = Math.ceil(props.list.length / props.pageSize);
  const offsetItems = currentPage * props.pageSize;
  const pageItems = props.list.slice(offsetItems, offsetItems + props.pageSize);

  return {
    pageItems,
    totalPages: maxPages,
    totalItems: props.list.length,
    pageSize: props.pageSize,
    offsetItems,
    currentPage,
    renderPager: () => (
      <Pagination
        page={currentPage + 1}
        count={maxPages}
        onChange={(_event, value) => setPage(value - 1)}
      />
    ),
  };
};
