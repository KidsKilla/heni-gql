import { useState } from 'react';
import { Chip, Collapse } from '@mui/material';
import { useWorldData } from '../data/useWorldData';

export const CountriesListCollapse = ({
  countryIds,
}: {
  countryIds: string[];
}) => {
  const [isOpen, setOpen] = useState(false);
  const { countries } = useWorldData();

  return (
    <>
      <Chip
        variant="outlined"
        size="small"
        label={`${countryIds.length} coutrues`}
        onClick={() => setOpen(!isOpen)}
      />

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <ol>
          {countryIds.map((cid) => {
            const country = countries.byId[cid];
            return (
              <li key={cid}>
                {country.emoji} {country.name}
              </li>
            );
          })}
        </ol>
      </Collapse>
    </>
  );
};
