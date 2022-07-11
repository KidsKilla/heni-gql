import { Chip } from '@mui/material';
import { useWorldData } from '../data/useWorldData';

export const ContinentsList = () => {
  const { continents, data } = useWorldData();

  const CONTINENT_COUNT: Record<string, number> = {};
  data.countries.forEach((country) => {
    const id = country.continent.code;
    if (!(id in CONTINENT_COUNT)) {
      CONTINENT_COUNT[id] = 0;
    }
    CONTINENT_COUNT[id] += 1;
  });

  return (
    <ol>
      {continents.ids.map((contId) => (
        <li key={contId}>
          <strong>{continents.byId[contId].name}</strong>{' '}
          <Chip
            variant="outlined"
            size="small"
            label={`${CONTINENT_COUNT[contId]} coutrues`}
          />
        </li>
      ))}
    </ol>
  );
};
