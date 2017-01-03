const MIN = 0;
const MAX = 255;
const INITIAL_INPUT_VALUE = 0;

export const generateNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateInputs = (count: number) => new Array(count)
  .fill(INITIAL_INPUT_VALUE)
  .map((value, key) => {
    const min = generateNumber(MIN, MAX);
    const max = generateNumber(min, MAX);

    return {
      key,
      value: Math.max(value, min),
      min: min,
      max: max
    }
  });
