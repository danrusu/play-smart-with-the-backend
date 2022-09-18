### Chrome Dev Tools - UTILITIES SNIPPET
- Save it in Chrome and test it 
- You can find a simple test JSON at http://danrusu.ro/test/sportcar.json

```javascript
const prettify = json => JSON.stringify(json, null, 2);

const getRandomInRange = (from, to) => 
  Math.round(Math.random() * (from - to) + from);
```
