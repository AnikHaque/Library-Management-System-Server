import { ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  const statusCode = 400;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};
