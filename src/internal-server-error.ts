import { AppError } from './app-error';
import { ErrorResponse } from './types';

export function internalServerError(message: string): ErrorResponse {
  return new AppError(500, 'Internal Server Error', message);
}
