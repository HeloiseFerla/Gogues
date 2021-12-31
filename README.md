# Gogues

## Global description

Gogues helps you choose the best restaurant / bar to  have a good time.
Peculiarity :question: Gogues doesn't provide information about foods :plate_with_cutlery: or drinks :beer: quality but about toilet. 
:toilet: :wc:

Why ? Using them is an inevitable and vital need. 
Gogues allows to meet this need with your eyes shut (or almost).:relieved:


The webapp allows to users to review the toilet of an establishement and displays to everyone a list of restaurants / bar sorted by search with their reviews.


## Status

In development

### Done : 

#### Frontend React JS
##### Home Page

- A header with the logo, the navigation to the other pages (+ border bottom on the current nav link) and a connection button. In the mobile version: a burger menu to display the navigation links and the connection button.
- Main: a presentation section, a section how it works and a back to top button.
- Footer: Links to my github and Linkedin Pages.

##### Restaurants Page

- Searchbar : a search by city (required) with dynamic proposals. 
- Map : a leaflet map center on the average latitude and longitude of the city ( average of all restaurants of the city) wich displays all restaurants of the city. By default, the city is Lille.
A marker clustering plugin for leaflet was used to avoid markers superposition on the map. 

#### Backend Node JS 
- Creation of the restaurantsScript
  - Scrap restaurants of France from the Overpass API 
  - Check if each restaurant has an address
  - Complete data if necessary with the missing address from the adresse data.gouv API 
  - Insert restaurants data into a MySQL database
- Creation of a restaurants route and model to access to restaurants information filter by city
- Creation of a cities route and model to access to cities information

#### MySQL database

- A restaurants table wich is primarily the results of restaurantsScript
- A cities table based on cities from the table restaurants which contains for each city an id and the average coordinates. 

Check the file XXXX for more information.


### TO DO
- Display a list of restaurants as result of search by city next to the associated map with the name, the average note, the address.
- Implement a pagination for the list of restaurants
- ...


## Features

- Search: Anywone can search for an establishement by city and by name (optionnal).The website displays a list of results with the associated map.

- Establishement Page: When visitors/ users click on a result, they're taken to the establishement page.

- Registration: A visitor is able to register on the site
Login/Logout: Users, once registered, should be able to log in to the website with their username and password. Logged users should be able to log out of the site.

- Review : On a establishement page, a logged user can submit a review : a rating on a scale of 1 to 5 and a comment.



## Running The Project

### Install dependencies ( Frontend and Backend)

` npm i` 

####Install these extensions for VSCode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)


### Create your environment variables (Backend)
Create (si tu parle du site: CREATES) a copy of the .env.sample file named .env :

`cp .env.sample .env`

Then adjust variables in .env to match your own environment.

### Run the app

When developping, to automatically restart the server on file changes :

`npm run dev`

If you don't need automatic reloadings, you can just :

`npm start`

