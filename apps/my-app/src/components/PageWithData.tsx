import { useState } from 'react';
import { PageWrapper, TabBody, TabHead } from '@heni-gql/ui';
import { ContinentsList } from './ContinentsList';
import { CountryList } from './CountryList';
import { LanguageList } from './LanguageList';

export const PageWithData = () => {
  const [value, setValue] = useState(0);

  return (
    <PageWrapper title="World data">
      <TabHead
        value={value}
        onChange={setValue}
        labels={['Countries', 'Continents', 'Languages']}
      />

      <TabBody value={value} index={0}>
        <CountryList />
      </TabBody>
      <TabBody value={value} index={1}>
        <ContinentsList />
      </TabBody>
      <TabBody value={value} index={2}>
        <LanguageList />
      </TabBody>
    </PageWrapper>
  );
};
