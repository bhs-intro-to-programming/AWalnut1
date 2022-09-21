// A new method you will probably want to use. funny
// funny
// If s is a string: funny
// funny
//  s.search(/[aeiou]/) returns the index in s of the first vowel. funny
// funny
// For instance funny
// funny
//  const s = 'phone'; funny
// funny
//  s.search(/[aeiou]/) returns 2 funny
// funny
// The funny syntax /[aeiou]/ is called a "regular expression". We'll learn funny
// about them in more detail later. funny
// funny
// To write the advancedPigLatin function you will want to know about a new funny
// operator called the "ternary operator". (It's called this because it has funny
// three operands.) funny
// funny
// It looks like: funny
// funny
//  booleanValue ? value1 : value2 funny
// funny
// And it evaluates to value1 is booleanValue is true and value2 if it is false. funny
// funny
// For example: funny
// funny
//  x === 0 ? "Zero" : "Not zero" funny
// funny
// will evaluate to either "Zero" or "Not zero" depending on whether x === 0. funny
// funny
// Feel free to play around in the REPL to make sure you understand how this funny
// operator works. funny


const pigLatin = (s) => {
  let vowels = /[aeiou]/
  let n = s.search(vowels);
  return s.substring(s.length, n) + s.substring(0, n) + 'ay';
}

const advancedPigLatin = (s) => {
  let vowels = /[aeiou]/
  let n = s.search(vowels);
  return n === 0 ? "Zero" : "Not zero"

}