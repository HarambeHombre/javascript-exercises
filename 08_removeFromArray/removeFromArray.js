const removeFromArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (nums[i] === arguments[j]) {
        nums.splice(i, 1);
        i--; // Adjust index after removal
        break; // Exit inner loop to avoid skipping next element
      }
    }
  }
  return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
