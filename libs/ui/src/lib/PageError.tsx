import { Typography } from '@mui/material';
import { PageWrapper } from './PageWrapper';

export const PageError = (props: {
  name: string;
  message: string;
  stack?: string;
}) => (
  <PageWrapper title="Not good :(">
    <Typography variant="h2" gutterBottom>
      {props.name}
    </Typography>

    <Typography variant="body1">{props.message}</Typography>

    <pre>
      <code>{props.stack}</code>
    </pre>
  </PageWrapper>
);
