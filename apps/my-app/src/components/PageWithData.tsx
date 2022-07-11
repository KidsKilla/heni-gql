import { useState } from 'react';
import { PageWrapper, TabBody, TabHead } from '@heni-gql/ui';
import { PageOfContinents } from './PageOfContinents';
import { PageOfCountries } from './PageOfCountries';
import { PageOfLanguages } from './PageOfLanguages';

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
        <PageOfCountries />
      </TabBody>
      <TabBody value={value} index={1}>
        <PageOfContinents />
      </TabBody>
      <TabBody value={value} index={2}>
        <PageOfLanguages />
      </TabBody>
    </PageWrapper>
  );
};
