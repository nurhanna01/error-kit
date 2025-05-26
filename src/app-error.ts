export class AppError extends Error {
  public statusCode: number;
  public error: string;
  public metadata?: Record<string, any>;
  constructor(
    statusCode: number,
    error: string,
    message: string,
    metadata?: Record<string, any>,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = error;
    this.metadata = metadata;
  }
}
