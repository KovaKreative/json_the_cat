const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    const parseBody = JSON.parse(body);
    if (!parseBody.length) {
      callback(error, undefined);
      return;
    }
    const output = parseBody[0].description;
    callback(error, output);
  });
};

module.exports = fetchBreedDescription;

