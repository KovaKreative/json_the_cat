const search = process.argv[2];
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + search, (error, response, body) => {
  if (error) {
    console.log("Request failed: " + error);
    return;
  }
  const parseBody = JSON.parse(body);
  if (!parseBody.length) {
    console.log("No results");
    return;
  }
  const output = parseBody[0].description;
  console.log(output);
});