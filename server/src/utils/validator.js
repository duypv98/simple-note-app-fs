import { MissingRequiredFieldError } from '../common/errors.js';

/**
 * 
 * @param {object} dataSrc 
 * @param {string[]} fields 
 */
export function checkRequiredFields(dataSrc, fields) {
  const dataSrcKeys = Object.keys(dataSrc);
  if (fields.some(field => !dataSrcKeys.includes(field))) throw new MissingRequiredFieldError();
}
