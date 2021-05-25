const express = require("express");
const routes = require("./routes/tea"); // import routes
const app = express();

app.use(express.json()); // to parse incoming requests with JSON payloads
app.use("/", routes); // use the routes

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});
