'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function(paragraph) {

  // The paragraph split into an array with a word at each index
  let words = paragraph.split(/\s+/);
  let normalizedWords = []; // initialize array

  // loops through words array
  for (let i = 0; i < words.length; i++) {
    // replace non-letters with a empty string
    let word = words[i].replace(/\W+/, '');
    // replacing all lowercase letters with upper case letters
    normalizedWords[i] = word.toUpperCase();
  }

  return normalizedWords;
};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const getUniqueWords = function(paragraph) {

  let normalizedWords = getNormalizedWords(paragraph);

  let uniqueWordsAsKeys = {};

  for (let i = 0; i < normalizedWords.length; i++) {

    // loop through normalizedWords
    // put each unique element into uniqueWordsAsKeys object
    let word = normalizedWords[i];

    uniqueWordsAsKeys[word] = true;
  }

  let uniqueWords = [];
  let k = 0;

  for(uniqueWords[k++] in uniqueWordsAsKeys);

  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function(paragraph, unique) {

  unique = (unique || false);

  if (unique === false) {

    let normalizedWords = getNormalizedWords(paragraph);
      return normalizedWords.length;

  } else {

    let uniqueWords = getUniqueWords(paragraph);
    return uniqueWords.length;
  }

};


// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
