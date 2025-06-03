import { AppError } from './app-error';
export function badRequest(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(400, 'Bad Request', message, metadata);
}

export function unauthorized(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(401, 'Unauthorized', message, metadata);
}

export function paymentRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(402, 'Payment Required', message, metadata);
}

export function forbidden(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(403, 'Forbidden', message, metadata);
}

export function notFound(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(404, 'Not Found', message, metadata);
}

export function methodNotAllowed(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(405, 'Method Not Allowed', message, metadata);
}

export function notAcceptable(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(406, 'Not Acceptable', message, metadata);
}

export function proxyAuthenticationRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(407, 'Proxy Authentication Required', message, metadata);
}

export function requestTimeout(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(408, 'Request Timeout', message, metadata);
}

export function conflict(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(409, 'Conflict', message, metadata);
}

export function gone(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(410, 'Gone', message, metadata);
}

export function lengthRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(411, 'Length Required', message, metadata);
}

export function preconditionFailed(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(412, 'Precondition Failed', message, metadata);
}

export function payloadTooLarge(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(413, 'Payload Too Large', message, metadata);
}

export function uriTooLong(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(414, 'URI Too Long', message, metadata);
}

export function unsupportedMediaType(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(415, 'Unsupported Media Type', message, metadata);
}

export function rangeNotSatisfiable(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(416, 'Range Not Satisfiable', message, metadata);
}

export function expectationFailed(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(417, 'Expectation Failed', message, metadata);
}

export function misdirectedRequest(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(421, 'Misdirected Request', message, metadata);
}

export function unprocessableEntity(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(422, 'Unprocessable Entity', message, metadata);
}

export function locked(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(423, 'Locked', message, metadata);
}

export function failedDependency(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(424, 'Failed Dependency', message, metadata);
}

export function tooEarly(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(425, 'Too Early', message, metadata);
}

export function upgradeRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(426, 'Upgrade Required', message, metadata);
}

export function preconditionRequired(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(428, 'Precondition Required', message, metadata);
}

export function tooManyRequests(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(429, 'Too Many Requests', message, metadata);
}

export function requestHeaderFieldsTooLarge(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(
    431,
    'Request Header Fields Too Large',
    message,
    metadata,
  );
}

export function unavailableForLegalReasons(
  message: string,
  metadata?: Record<string, any>,
): AppError {
  return new AppError(451, 'Unavailable For Legal Reasons', message, metadata);
}
