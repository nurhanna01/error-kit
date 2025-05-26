import { AppError } from './app-error';
import { ErrorResponse } from './types';

export function unauthorized(message: string): ErrorResponse {
  return new AppError(401, 'Unauthorized', message);
}
