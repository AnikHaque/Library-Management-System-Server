import { Request, Response, NextFunction } from "express";

import { sendResponse } from "../../utils/sendResponse";
import { BookService } from "./book.service";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const parsed = createBookZodSchema.parse(req.body);
    const result = await BookService.insertBook(req.body);
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
