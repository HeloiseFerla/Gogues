const axios = require('axios');
const { db } = require('../../conf');

const overpassUrl = 'https://overpass-api.de/api/interpreter?data=[out:json];area["name"="Lille"]->.city;area["name"="France"]->.country;(node["amenity"="restaurant"](area.city)(area.country););out center;';

/* Array of restaurants from the overpass API (not all restaurants have an adress)
--> result of scrapRestaurants() */
let scrapedRestaurants = [];
/* Array of restaurants without an address
--> result of checkAddress() */
const addressLessRestaurants = [];
/* Array of restaurants with an address
--> result of checkAddress() */
const withAdressRestaurants = [];
// All restaurants with address --> result of scrapAddresses()
let fullRestaurants = [];

// scrapp restaurants from the overpass API (not all restaurants have an adress)
const scrapRestaurants = async () => {
  try {
    const { data: { elements } } = await axios.get(overpassUrl);
    const restaurants = elements.filter((restaurant) => restaurant.tags.name)
      .map((restaurant) => ([
        restaurant.tags.name,
        restaurant.tags['addr:city'] || null,
        restaurant.tags['addr:housenumber'] || null,
        restaurant.tags['addr:postcode'] || null,
        restaurant.tags['addr:street'] || null,
        restaurant.lat || null,
        restaurant.lon || null,
      ]

      ));
    scrapedRestaurants = [...restaurants];
  }
  catch (err) {
    console.log(err);
  }
};

/* Check for each restaurant if there is an address.
If false, data about restaurant and  is add toan url is add to dataGouvApiUrls array
if true, data about restaurant is add to withAdressRestaurants array
*/
const checkAddress = () => {
  scrapedRestaurants.forEach((restaurant) => {
    if (restaurant[1] === null || restaurant[2] === null
        || restaurant[3] === null || restaurant[4] === null) {
      addressLessRestaurants.push(restaurant);
    }
    else {
      withAdressRestaurants.push(restaurant);
    }
  });
};

/* Add missing address to restaurants withoutadress (addressLessRestaurants)
 */

const scrapAddresses = async () => {
  try {
    const restaurants = [];
    await addressLessRestaurants.reduce(async (promise, item) => {
      await promise;
      const { data: { features } } = await axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${item[6]}&lat=${item[5]}`);
      const restaurant = [
        item[0],
        features[0].properties.city || item[1] || null,
        features[0].properties.housenumber || item[2] || null,
        features[0].properties.postcode || item[3] || null,
        features[0].properties.street || item[4] || features[0].properties.name || null,
        item[5],
        item[6]];
      restaurants.push(restaurant);
    }, Promise.resolve());
    fullRestaurants = [...withAdressRestaurants, ...restaurants];
  }
  catch (err) {
    console.log(err);
  }
};

const finalRestaurants = async () => {
  try {
    await scrapRestaurants();
    await checkAddress();
    await scrapAddresses();
    console.log(fullRestaurants);
    // Insert into MySQL
    await db.query('INSERT INTO restaurants (name, city, houseNumber, postcode, street, lat, lon) VALUES ? ', [fullRestaurants]);
  }
  catch (err) {
    console.log(err);
  }
  finally {
    process.exit();
  }
};

finalRestaurants();
