let request = require("request");
const args = process.argv.slice(2);
const breedName = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  const data = JSON.parse(body);

  if (data.length === 0){
    console.log("Breed name not found.");

  } else {
    console.log(data[0]["description"]);
  }
  });
