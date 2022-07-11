import { Avatar, ListItemAvatar } from '@mui/material';

export const FlagAvatar = ({ flag }: { flag: string }) => (
  <ListItemAvatar>
    <Avatar
      sx={{
        bgcolor: 'transparent',
        borderColor: '#ccc',
        borderWidth: '1px',
        borderStyle: 'solid',
        // boxShadow: ''
      }}
    >
      {flag}
    </Avatar>
  </ListItemAvatar>
);
