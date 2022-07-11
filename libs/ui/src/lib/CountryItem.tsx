import { ReactNode } from 'react';
import { FlagAvatar } from './FlagAvatar';
import { Chip, List, ListItemButton, ListItemText } from '@mui/material';

export const CountryList = ({ children }: { children: ReactNode }) => (
  <List sx={{ bgcolor: 'background.paper' }}>{children}</List>
);

export const CountryListItem = (props: {
  name: string;
  flag: string;
  capital: string;
  currency: string;
  onSelect: () => void;
}) => (
  <ListItemButton
    alignItems="flex-start"
    onClick={props.onSelect}
    divider={true}
  >
    <FlagAvatar flag={props.flag} />
    <ListItemText
      primary={
        <>
          <strong>{props.name}</strong>{' '}
          <Chip
            variant="outlined"
            size="small"
            label={`Capital: ${props.capital ?? 'N/A'}`}
          />
        </>
      }
      secondary={`Currency: ${props.currency}`}
    />
  </ListItemButton>
);
