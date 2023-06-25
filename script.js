
function letterCombinations(input_digit) {
  //Complete the function
	 const digitToLetter = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: "0",
    1: "1",
  };

  // Base case: if the input digit is empty, return an empty array
  if (input_digit.length === 0) {
    return [];
  }

  // Base case: if the input digit has only one character, return the corresponding letters
  if (input_digit.length === 1) {
    return digitToLetter[input_digit[0]].split("");
  }

  // Get the first digit in the input digit string
  const firstDigit = input_digit[0];
  // Get the remaining digits
  const remainingDigits = input_digit.slice(1);
  // Recursively find the letter combinations for the remaining digits
  const remainingCombinations = letterCombinations(remainingDigits);

  // Get the letters corresponding to the first digit
  const letters = digitToLetter[firstDigit].split("");

  // Generate the letter combinations by combining the letters with the remaining combinations
  const combinations = [];
  for (const letter of letters) {
    for (const combination of remainingCombinations) {
      combinations.push(letter + combination);
    }
  }

  return combinations;
}

module.exports = letterCombinations;
