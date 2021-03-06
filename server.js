// requirements
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// activate routes
app.use(routes);

// turn on sequelize connection to db and server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT ' + PORT))
});