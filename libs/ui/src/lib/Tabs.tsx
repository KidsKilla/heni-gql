import { ReactNode } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

const getHeadId = (indx: number) => `tab-head-${indx}`;
const getBodyId = (indx: number) => `tab-body-${indx}`;

export const TabHead = ({
  value,
  onChange,
  labels,
}: {
  labels: string[];
  value: number;
  onChange: (index: number) => void;
}) => (
  <Tabs
    value={value}
    onChange={(_e, newValue: number) => {
      onChange(newValue);
    }}
  >
    {labels.map((lbl, idx) => (
      <Tab
        key={idx}
        label={lbl}
        id={getHeadId(idx)}
        aria-controls={getBodyId(idx)}
      />
    ))}
  </Tabs>
);

export const TabBody = ({
  value,
  index,
  children,
}: {
  value: number;
  index: number;
  children: ReactNode;
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={getBodyId(index)}
    aria-labelledby={getHeadId(index)}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);
