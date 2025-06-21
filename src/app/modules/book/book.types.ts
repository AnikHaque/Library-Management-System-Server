// This file defines the types and interfaces for the book module.
export type Genre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

  export type IBookQuery = {
  filter ?: Genre;
  sortBy ?: string;
  sort ?: "asc" | "desc";
  limit ?: number;
  page ?: number;
};
