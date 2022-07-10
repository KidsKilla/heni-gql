import { PageWrapper } from './PageWrapper';

export const PageError = (props: {
  name: string;
  message: string;
  stack?: string;
}) => (
  <PageWrapper title="Not good :(">
    <h2>{props.name}</h2>
    <p>{props.message}</p>
    <pre>
      <code>{props.stack}</code>
    </pre>
  </PageWrapper>
);
