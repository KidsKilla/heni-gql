export type ID<K extends string | symbol = symbol> = string & { __kind?: K };

export interface Country {
  code: ID<'country'>;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  capital: string;
  currency: string;
  languages: Language[];
  emoji: string;
  emojiU: string;
  states: State[];
}

export interface Continent {
  code: ID<'continent'>;
  name: string;
  countries: Country[];
}

export interface Language {
  code: ID<'lang'>;
  name: string;
  native: string;
  rtl: boolean;
}

export interface State {
  code: ID<'state'>;
  name: string;
  country: Country;
}

export interface AnyQuerySchema extends QueryListsSchema, QueryItemsSchema {}

export interface QueryItemsSchema {
  country: Country | null;
  language: Language | null;
  continent: Continent | null;
}

export interface QueryListsSchema {
  countries: Country[];
  languages: Language[];
  continents: Continent[];
}
