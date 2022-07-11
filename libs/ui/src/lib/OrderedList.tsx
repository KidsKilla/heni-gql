import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const OrderedList = <T extends string>({
  ids,
  renderItem,
}: {
  ids: T[];
  renderItem: (id: T) => ReactNode;
}) => (
  <ol>
    {ids.map((id) => (
      <li key={id}>
        <Box sx={{ py: 1 }}>{renderItem(id)}</Box>
      </li>
    ))}
  </ol>
);
