export const SORT_BY = [
  "release-date",
  "popularity",
  "alphabetical",
  "relevance",
] as const;

export type SortByType = (typeof SORT_BY)[number];
