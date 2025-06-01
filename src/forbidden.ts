import { AppError } from './app-error';

export function forbidden(message: string): AppError {
  return new AppError(403, 'Forbidden', message);
}
