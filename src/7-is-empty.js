export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  const isEmptyString = type === 'string' && stringArrayOrObject === '';
  const isEmptyArray = type === 'object' && stringArrayOrObject.length === 0;
  const isEmptyObject = type === 'object' && Object.keys(stringArrayOrObject).length === 0;

  // if (isEmptyString || isEmptyArray || isEmptyObject) {
  //   return true
  // }  else {
  //   return false;
  // }

  return isEmptyString || isEmptyArray || isEmptyObject;

}
