import { useMemo } from 'react';
import { useAllCountries } from '@heni-gql/api';
import { PageWrapper } from './PageWrapper';
import { PageError } from './PageError';
import { PageLoading } from './PageLoading';

export function App() {
  const { loading, error, data } = useAllCountries({
    continents: {
      code: true,
      name: true,
    },
    languages: {
      code: true,
      name: true,
    },
    countries: {
      code: true,
      name: true,
      emoji: true,
      languages: {
        code: true,
      },
    },
  });

  const countries = data?.countries.map((c) => c.code).join(',');
  const langs = data?.languages.map((c) => c.code).join(',');

  const LNG_COUNTRY_MAP = useMemo(() => {
    const lMap: Record<string, string[]> = {};
    data?.countries.forEach((cntr) => {
      cntr.languages.forEach((l) => {
        if (!lMap[l.code]) {
          lMap[l.code] = [];
        }
        lMap[l.code].push(cntr.emoji);
      });
    });
    return lMap;
  }, [!data, countries, langs]);

  if (loading) {
    return <PageLoading />;
  }

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

  return (
    <PageWrapper title="World data:">
      <h2>Continents:</h2>
      <ol>
        {data.continents.map((cont) => (
          <li key={cont.code}>{cont.name}</li>
        ))}
      </ol>

      <h2>Languages:</h2>
      <ol>
        {data.languages.map((lng) => (
          <li key={lng.code}>
            {lng.name}: {LNG_COUNTRY_MAP[lng.code]?.join(' ')}
          </li>
        ))}
      </ol>

      <h2>Countries:</h2>
      <ol>
        {data.countries.map((cntr) => (
          <li key={cntr.code}>
            {cntr.emoji} {cntr.name}
          </li>
        ))}
      </ol>
    </PageWrapper>
  );
}
