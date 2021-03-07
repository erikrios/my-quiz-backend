const express = require("express");
const app = express();
const sequelize = require("./db/models/index");

require("./startup/routes")(app);
require("./startup/prod")(app);

const connectToDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Postgres connection has been established successfully.");
  } catch (e) {
    console.error(`Unable to connecto to the database: ${e}`);
  }
};

connectToDatabase();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
