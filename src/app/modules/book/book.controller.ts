import { Request, Response, NextFunction } from "express";

import { sendResponse } from "../../utils/sendResponse";
import { bookServices } from "./book.service";

const addBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bookServices.insertBook(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBooksController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await bookServices.getAllBooks(req.query);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  addBook,
  getAllBooksController,
};
