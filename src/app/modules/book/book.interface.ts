import { Genre } from "./book.types";

export interface IBookMethod {
  updateAvailability(): Promise<IBookDocument>;
}

export type IBookNormal = {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
};

export type IBookDocument = IBookNormal & Document & IBookMethod;
