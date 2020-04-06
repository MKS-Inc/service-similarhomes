# Abode Property value/cost System Design

# Related Projects
- https://github.com/MKS-Inc/service-monthlyCost_rentalValue
- https://github.com/MKS-Inc/service-neighborhood

# API Documentation

## get property
- GET `/api/houses`
- Response
  - Status : `200 OK`
  - Sample data :
    [
    {
        "id": 1,
        "neighborhood": "Noe Valley",
        "home_cost": 1545000,
        "bedrooms": 4,
        "bathrooms": 2,
        "home_address": "Dicki Estates Ct.",
        "sf": 3312,
        "home_image": "22.jpg",
        "heart_filled": 0
    },
    ...

## Add property
- POST `/api/houses`
- Response
  - Status : `201 Created`

## Update property
- PUT `/api/houses`
- Response
  - Status : `204 Updated`
  - detail : `Updates heart filled`

## Delete property
- DELETE `/api/houses/:id`
- Response
  - Status : `204 Deleted`

# Server set up
NOTE: This server will run on port 3001 of your local host

Run this command in the CLI (in this module's root directorate):
- npm run build:react
- npm run start-dev
- npm run populateHouses

# Accessing the service
Go to your browser (preferrably Google Chrome) and type in:
- http://localhost:3001