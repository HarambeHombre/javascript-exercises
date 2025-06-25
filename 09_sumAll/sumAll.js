const sumAll = function (...nums) {
  let value1 = nums[0];
  let value2 = nums[1];

  let result = 0;

  if(value1 < 0 || value2 < 0 || !Number.isInteger(value1) || !Number.isInteger(value2) || typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'ERROR';
  }

  if (value1 > value2) {
    while (value1 >= value2) {
      result += value1;
      value1--;
    }
  } else if (value1 < value2) {
    while (value1 <= value2) {
      result += value1;
      value1++;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
