const axios = require('axios');
const { db } = require('../../conf');
/*
Overpass query:

[out:json];
area["name"="France métropolitaine"]["admin_level"="3"]->.country;
(
  node(area.country)["amenity"="restaurant"];
);
out ;
*/
const overpassUrl = 'https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%3Barea%5B%22name%22%3D%22France%20m%C3%A9tropolitaine%22%5D%5B%22admin%5Flevel%22%3D%223%22%5D%2D%3E%2Ecountry%3B%28node%5B%22amenity%22%3D%22restaurant%22%5D%28area%2Ecountry%29%3B%29%3Bout%3B%0A';

/* Array of restaurants from the overpass API (not all restaurants have an adress)
--> result of scrapRestaurants() */
let scrapedRestaurants = [];
/* Array of restaurants without an address
--> result of checkAddress() */
const addressLessRestaurants = [];
/* Array of restaurants with an address
--> result of checkAddress() */
const withAddressRestaurants = [];
// All restaurants with address --> result of scrapAddresses()
let fullRestaurants = [];
// const fails = [];
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
        || restaurant[3] === null || restaurant[4] === null || restaurant[2].length > 6) {
      addressLessRestaurants.push(restaurant);
    }
    else {
      withAddressRestaurants.push(restaurant);
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
      const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${item[6]}&lat=${item[5]}`;
      console.log(`================= ${url} =================  `);
      // await new Promise((resolve) => setTimeout(resolve, 100));
      let restaurant = [];
      try {
        const { data: { features } } = await axios.get(url);
        if (features.length !== 0) {
          restaurant = [
            item[0],
            features[0].properties.city || item[1] || null,
            features[0].properties.housenumber || item[2] || null,
            features[0].properties.postcode || item[3] || null,
            features[0].properties.street || item[4] || features[0].properties.name || null,
            item[5],
            item[6]];
          restaurants.push(restaurant);
        }
      }
      catch (error) {
        console.log(error);
        // fails.push(item);
      }
    }, Promise.resolve());
    // await fails.reduce(async (promise, item) => {
    //   await promise;
    //   const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${item[6]}&lat=${item[5]}`;
    //   console.log(`================= ${url} =================  `);
    //   // await new Promise((resolve) => setTimeout(resolve, 100));
    //   let restaurant = [];
    //   try {
    //     const { data: { features } } = await axios.get(url);
    //     if (features.length !== 0) {
    //       restaurant = [
    //         item[0],
    //         features[0].properties.city || item[1] || null,
    //         features[0].properties.housenumber || item[2] || null,
    //         features[0].properties.postcode || item[3] || null,
    //         features[0].properties.street || item[4] || features[0].properties.name || null,
    //         item[5],
    //         item[6]];
    //       restaurants.push(restaurant);
    //     }
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // }, Promise.resolve());

    fullRestaurants = [...withAddressRestaurants, ...restaurants];
  }
  catch (err) {
    console.warn(err);
  }
};

const finalRestaurants = async () => {
  try {
    await scrapRestaurants();
    await checkAddress();
    await scrapAddresses();

    // console.log(fails);
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
