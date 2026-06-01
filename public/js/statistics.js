export const average = (arr) => {
  const average =
    arr.reduce((acc, cur) => {
      if (isNaN(cur)) return acc;
      return acc + cur;
    }, 0) / arr.length;

  return average;
};

export const median = (arr) => {
  const middlePoint = arr.length / 2;

  if (arr.length === 1) return arr[0];
  else if (arr.length % 2 === 0) {
    const medianArray = [arr[middlePoint], arr[middlePoint + 1]];
    return average(medianArray);
  } else {
    return arr[(arr.length - 1) / 2];
  }
};

export function mode(arr) {
  const sizes = new Map();

  arr.forEach((element) => {
    if (!sizes.has(element)) return sizes.set(element, 1);
    sizes.set(element, sizes.get(element) + 1);
  });

  let highestValue = 0;
  let keys = [];
  sizes.forEach((val, key) => {
    if (val > highestValue) {
      highestValue = val;
      keys = [key];
    } else if (highestValue === val) {
      keys.push(key);
    }
  });

  if (keys.length > 2) return "no mode";
  return keys;
}
