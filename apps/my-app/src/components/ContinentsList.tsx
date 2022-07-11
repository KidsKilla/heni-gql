import { Box } from '@mui/material';
import { useWorldData } from '../data/useWorldData';
import { CountriesListCollapse } from './CountriesListCollapse';

export const ContinentsList = () => {
  const { continents, data } = useWorldData();

  const CONTINENT_COUNT: Record<string, string[]> = {};
  data.countries.forEach((country) => {
    const id = country.continent.code;
    if (!(id in CONTINENT_COUNT)) {
      CONTINENT_COUNT[id] = [];
    }
    CONTINENT_COUNT[id].push(country.code);
  });

  return (
    <ol>
      {continents.ids.map((contId) => (
        <li key={contId}>
          <Box sx={{ py: 1 }}>
            <strong>{continents.byId[contId].name}</strong>{' '}
            <CountriesListCollapse countryIds={CONTINENT_COUNT[contId]} />
          </Box>
        </li>
      ))}
    </ol>
  );
};
