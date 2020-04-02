# Abode Property value/cost System Design

# Related Projects
- https://github.com/MKS-Inc/service-monthlyCost_rentalValue
- https://github.com/MKS-Inc/service-neighborhood

# API Documentation

## get houses
- GET `/api/houses`
- Response
  - Status : `200 OK`
  - Content example:
  ```
  [{"id":1,"neighborhood":"The Mission","home_cost":1887000,"bedrooms":3,"bathrooms":2,
  "home_address":"Walker Crossing Wy.","sf":2259,"home_image":"49.jpg",
  "heart_filled":0},{"id":2,"neighborhood":"Noe Valley","home_cost":1426000,
  "bedrooms":5,"bathrooms":4,"home_address":"Stacy Parkway Ct.","sf":4015,
  "home_image":"14.jpg","heart_filled":0},{"id":3,"neighborhood":"North Beach",
  "home_cost":1464000,"bedrooms":3,"bathrooms":2,"
  ...

  ```

## Add house
- POST `/api/createhouse`
- Response
  - Status : `200 OK`

## Update house
- PUT `/api/updatehouse`
- Response
  - Status : 200 OK

## Delete house
- DELETE `/api/deletehouse`
- Response
  - Status : 200 OK

# Server set up
NOTE: This server will run on port 3001 of your local host

Run this command in the CLI (in this module's root directorate):
- npm run build:react
- npm run start-dev
- npm run populateHouses

# Accessing the service
Go to your browser (preferrably Google Chrome) and type in:
- http://localhost:3001