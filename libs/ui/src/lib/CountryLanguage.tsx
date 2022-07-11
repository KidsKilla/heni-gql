export const CountryLanguage = (props: {
  langs?: Array<{
    name: string;
    code: string;
  }>;
}) => {
  if (props.langs === undefined || props.langs.length === 0) {
    return <>N/A</>;
  }
  if (props.langs.length === 1) {
    return <>{props.langs[0].name}</>;
  }
  return (
    <ol>
      {props.langs.map((lng) => (
        <li key={lng.code}>{lng.name}</li>
      ))}
    </ol>
  );
};
