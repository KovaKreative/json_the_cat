const breedName = process.argv[2];

const fetchBreedDescription = require('./breedFetcher');

fetchBreedDescription(breedName, (error, body) => {
  if (error) {
    console.log("Request failed with " + error);
    return;
  }
  if(!body) {
    console.log("Search failed.");
    return;
  }
  console.log(body);
});