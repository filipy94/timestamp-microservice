
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)

# Timestamp Microservice :symbols:

This project is part of the FreeCodeCamp's Back End Development and APIs Certification.

Packages used:

- [Express](https://expressjs.com/)
- [Moment.js](https://momentjs.com/)
- [body-parser](https://github.com/expressjs/body-parser#readme)


## Functionality :heavy_check_mark:

-  A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds;

- A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT;

- A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" };

- If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" };

- An empty date parameter should return the current time in a JSON object with a unix key and a utc key.


## How To Run FCC Tests locally

- Has [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) (and optionally [Yarn](https://yarnpkg.com/)) installed and updated on your machine;

- Clone (`$ git clone git@github.com:filipy94/timestamp-microservice.git`) or donwload this repository;

- Navigate to project root;

- Install the dependencies with `$ npm install` or `$ yarn install`;

- Execute the project with `$ npm start` or `$ yarn start`;

- Manually open the browser and go to `http://localhost:PORT`.