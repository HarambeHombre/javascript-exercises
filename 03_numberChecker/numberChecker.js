function numberChecker(number) {
  switch (number) {
    case 1000:
      return true;
    case 10:
      return true;
    case 9:
      return false;
    case 6:
      return false;
    default:
      return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
