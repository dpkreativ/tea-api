require("dotenv").config(); // import dotenv
const express = require("express");
const routes = require("./routes/tea"); // import routes
const mongoose = require("mongoose"); // import mongoose
const helmet = require("helmet"); // import helmet
const compression = require("compression"); // import compression
const app = express();
app.use(helmet());
app.use(compression());

// connect to database
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.log(`Error: ${err}`);
    console.log(
      `MongoDB Connection - Ready state is: ${mongoose.connection.readyState}`
    );
  }
);

app.use(express.json()); // to parse incoming requests with JSON payloads
app.use("/", routes); // use the routes
app.use("/uploads", express.static("./uploads")); // make uploads folder publicly accessible

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});
