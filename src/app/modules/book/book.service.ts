// src/modules/book/book.service.ts
import { IBookDocument, IBookNormal } from "./book.interface";
import { Book } from "./book.model";

export const insertBook = async (payload: IBookNormal) => {
  const book = new Book(payload);
  return book.save();
};

export const BookService = {
  insertBook,
};
