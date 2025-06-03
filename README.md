# error-kit

A lightweight error handling library for Node.js and TypeScript, providing standardized error objects for better error management.

## 📦 Installation

```bash
npm install @nurhanna01/error-kit
```

## 🚀 Usage

```bash
import { badRequest, unauthorized, notFound, forbidden, internalServerError } from '@nurhanna01/error-kit';

throw badRequest('Invalid input');
throw unauthorized('Invalid credentials');
throw notFound('Resource not found');
throw forbidden('Access denied');
throw internalServerError('Internal server error');
```

#### Usage with metadata

```bash
throw badRequest('Invalid input', { field: 'email' });
```

## 🛡️ Usage with NestJS

If you are using NestJS, you can integrate the provided error filter in your main.ts

```bash
import { NestAppErrorFilter } from '@nurhanna01/error-kit';

app.useGlobalFilters(new NestAppErrorFilter());
```

## 📚 Available Errors

### 4xx Client Errors

These are commonly used for user-side mistakes or invalid requests:

- `badRequest(message?: string, metadata?: any)`
- `unauthorized(message?: string, metadata?: any)`
- `paymentRequired(message?: string, metadata?: any)`
- `forbidden(message?: string, metadata?: any)`
- `notFound(message?: string, metadata?: any)`
- `methodNotAllowed(message?: string, metadata?: any)`
- `notAcceptable(message?: string, metadata?: any)`
- `proxyAuthenticationRequired(message?: string, metadata?: any)`
- `requestTimeout(message?: string, metadata?: any)`
- `conflict(message?: string, metadata?: any)`
- `gone(message?: string, metadata?: any)`
- `lengthRequired(message?: string, metadata?: any)`
- `preconditionFailed(message?: string, metadata?: any)`
- `payloadTooLarge(message?: string, metadata?: any)`
- `uriTooLong(message?: string, metadata?: any)`
- `unsupportedMediaType(message?: string, metadata?: any)`
- `rangeNotSatisfiable(message?: string, metadata?: any)`
- `expectationFailed(message?: string, metadata?: any)`
- `misdirectedRequest(message?: string, metadata?: any)`
- `unprocessableEntity(message?: string, metadata?: any)`
- `locked(message?: string, metadata?: any)`
- `failedDependency(message?: string, metadata?: any)`
- `tooEarly(message?: string, metadata?: any)`
- `upgradeRequired(message?: string, metadata?: any)`
- `preconditionRequired(message?: string, metadata?: any)`
- `tooManyRequests(message?: string, metadata?: any)`
- `requestHeaderFieldsTooLarge(message?: string, metadata?: any)`
- `unavailableForLegalReasons(message?: string, metadata?: any)`

### 5xx Server Errors

Use these for unexpected internal issues:

- `internalServerError(message?: string, metadata?: any)`
- `notImplemented(message?: string, metadata?: any)`
- `badGateway(message?: string, metadata?: any)`
- `serviceUnavailable(message?: string, metadata?: any)`
- `gatewayTimeout(message?: string, metadata?: any)`
- `HTTPVersionNotSupported(message?: string, metadata?: any)`
- `variantAlsoNegotiates(message?: string, metadata?: any)`
- `insufficientStorage(message?: string, metadata?: any)`
- `loopDetected(message?: string, metadata?: any)`
- `bandwidthLimitExceeded(message?: string, metadata?: any)`
- `notExtended(message?: string, metadata?: any)`
- `networkAuthenticationRequired(message?: string, metadata?: any)`

## 🧑‍💻 Contributing

Contributions are welcome!  
Feel free to open issues or pull requests to improve this library.

## 📝 License

This project is licensed under the MIT License.
