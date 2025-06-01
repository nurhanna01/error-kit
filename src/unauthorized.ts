import { AppError } from './app-error';

export function unauthorized(message: string): AppError {
  return new AppError(401, 'Unauthorized', message);
}
