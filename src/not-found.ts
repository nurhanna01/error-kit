import { AppError } from './app-error';

export function notFound(message: string): AppError {
  return new AppError(404, 'Not Found', message);
}
