import { ReactNode } from 'react';

export const PageWrapper = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => (
  <div className="App">
    <header className="App-header">
      <h1>{title}</h1>
    </header>
    {children}
  </div>
);
