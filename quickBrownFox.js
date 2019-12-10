var text = 'the quick brown fox jumps over the lazy dog';

var allLetters = [...text].filter(letter => letter !== ' ');

var allUniqueLetters = [...new Set(allLetters)].sort();

console.log(`English letters count: ${allUniqueLetters.length}`);
  
console.log(`All english letters: ${allUniqueLetters}`);
