// src/modules/book/book.service.ts
import { IBookDocument, IBookNormal } from "./book.interface";
import { Book } from "./book.model";

export const createBook = async (payload: IBookNormal) => {
  const book = new Book(payload);
  return book.save();
};

export const BookService = {
  createBook,
};
