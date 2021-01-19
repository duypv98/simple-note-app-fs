import { MissingRequiredFieldError } from '../common/errors.js';

/**
 * 
 * @param {object} dataSrc 
 * @param {string[]} fields 
 */
export function checkRequiredFields(dataSrc, fields) {
  if (fields.some(field => !dataSrc[field])) throw new MissingRequiredFieldError();
}
