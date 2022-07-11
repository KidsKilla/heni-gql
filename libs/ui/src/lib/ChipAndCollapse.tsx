import { ReactNode, useState } from 'react';
import { Chip, Collapse } from '@mui/material';

export const ChipAndCollapse = ({
  label,
  ids,
  renderItem,
}: {
  label: string;
  ids: string[];
  renderItem: (cid: string) => ReactNode;
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Chip
        variant="outlined"
        size="small"
        label={label}
        onClick={() => setOpen(!isOpen)}
      />

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <ol>
          {ids.map((cid) => {
            return <li key={cid}>{renderItem(cid)}</li>;
          })}
        </ol>
      </Collapse>
    </>
  );
};
