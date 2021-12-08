const axios = require('axios');
const { db } = require('../../conf');

const overpassUrlRestaurants = 'https://overpass-api.de/api/interpreter?data=[out:json];area["name"="Lille"]->.searchArea;(node["amenity"="restaurant"](area.searchArea););out center;';

/* restaurants : array with restaurants from the overpass API (not all restaurants have an adress)
--> result of scrapRestaurants() */
let restaurants = [];
// fullRestaurants : restaurants with address --> result of checkAddress()
let fullRestaurants = [];

// scrapRestaurants : scrapp restaurants from the overpass API (not all restaurants have an adress)
const scrapRestaurants = async () => {
  try {
    const { data: { elements } } = await axios.get(overpassUrlRestaurants);
    const properRestaurants = elements.filter((restaurant) => restaurant.tags.name)
      .map((restaurant) => ([
        restaurant.tags.name,
        restaurant.tags['addr:city'] || null,
        restaurant.tags['addr:housenumber'] || null,
        restaurant.tags['addr:postcode'] || null,
        restaurant.tags['addr:street'] || null,
        restaurant.lat || null,
        restaurant.lon || null,

      ]));
    restaurants = [...properRestaurants];
  }
  catch (err) {
    console.log(err);
  }
};

/* Check for each restaurant if there is an address.
If not, a request for API adress.data.gouv allow to complete data */
const checkAddress = async () => {
  try {
    fullRestaurants = await Promise.all(restaurants.map(async (restaurant) => {
      if (restaurant[1] === null || restaurant[2] === null || restaurant[3] === null
         || restaurant[4] === null) {
        const { data: { features } } = await axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${restaurant[6]}&lat=${restaurant[5]}`);
        return ([
          restaurant[0],
          features[0].properties.city || null,
          features[0].properties.housenumber || null,
          features[0].properties.postcode || null,
          features[0].properties.street || null,
          restaurant[5] || null,
          restaurant[6] || null,

        ]);
      }
      return restaurant;
    }));
  }

  catch (err) {
    console.log(err);
  }
};
const finalRestaurants = async () => {
  try {
    await scrapRestaurants();
    console.log(restaurants.length);
    await checkAddress();

    // Insert into MySQL
    await db.query(
      'INSERT INTO restaurants (name, city, houseNumber, postcode, street, lat, lon) VALUES ? ',
      [fullRestaurants],
    );
  }
  catch (err) {
    console.log(err);
  }
  finally {
    process.exit();
  }
};

finalRestaurants();
