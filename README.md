# 13-orm-e-commerce
## Object-Relational Mapping (ORM) Challenge: E-commerce Back End

 The challenge is to build the back end for an e-commerce site. Then take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
## User Story
    
### AS A manager 
- at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies
    
## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database







## Project Preview


### Installation and Usage
Git Clone the repo (local) and open in an IDE. Make sure you have node.js and npm installed ( `node -v` & `npm -v`). In the packages root directory, install the following packages: express.js, sequelize, mysql2, and dotenv (`npm i express` sequelize mysql2 dotenv). Also create a `.env` file in the root directory to save sensitive information such as your MYSQL username and password, and database name (`DB_NAME='', DB_USER='', DB_PW=''`). These variables are referenced in the /config/connection.js file. From the mysql shell, run source db/schema.sql; to create the schema, quit the mysql shell and run npm run seed to seed the tables. Finally run npm start to initiate the program, open Insomnia and the app is ready to test/demonstrate API routes: GET, POST, PUT, and DELETE for categories, products, and tags.




## Technology Used

- Insomnia
- Express
- Node.js
- Javascript
- mySQL (& sequelize)



<!-- CONTACT -->
## Contact

Contact me at JuliaFritsch04@gmail.com

https://github.com/JFritsch04

<p align="right">(<a href="#readme-top">back to top</a>)</p>

