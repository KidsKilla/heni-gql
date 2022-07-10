export type GQLFilter<T> = {
  [K in keyof T]?: T[K] extends string | number | boolean
    ? true
    : T[K] extends Array<infer It>
    ? GQLFilter<It>
    : GQLFilter<T[K]>;
};

export type ApplyGQLFilter<T, Q extends GQLFilter<T>> = {
  [K in keyof Q]: Q[K] extends true
    ? // @ts-expect-error Type 'K' cannot be used to index type 'T'. ts(2536)
      T[K]
    : Q[K] extends undefined
    ? never
    : // @ts-expect-error ☝️
    T[K] extends Array<infer It>
    ? Array<
        ApplyGQLFilter<
          It,
          // @ts-expect-error Type 'undefined' is not assignable to type 'GQLFilter<It>'
          Q[K]
        >
      >
    : // @ts-expect-error ☝️
      ApplyGQLFilter<T[K], Q[K]>;
};
