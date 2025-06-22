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

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await bookServices.getBookById(req.params.bookId);
    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `The book with id ${req.params.bookId} not found`,
        data: null,
      });
    }
    sendResponse(res, {
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await bookServices.updateBook(req.params.bookId, req.body);
    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `The book with id ${req.params.bookId} not found`,
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteBook = await bookServices.deleteBook(req.params.bookId);
    if (!deleteBook) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: `The book with id ${req.params.bookId} not found`,
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  addBook,
  getAllBooksController,
  getBookById,
  updateBook,
  deleteBook,
};
