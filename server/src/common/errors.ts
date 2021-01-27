import { ErrMessages } from './constants';

type ServerAPIErrorData = {
  status: number,
  message: string,
  data?: any
}

export class _ServerAPIError extends Error {
  public status: number;
  public data: any;

  constructor({
    status, message, data
  }: ServerAPIErrorData) {
    super();
    this.status = status;
    this.message = message;
    this.data = data || null;
  }
}

// Common Errors
export class MissingRequiredFieldError extends _ServerAPIError {
  constructor() {
    super({ status: 400, message: ErrMessages.MISSING_REQUIRED_FIELD });
  }
}

// User Errors
export class InvalidCredentialError extends _ServerAPIError {
  constructor() {
    super({ status: 400, message: ErrMessages.INVALID_CREDENTIAL });
  }
}

export class UsedEmailError extends _ServerAPIError {
  constructor() {
    super({ status: 409, message: ErrMessages.USED_EMAIL });
  }
}

export class UnauthorizedError extends _ServerAPIError {
  constructor() {
    super({ status: 401, message: ErrMessages.UNAUTHORIZED });
  }
}

export class InvalidTokenError extends _ServerAPIError {
  constructor() {
    super({ status: 401, message: ErrMessages.INVALID_TOKEN });
  }
}

export class ExpiredTokenError extends _ServerAPIError {
  constructor() {
    super({ status: 401, message: ErrMessages.EXPIRED_TOKEN, data: { isExpired: true } });
  }
}

export class NotFoundUserError extends _ServerAPIError {
  constructor() {
    super({ status: 404, message: ErrMessages.USER_NOT_FOUND });
  }
}

// Note Errors
export class NotFoundNoteError extends _ServerAPIError {
  constructor() {
    super({ status: 404, message: ErrMessages.NOTE_NOT_FOUND });
  }
}
