export function sum(a, b) {
  return a + b;
}
export function capitalize(input) {
  const charArray = input.split("");
  charArray[0] = charArray[0].toUpperCase();
  const output = charArray.join("");
  return output;
}
export function reverseString(input) {
  const charArray = input.split("");
  return charArray.reverse().join("");
}
export class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}
export function caesarCipher(string, shiftFactor) {
  const charArray = string.split("");
  return charArray
    .map((character) => shiftCharacter(character, shiftFactor))
    .join("");
}
function shiftCharacter(character, shiftFactor) {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabetString.split("");
  const upperCaseAlphabetArr = alphabetString.toUpperCase().split("");
  const currentIndex = isUpperCase(character)
    ? upperCaseAlphabetArr.findIndex((value) => value === character)
    : alphabetArr.findIndex((value) => value === character);
  if (currentIndex === -1) return character;
  let newIndex = (currentIndex + shiftFactor) % 26; //modulo operation excludes out-of-boundary search

  return isUpperCase(character)
    ? upperCaseAlphabetArr[newIndex]
    : alphabetArr[newIndex];
}
function isUpperCase(character) {
  return character === character.toUpperCase();
}
export function analyzeArray(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = Math.floor(sum / array.length);
  const length = array.length;
  const sortedArr = bubbleSort(array);
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length - 1];
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
export function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}
