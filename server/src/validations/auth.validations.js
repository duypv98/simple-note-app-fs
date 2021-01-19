import { checkRequiredFields } from '../utils/validator.js'

export default {
  login: (req, res, next) => {
    checkRequiredFields(req.body, ['email', 'password']);
    return next();
  },

  signUp: (req, res, next) => {
    checkRequiredFields(req.body, ['email', 'password']);
    return next();
  }
}