const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, result) => {
  if (error) {
    console.log('There was an error:', error);
  } else {
    console.log(result);
  }
});