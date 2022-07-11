import { PageError, PageLoading } from '@heni-gql/ui';
import { useContext } from 'react';
import { PageWithData } from './components/PageWithData';
import { wdContext } from './data/wdContext';

export function App() {
  const ctx = useContext(wdContext);
  if (ctx === null || ctx.loading) {
    return <PageLoading />;
  }

  const { error, data } = ctx;
  if (error) {
    return <PageError title={error.name} error={error} />;
  }

  if (!data) {
    return (
      <PageError title="WAT???" error={new Error('No data was fetched')} />
    );
  }

  return <PageWithData />;
}
