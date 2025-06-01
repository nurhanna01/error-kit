import { AppError } from './app-error';

export function internalServerError(message: string): AppError {
  return new AppError(500, 'Internal Server Error', message);
}
