const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let options = {
    method: 'GET',
    url: 'https://api.thecatapi.com/v1/breeds/search',
    qs: { q: breedName }
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
  
      if (response.statusCode !== 200 || data.length === 0 || data === undefined) {
        callback(error);
      } else {
        let result = data[0].description;
        callback(null, result);
      }
      
      
    }
  });

};

module.exports = {fetchBreedDescription};

