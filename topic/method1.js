const hardJsonString = '{"a": 1, "b": "2", "c": {"d": 3, "e": "4"}}';

const hardReviver = (key, value) => {
  if (typeof value === 'string' && !isNaN(value)) {
    return Number(value); // Convert numeric strings to numbers
  }
  return value;
};

const hardNewObj = JSON.parse(hardJsonString, hardReviver);

console.log(hardNewObj);