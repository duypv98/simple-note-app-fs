import { _ServerAPIError } from '../common/errors.js';

export function handleAPIError(err, req, res, next) {
  if (err) {
    if (err instanceof _ServerAPIError) {
      const { status, message } = err;
      return res.status(status).json({
        message,
        data: null
      })
    } else {
      console.log(err);
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  }
  return next();
}

export function handleInvalidRouteError(req, res, next) {
  return res.status(404).json({
    message: `Not Found: Can not perform ${req.method} request at endpoint ${req.originalUrl}`
  });
}
