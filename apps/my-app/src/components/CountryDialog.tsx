import { List, ListItem, ListItemText } from '@mui/material';
import { CountryLanguage, Popup } from '@heni-gql/ui';
import { useWorldData } from '../data/useWorldData';

export const CountryDialog = ({
  coutryId,
  onClose,
}: {
  coutryId: string | null;
  onClose: () => void;
}) => {
  const { countries, continents, languages } = useWorldData();
  if (coutryId === null) {
    return null;
  }

  const country = countries.byId[coutryId];
  return (
    <Popup
      title={`${country.emoji} ${country.name}`}
      onClose={onClose}
      isOpen={true}
    >
      <List>
        {(
          [
            ['Capital:', country.capital],
            ['Currency:', country.currency],
            ['Continent:', continents.byId[country.continent.code].name],
          ] as const
        ).map((itm) => (
          <ListItem>
            <ListItemText primary={itm[0]} secondary={itm[1]} />
          </ListItem>
        ))}

        <ListItem>
          <ListItemText
            primary="Languages:"
            secondaryTypographyProps={{
              itemType: 'div',
            }}
            secondary={
              <CountryLanguage
                langs={country.languages.map((lng) => languages.byId[lng.code])}
              />
            }
          />
        </ListItem>
      </List>
    </Popup>
  );
};
