### POC - Get all unique letters from a string

```javascript
(() => {
  const text = 'the quick brown fox jumps over the lazy dog';

  const allLetters = [...text].filter(letter => letter !== ' ');
  const allUniqueLetters = [...new Set(allLetters)].sort();

  console.log(`English letters count: ${allUniqueLetters.length}`);  
  console.log(`All english letters: ${allUniqueLetters}`);
})();
```

#### JavaScript Concepts
- const
- destructuring
- array filtering/sorting
- Set
- string interpolation
