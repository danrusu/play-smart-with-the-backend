### JavaScript POC - Get all unique letters from a string

```javascript
(() => {
  const text = 'The quick brown FOX jumps over the lazy DOG.';

  const isLetter = letter => letter.toLowerCase() !== letter.toUpperCase();
  const toLowerCase = letter => letter.toLowerCase();

  const textTokens = [...text];
  console.log(`textTokens [${textTokens.length}]: ${textTokens}`);

  const allLetters = textTokens.filter(isLetter).map(toLowerCase);
  console.log(`allLetters [${allLetters.length}]: ${allLetters}`);

  const uniqueLetters = [...new Set(allLetters)];
  console.log(`uniqueLetters [${uniqueLetters.length}]: ${uniqueLetters}`);

  uniqueLetters.sort();
  console.log(
    `sortedEnglishLetters [${uniqueLetters.length}]: ${uniqueLetters}`
  );
})();
```

#### JavaScript Concepts
- const
- destructuring
- array filtering/sorting
- Set
- string interpolation
