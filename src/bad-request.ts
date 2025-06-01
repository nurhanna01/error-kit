import { AppError } from './app-error';
export function badRequest(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(400, 'Bad Request', message, metadata);
}
