### Utilities snippet
- Save it in Chrome Dev Tools and test it. 

```javascript
const prettify = json => JSON.stringify(json, null, 2);

const getRandomInRange = (from, to) => 
  Math.round(Math.random() * (from - to) + from);
```

#### Navigate to www.qatools.ro, execute the snippet and try the following code in the console
```javascript
fetch('https://qatools.ro/testfiles/sportcar.json')
    .then(response => response.json())
    .then(prettify
```    

