# Agromizer
Agromizer is a farm plotting tool that optimizes plant placement by using permaculture practices, while making the best use of available space. This software is in a very early stage but is slowly being developed to fulfill agronomists, farmers, and educators needs.

If you have any feature requests or would like to make use of Agromizer but you don't know how, feel free to contact us through the Issues page.

## Installation
1. First, you’ll need a working installation of the [PostgreSQL](https://www.postgresql.org/download/) database (we recommend version 11) and the latest [NodeJS](https://nodejs.org/en/).
2. Clone or [download](https://github.com/ImaginarySenseHackatons/Agromizer/archive/master.zip) this repository.
3. In Postgres, you’ll need to create an account and a database with the following credentials or credentials of your preference:
  * User: huerto
  * Password: Nk9M_FjCH5wu8X0fJB
  * Database: huerto
4. (Optional), if you choose to use different credentials, make sure to update the credentials in Agromizer by changing the `url` entry in `./backend/config/datastores.js`.
5. Start a terminal or command prompt on the Agromizer project.
6. Move to the `backend` folder by running `cd backend` on the terminal.
7. Install Node dependencies by running `npm install` on the terminal.
8. Start Agromizer by running `sails lift` on the terminal.
9. On a web browser, such as Firefox, go to the following address: `localhost:1337`.
10. Read [`/backend/config/routes.js`](https://github.com/ImaginarySenseHackatons/Agromizer/blob/master/backend/config/routes.js) for a list of pages and routes that compose Agromizer. (E.g. `localhost:1337`, `localhost:1337/map`)

## About the code
Agromizer is written in NodeJS using SailsJS for the backend, and Bootstrap, JQuery, and Konva for the frontend. It is licensed under the Apache 2.0 license.

At the time of writing, the code has a small plant database, a simple web interface and a plotter that places plant representations in 2D space.
 
## The authors
Agromizer was co-authored by [Javier Cordero](https://github.com/javiercordero), [Arlene López](https://github.com/arlini), and [Stefano Encarnación](https://github.com/Stech16) as part of the Agrohack Convention hackathon by Cobian Media.
