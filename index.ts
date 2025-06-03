export { AppError } from './src/app-error';
export { NestAppErrorFilter } from './src/app-error-filter';

// 4xx Client Errors
export {
  badRequest,
  unauthorized,
  paymentRequired,
  forbidden,
  notFound,
  methodNotAllowed,
  notAcceptable,
  proxyAuthenticationRequired,
  requestTimeout,
  conflict,
  gone,
  lengthRequired,
  preconditionFailed,
  payloadTooLarge,
  uriTooLong,
  unsupportedMediaType,
  rangeNotSatisfiable,
  expectationFailed,
  misdirectedRequest,
  unprocessableEntity,
  locked,
  failedDependency,
  tooEarly,
  upgradeRequired,
  preconditionRequired,
  tooManyRequests,
  requestHeaderFieldsTooLarge,
  unavailableForLegalReasons,
} from './src/cliient-error';

// 5xx Server Errors
export {
  internalServerError,
  notImplemented,
  badGateway,
  serviceUnavailable,
  gatewayTimeout,
  HTTPVersionNotSupported,
  variantAlsoNegotiates,
  insufficientStorage,
  loopDetected,
  bandwidthLimitExceeded,
  notExtended,
  networkAuthenticationRequired,
} from './src/server-error';
