import { LinearProgress } from '@mui/material';
import { PageWrapper } from './PageWrapper';

export const PageLoading = () => (
  <PageWrapper title="Fetching data...">
    <LinearProgress />
  </PageWrapper>
);
