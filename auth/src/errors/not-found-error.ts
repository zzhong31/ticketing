import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Page Not Found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Route Not Found' }];
  }
}
