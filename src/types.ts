export interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
  metadata?: Record<string, any>;
}
