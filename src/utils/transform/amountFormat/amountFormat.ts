/**
 * Function that parse an number like 1.400, 300, 1.300.000
 *
 * @param value for the parse to locale string
 * @return string
 */
export default (value: number): string => {
  return value.toLocaleString('es-AR');
};
