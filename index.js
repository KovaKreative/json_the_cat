const breedName = process.argv[2];

const fetchBreedDescription = require('./breedFetcher');

fetchBreedDescription(breedName, (error, body) => {
  if (error) {
    console.log("Request failed with " + error);
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