import { AppError } from './app-error';
import { ErrorResponse } from './types';
export function badRequest(
  message: string,
  metadata?: Record<string, any>,
): ErrorResponse {
  return new AppError(400, 'Bad Request', message, metadata);
}
