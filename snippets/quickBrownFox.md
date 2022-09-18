### JavaScript POC - Get all unique letters from a string

```javascript
(() => {
  const text = 'The quick brown FOX jumps over the lazy DOG.';

  const isLetter = letter => letter.toLowerCase() !== letter.toUpperCase();
  const toLowerCase = letter => letter.toLowerCase();

  const textTokens = [...text];
  const allLetters = textTokens.filter(isLetter).map(toLowerCase);
  const uniqueLetters = [...new Set(allLetters)];
  const sortedEnglishLetters = [...uniqueLetters].sort();

  const log = obj => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key} [${value.length}]: ${value}`);
    });
  };

  log({ textTokens, allLetters, uniqueLetters, sortedEnglishLetters });
})();
```

#### JavaScript Concepts
- IIFE
- arrow functions
- destructuring
- Set (from/to array)
- array map/filter/forEach/sort
- Object.entries
- string interpolation

