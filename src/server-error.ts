import { AppError } from './app-error';

export function internalServerError(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(500, 'Internal Server Error', message, metadata);
}

export function notImplemented(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(501, 'Not Implemented', message, metadata);
}

export function badGateway(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(502, 'Bad Gateway', message, metadata);
}

export function serviceUnavailable(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(503, 'Service Unavailable', message, metadata);
}

export function gatewayTimeout(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(504, 'Gateway Timeout', message, metadata);
}

export function HTTPVersionNotSupported(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(505, 'HTTP Version Not Supported', message, metadata);
}

export function variantAlsoNegotiates(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(506, 'Variant Also Negotiates', message, metadata);
}

export function insufficientStorage(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(507, 'Insufficient Storage', message, metadata);
}

export function loopDetected(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(508, 'Loop Detected', message, metadata);
}

export function bandwidthLimitExceeded(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(509, 'Bandwidth Limit Exceeded', message, metadata);
}

export function notExtended(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(510, 'Not Extended', message, metadata);
}

export function networkAuthenticationRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(
    511,
    'Network Authentication Required',
    message,
    metadata,
  );
}
