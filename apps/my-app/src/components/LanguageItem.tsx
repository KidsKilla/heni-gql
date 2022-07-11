import { apiType } from '@heni-gql/api';

export const LanguageItem = ({
  name,
  countries,
}: {
  name: string;
  countries?: Pick<apiType.Country, 'code' | 'emoji' | 'name'>[];
}) => {
  if (!countries) {
    return <>🗣 {name}</>;
  }
  if (countries.length === 1) {
    return (
      <>
        🗣 {name}: {countries[0].emoji} {countries[0].name}
      </>
    );
  }
  return (
    <>
      🗣 {name}:
      <ol>
        {countries.map((c, i) => (
          <li key={c.code}>
            {c.emoji} {c.name}
          </li>
        ))}
      </ol>
    </>
  );
};
