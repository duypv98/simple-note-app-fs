import { MissingRequiredFieldError } from '../common/errors';

/**
 * 
 * @param {any} dataSrc 
 * @param {string[]} fields 
 */
export function checkRequiredFields(dataSrc: any, fields: string[]) {
  const dataSrcKeys = Object.keys(dataSrc);
  if (fields.some((field: string) => !dataSrcKeys.includes(field))) throw new MissingRequiredFieldError();
}
