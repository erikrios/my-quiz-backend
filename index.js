const express = require("express");
const app = express();
const databaseConnection = require("./db/connections");

require("./startup/routes")(app);
require("./startup/prod")(app);

databaseConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
