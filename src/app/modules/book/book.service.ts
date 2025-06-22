// src/modules/book/book.service.ts
import { FilterQuery } from "mongoose";
import { IBookDocument, IBookNormal } from "./book.interface";
import { Book } from "./book.model";
import { IBookQuery } from "./book.types";

const insertBook = async (payload: IBookNormal) => {
  const book = new Book(payload);
  return book.save();
};

const getAllBooks = async (query: IBookQuery) => {
  const filter: FilterQuery<IBookDocument> = {};
  if (query.filter) filter.genre = query.filter;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sort === "asc" ? 1 : -1;
  const limit = Number(query.limit) || 10;

  return Book.find(filter)
    .sort({ [sortBy]: sortOrder })
    .limit(limit);
};

export const bookServices = {
  insertBook,
  getAllBooks,
};
