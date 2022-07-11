import { FlagAvatar } from '@heni-gql/ui';
import { Chip, ListItemButton, ListItemText } from '@mui/material';

export const CoutryItem = (props: {
  name: string;
  flag: string;
  capital: string;
  currency: string;
  onSelect: () => void;
  // langs?: Array<{
  //   name: string;
  //   code: string;
  // }>;
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
