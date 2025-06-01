# error-kit

A lightweight error handling library for Node.js and TypeScript, providing standardized error objects for better error management.

## 📦 Installation

```bash
npm install @nurhanna01/error-kit
```

## 🚀 Usage

import { badRequest, unauthorized, notFound, forbidden, internalServerError } from '@nurhanna01/error-kit';

```bash
throw badRequest('Invalid input');
throw unauthorized('Invalid credentials');
throw notFound('Resource not found');
throw forbidden('Access denied');
throw internalServerError('Internal server error');
```

## 🛡️ Usage with NestJS

If you are using NestJS, you can integrate the provided error filter in your main.ts

```bash
import { NestAppErrorFilter } from '@nurhanna01/error-kit';


app.useGlobalFilters(new NestAppErrorFilter());
```

## 📚 Available Errors

badRequest(message?: string, data?: any)  
unauthorized(message?: string, data?: any)  
notFound(message?: string, data?: any)  
forbidden(message?: string, data?: any)  
internalServerError(message?: string, data?: any)

## 🧑‍💻 Contributing

Contributions are welcome!  
Feel free to open issues or pull requests to improve this library.

## 📝 License

This project is licensed under the MIT License.
