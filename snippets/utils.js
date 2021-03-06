function prettify(json){
    return JSON.stringify(json, null, 2);
}
// const prettify = json => JSON.stringify(json, null, 2);

function prettyLog(json){
    console.log(prettify(json));
}
// const prettyLog = json => console.log(prettify(json));

function getRandomInRange(min, max){   
    return Math.round(Math.random() * (max - min) + min);
}
// const getRandomInRange = (min, max) => Math.round(Math.random() * (max - min) + min);

// Save this snippet in Chrome and add more utilities. 
// You can test 'prettify' and 'prettyLog' with http://danrusu.ro/test/sportcar.json
