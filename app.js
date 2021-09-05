const express = require("express");
const {
  app: { port },
} = require("./config/config");
const routes = require("./routes");

let app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

routes(app);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
