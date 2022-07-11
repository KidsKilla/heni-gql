import { Pagination as Pager } from '@mui/material';

export const PaginationByIndex = ({
  current,
  total,
  onChangeIndex,
}: {
  current: number;
  total: number;
  onChangeIndex: (index: number) => void;
}) => (
  <Pager
    page={current + 1}
    count={total}
    onChange={(_event, value) => onChangeIndex(value - 1)}
  />
);
