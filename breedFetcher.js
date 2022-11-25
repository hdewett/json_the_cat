let request = require("request");
const args = process.argv.slice(2);
const breedName = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q= ${breedName}`, function(error, response, body) {
  console.log(body);
});


// const parseData = JSON.parse(data);
// console.log(parseData["description"]);