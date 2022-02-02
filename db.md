# MySQL DB 

## Creation of restaurants tables and insert data (script restaurantsScrap)

## Creation of cities table with PK and name 

## Fill name of cities

Insert into gogues.cities (name)
select distinct city from restaurants;

## Check the count of cities

select count(distinct name) from cities;
select count(distinct city) from restaurants;

## Change table restaurants
### Add field cityID int according to name


SET SQL_SAFE_UPDATES=0;
update gogues.restaurants
inner join gogues.cities on restaurants.city = cities.name
set restaurants.cityId = cities.id;
SET SQL_SAFE_UPDATES=1;

## Change cityId in foreign key
Alter Table restaurants
Add constraint FK_restaurantcity
foreign key (cityId) references cities(id);

### Check
SELECT restaurants.name, city, cities.name 
FROM gogues_test.restaurants
join cities on cityId = cities.id
where cities.name = "Dabo";

### Delete city
ALTER TABLE restaurants
DROP COLUMN city;


## Add a lon and lat field to cities


SET SQL_SAFE_UPDATES=0;
With averagecoords as(SELECT ROUND(AVG(restaurants.lat),8) as lat, ROUND(AVG(restaurants.lon),8) as lon,cities.id as id
from restaurants
join cities on cityId=cities.id
Group by restaurants.cityId)

update cities 
inner join averagecoords on cities.id = averagecoords.id
set cities.lat = averagecoords.lat,
cities.lon = averagecoords.lon;
SET SQL_SAFE_UPDATES=1;

