import { AppError } from './app-error';
import { ErrorResponse } from './types';

export function forbidden(message: string): ErrorResponse {
  return new AppError(403, 'Forbidden', message);
}
