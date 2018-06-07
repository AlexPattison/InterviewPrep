const isPalPerm = (str) => {
  const letterCount = {};

  str.split('').forEach(let => {
    if (!letterCount[let]) {
      letterCount[let] = 0;
    }

    letterCount[let]++;
  })

  const singleLetters = Object.entries(letterCount).filter(([letter, count]) => {
    return count % 2 === 1;
  })

  return singleLetters.length <= 1;
};

console.log(isPalPerm('aaabb '));
console.log(isPalPerm('aaab'));
console.log(isPalPerm('aabb'));
console.log(isPalPerm('abcdedcba'));
