const repeatString = function(word, num) {
    let result = ''
    if (num === 0) result = '' 
    else if ( num < 0) return 'ERROR';
    else if (word === '') return '';
    let i = 0
    while (i < num) {
        result += word
        i++
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
