### Utilities snippet
- Save it in Chrome Dev Tools and test it. 

```javascript
const prettify = json => {
  console.log(JSON.stringify(json, null, 2));
};

const getRandomInRange = (from, to) =>
  Math.round(Math.random() * (to - from) + from);
```

#### Navigate to [qatools.ro](http://qatools.ro), execute the snippet and try the following code in the console
```javascript
fetch('http://qatools.ro/testfiles/sportcar.json')
    .then(response => response.json())
    .then(prettify);
```    

