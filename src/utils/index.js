export const isDate = d => d instanceof Date;
export const isEmpty = o => Object.keys(o).length === 0;
export const isObject = o => o != null && typeof o === 'object';
export const properObject = o => {
  if (isObject(o)) {
    delete o.__initial__;
    delete o.__dirty__;
    if (!o.hasOwnProperty) {
      return { ...o };
    }
  }
  return o;
}
