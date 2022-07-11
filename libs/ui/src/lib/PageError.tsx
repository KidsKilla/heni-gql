import { Typography } from '@mui/material';
import { PageWrapper } from './PageWrapper';

export const PageError = (props: { title: string; error: Error }) => (
  <PageWrapper title="Not good :(">
    <Typography variant="h2" gutterBottom>
      {props.title}
    </Typography>

    <Typography variant="body1">{props.error.message}</Typography>

    <pre>
      <code>{props.error.stack}</code>
    </pre>
  </PageWrapper>
);
