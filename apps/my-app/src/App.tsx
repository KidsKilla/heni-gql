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
    return (
      <PageError
        name={error.name}
        message={error.message}
        stack={error.stack}
      />
    );
  }

  if (!data) {
    const noDataError = new Error('No data was fetched');
    return (
      <PageError
        name="WAT???"
        message={noDataError.message}
        stack={noDataError.stack}
      />
    );
  }

  return <PageWithData />;
}
