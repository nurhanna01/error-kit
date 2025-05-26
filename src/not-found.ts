import { AppError } from './app-error';
import { ErrorResponse } from './types';

export function notFound(message: string): ErrorResponse {
  return new AppError(404, 'Not Found', message);
}
