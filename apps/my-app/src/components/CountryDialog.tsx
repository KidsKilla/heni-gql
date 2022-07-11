import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useWorldData } from '../data/useWorldData';
import { CountryLanguage } from './CountryLanguage';

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
    <Dialog onClose={onClose} open={true} sx={{ minWidth: '30%' }}>
      <DialogTitle>
        {country.emoji} {country.name}
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText primary="Capital:" secondary={country.capital} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Currency:" secondary={country.currency} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Continent:"
              secondary={continents.byId[country.continent.code].name}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Languages:"
              secondaryTypographyProps={{
                itemType: 'div',
              }}
              secondary={
                <CountryLanguage
                  langs={country.languages.map(
                    (lng) => languages.byId[lng.code]
                  )}
                />
              }
            />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};
