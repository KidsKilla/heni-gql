import { ReactNode } from 'react';
import { Typography, Container } from '@mui/material';

export const PageWrapper = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => (
  <Container maxWidth="md">
    <header>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
    </header>
    {children}
  </Container>
);
