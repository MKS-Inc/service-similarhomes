# Abode Property value/cost System Design

# Related Projects
- https://github.com/MKS-Inc/service-monthlyCost_rentalValue
- https://github.com/MKS-Inc/service-neighborhood

# API Documentation

## get property
- GET `/api/houses`
- Response
  - Status : `200 OK`

## Add property
- POST `/api/houses`
- Response
  - Status : `201 Created`
  - num : `Image Name, ex) if num is 1353 then post 1353.jpg`

## Update property
- PUT `/api/houses`
- Response
  - Status : 204 Updated
  - detail : `Updates heart filled`

## Delete property
- DELETE `/api/houses/:id`
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