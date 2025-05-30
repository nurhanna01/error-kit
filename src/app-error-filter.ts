import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { AppError } from './app-error';

@Catch(AppError)
export class NestAppErrorFilter implements ExceptionFilter {
  catch(exception: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response
      .status(exception.statusCode || HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        statusCode: exception.statusCode,
        error: exception.name,
        message: exception.message,
        metadata: exception.metadata,
      });
  }
}
