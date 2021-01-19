import { ErrMessages } from './constants.js';

export class _ServerAPIError extends Error {
  constructor({
    status, message, data
  }) {
    super();
    this.status = status;
    this.message = message;
    this.data = data || null;
  }
}

export class MissingRequiredFieldError extends _ServerAPIError {
  constructor() {
    super({ status: 400, message: ErrMessages.MISSING_REQUIRED_FIELD });
  }
}

export class InvalidCredentialError extends _ServerAPIError {
  constructor() {
    super({ status: 400, message: ErrMessages.INVALID_CREDENTIAL });
  }
}

export class UsedEmailError extends _ServerAPIError {
  constructor() {
    super({ status: 409, message: ErrMessages.USED_EMAIL })
  }
}
