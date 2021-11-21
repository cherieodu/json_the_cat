const request = require('request');
const query = ((process.argv).slice(2))[0];

let options = {
  method: 'GET',
  url: 'https://api.thecatapi.com/v1/breeds/search',
  qs: { q: query }
};

request(options, (error, response, body) => {
  if (error) {
    console.log('There was an error: ', error);
  } else {
    console.log('statuscode: ',response.statusCode);
    const data = JSON.parse(body);

    if (data.length === 0 || data === undefined) {
      console.log("There was an error. Check if the breed is spelled correctly.");
    } else {
      console.log(data[0].description);
    }
    
    
  }
});